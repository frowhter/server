const Router = require('express')
const router = new Router()
const models_infoController = require('../controllers/models_infoController')

router.get('/', models_infoController.getAll)

module.exports = router