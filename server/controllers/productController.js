const Product = require('../models/product')

class ProductController {
    //buat admin
    static create(req, res, next) {
        let { id } = req.decode
        let { name, price, image, stock } = req.body
        Product.create({ name, price, image, stock, userId: id})
        .then(product => {
            res.status(201).json({data: product, message: 'new product created'})
        })
        .catch(next)
    }
    //buat admin
    static find(req, res, next) {
        let { id } = req.decode
        Product.find({userId: id})
        .then(products => {
            res.status(200).json(products)
        })
        .catch(next)
    }
    //buat customer
    static findAll(req, res, next) {
        Product.find()
        .then(products => {
            res.status(200).json(products)
        })
        .catch(next)
    }

    //buat admin
    static update(req, res, next) {
        let { id } = req.params
        let updatedData = {}
        req.body.name && (updatedData.name = req.body.name)
        req.body.price && (updatedData.price = Number(req.body.price))
        req.body.image && (updatedData.image = req.body.image)
        req.body.stock && (updatedData.stock = Number(req.body.stock))
        Product.findByIdAndUpdate(id, updatedData, {new: true, runValidators:true})
        .then(result => {
            res.status(200).json(result)
        })
        .catch(next)
    }
    //buat admin
    static delete(req, res, next) {
        Product.findByIdAndDelete(req.params.id)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(next)
    }
}

module.exports = ProductController