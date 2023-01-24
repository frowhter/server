const {Customer_reviews} = require('../models/models')
const ApiError = require("../error/ApiError");
class Customer_reviewsController {


    async getAll (req, res, next) {
        try{
            const customer_reviews = await Customer_reviews.findAll()
            return res.json(customer_reviews)
        }catch (e) {
            next(ApiError.internal(e.message))
        }


    }

}

module.exports = new Customer_reviewsController()