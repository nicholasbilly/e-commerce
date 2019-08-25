const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.use(authentication)

router.post('/', authorization, productController.create)
router.get('/', productController.find)
router.patch('/:id', authorization, productController.update)
router.delete('/:id', authorization, productController.deleteProduct)
router.get('/:id', productController.findOne)

module.exports = router