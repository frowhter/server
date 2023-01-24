const Router = require('express')
const router = new Router()
const catsController = require('../controllers/catsController')

router.get('/', catsController.getAllModels)

module.exports = router