const Cart = require('../models/cart')

class cartController {
    static create(req, res, next) {
        let userId = req.decode.id
        Cart.create({userId, products: []})
        .then(cart => {
            res.status(201).json(cart)
        })
        .catch(next)
    }

    static findOne(req, res, next) {
        let userId = req.decode.id
        Cart.findOne({userId})
        .then(data => {
            res.status(200).json(data)
        })
    }

    static addProduct(req, res, next) {
        let userId = req.decode.id
        let productId = req.params.id
        Cart.findOne({userId})
        .then(result => {
            let id = result._id
            Cart.findByIdAndUpdate(id, {$push: {products: productId}}, {new: true, runValidators: true})
            .then(data => {
                res.status(200).json(data)
            })
        })
        .catch(next)
    }

    static deleteProduct(req, res, next) {
        let userId = req.decode.id
        let productId = req.params.id
        Cart.findOne({userId})
        .then(result => {
            let id = result._id
            Cart.findByIdAndUpdate(id, {$pull: {products: productId}}, {new: true, runValidators: true})
            .then(data => {
                res.status(200).json(data)
            })
        })
        .catch(next)
    }

    static getProduct(req, res, next) {
        let userId = req.decode.id
        Cart.findOne({userId}).populate('products')
        .then(results => {
            res.status(200).json(results)
        })
        .catch(next)

    }
}

module.exports = cartController