const Router = require('express')
const router = new Router()
const mailController = require('../controllers/mailController')

router.post('/selection', mailController.postFormSelection)
router.post('/call', mailController.postFormCall)

module.exports = router