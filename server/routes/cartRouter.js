const express = require('express')
const router = express.Router()
const cartController = require('../controllers/cartController')
const authentication = require('../middlewares/authentication')

router.use(authentication)

router.post('/', cartController.create)
router.patch('/:id', cartController.addProduct)
router.patch('/:id/remove', cartController.deleteProduct)
router.get('/', cartController.getProduct)
router.get('/one', cartController.findOne)


module.exports = router