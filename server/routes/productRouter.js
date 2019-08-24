const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')
const authentication = require('../middlewares/authentication')
// const authorization = require('../middlewares/authorization')

router.use(authentication)

router.post('/', productController.create)
router.get('/', productController.find)
router.patch('/:id', productController.update)
router.delete('/:id', productController.deleteProduct)
router.get('/:id', productController.findOne)

module.exports = router