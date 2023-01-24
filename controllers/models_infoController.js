const {Models_info, Cats} = require('../models/models')
const ApiError = require("../error/ApiError");
const sequelize = require("../db");
class Models_infoController {


    async getAll (req, res, next) {
        try {
            const {model} = req.query
            const Model = await Cats.findOne(
                {where:{name: model}}
            )
            const generations = await Models_info.findAll(
                {
                    where:{sub_cat_id: Model.id},
                    raw: true,
                    order: sequelize.literal('pokolenie ASC')
                }
            )
            return res.json(generations)

        }catch (e){
            next(ApiError.internal(e.message))
        }

    }

}

module.exports = new Models_infoController()