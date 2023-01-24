const Router = require('express')
const router = new Router()
const productsController = require('../controllers/productsController')

router.get('/', productsController.getAll)
router.get('/random', productsController.getRandom)

module.exports = router