const {Cats, Cat_variations} = require('../models/models')
const ApiError = require("../error/ApiError");
class VariationController {


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

            const variations = await Cat_variations.findAll(
                {where:{cat_id: Detail.id}}
            )
            return res.json(variations)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }


    }

}

module.exports = new VariationController()