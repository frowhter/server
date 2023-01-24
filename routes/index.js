const Router = require('express')
const router = new Router()
const customer_reviewsRouter = require('./customer_reviewsRouter')
const brandsRouter = require('./brandsRouter')
const modelsRouter = require('./modelsRouter')
const detailsRouter = require('./detailsRouter')
const productsRouter = require('./productsRouter')
const models_infoRouter = require('./models_infoRouter')
const mailRouter = require('./mailRouter')
const variationRouter = require('./variationRouter')



router.use('/brands', brandsRouter)
router.use('/models', modelsRouter)
router.use('/details', detailsRouter)
router.use('/customer_reviews', customer_reviewsRouter)
router.use('/products', productsRouter)
router.use('/models_info', models_infoRouter)
router.use('/mail', mailRouter)
router.use('/variations', variationRouter)

module.exports = router