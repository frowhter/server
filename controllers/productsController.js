const {Products, Cats} = require('../models/models')
const ApiError = require("../error/ApiError");
const sequelize = require('../db')


class ProductsController {


    async getAll (req, res, next) {
        try{
            const {brand, model, detail} =  req.query
            const Brand = await Cats.findOne(
                {where:{name: brand}}
            )
            const Model = await Cats.findOne(
                {where:{name: model, parent_id:Brand.id}}
            )
            const Detail = await Cats.findOne(
                {where:{name: detail, parent_id:Model.id}}
            )

            const products = await Products.findAll(
                {where:{cat_id: Detail.id}}
            )
            return res.json(products)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }


    }

    async getRandom (req, res, next) {
        try{
            const products = await Products.findAll(
                { limit: 50}
            )
            return res.json(products)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }


    }

}

module.exports = new ProductsController()