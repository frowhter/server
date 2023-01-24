const Router = require('express')
const router = new Router()
const variationController = require('../controllers/variationController')

router.get('/', variationController.getAll)

module.exports = router