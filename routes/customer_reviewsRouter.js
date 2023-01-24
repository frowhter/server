const Router = require('express')
const router = new Router()
const customer_reviewsController = require('../controllers/customer_reviewsController')


router.get('/', customer_reviewsController.getAll)

module.exports = router