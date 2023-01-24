const {Cats} = require('../models/models')
const sequelize = require('../db')
const ApiError = require("../error/ApiError");
class CatsController {

    async getAllBrands (req, res, next) {
        try{
            const cats = await Cats.findAll(
                {
                    where:{parent_id: null},
                    raw: true,
                    order: sequelize.literal('name ASC')
                }
            )
            return res.json(cats)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getAllModels (req, res, next) {
        try{
            const {brand} = req.query
            const Brand = await Cats.findOne(
                {where:{name: brand}}
            )
            const models = await Cats.findAll(
                {where:{parent_id: Brand.id}, raw: true }
            )
            return res.json(models)

        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getAllDetails (req, res, next) {
        try{
            const {brand,model} = req.query
            const Brand = await Cats.findOne(
                {where:{name: brand}}
            )
            const Model = await Cats.findOne(
                {where:{name: model, parent_id:Brand.id}}
            )
            const details = await Cats.findAll(
                {where:{parent_id: Model.id}, raw: true }
            )
            return res.json(details)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }

    }

}

module.exports = new CatsController()