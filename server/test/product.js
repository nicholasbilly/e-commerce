const chai = require('chai')
const app = require('../app')
const chaiHttp = require('chai-http')
chai.use(chaiHttp)
const expect = chai.expect

// after(function() {
//     return Product.deleteMany({})
// })

describe("product testing", function() {
    describe("POST /products", function() {
        it("Should access if status 201", function(done) {
            let product = {
                name: 'baju',
                price: 50000,
                image: 'aaaa',
                stock: 200
            }

            let token =
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNWE0ZmVhY2FkZGJlMmMxNjQxZGJiMSIsIm5hbWUiOiJiaWxseSIsImVtYWlsIjoiYmlsbHlAbWFpbC5jb20iLCJpYXQiOjE1NjYxOTk4MTd9.GxjMPQ_oucedglXYAeunnMzpIWExoUGgjt-l_cm_iHk'
    
            chai
            .request(app)
            .post('/products')
            .set('token', token)
            .send(product)
            .end(function(err, res) {
                expect(res).to.have.status(201)
                expect(res).to.be.an('object')
                expect(err).to.be.null
                expect(res.body.data).to.have.property('name')
                expect(res.body.data).to.have.property('price')
                expect(res.body.data).to.have.property('image')
                expect(res.body.data).to.have.property('stock')
                expect(res.body.data).to.have.property('userId')
                expect(res.body.data.name).to.equal(product.name)
                expect(res.body.data.price).to.equal(product.price)
                expect(res.body.data.image).to.equal(product.image)
                expect(res.body.data.stock).to.equal(product.stock)
                done()
            })
        })
    }),

    describe("GET /products", function() {
        it("Should access if status 200", function(done) {
            let token =
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNWE0ZmVhY2FkZGJlMmMxNjQxZGJiMSIsIm5hbWUiOiJiaWxseSIsImVtYWlsIjoiYmlsbHlAbWFpbC5jb20iLCJpYXQiOjE1NjYxOTk4MTd9.GxjMPQ_oucedglXYAeunnMzpIWExoUGgjt-l_cm_iHk'
    
            chai
            .request(app)
            .get('/products')
            .set('token', token)
            .end(function(err, res) {
                expect(res).to.have.status(200)
                expect(res).to.be.an('object')
                expect(err).to.be.null
                done()
            })
        })
    }),

    describe("GET /products/all", function() {
        it("Should access if status 200", function(done) {
            let token =
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNWE0ZmVhY2FkZGJlMmMxNjQxZGJiMSIsIm5hbWUiOiJiaWxseSIsImVtYWlsIjoiYmlsbHlAbWFpbC5jb20iLCJpYXQiOjE1NjYxOTk4MTd9.GxjMPQ_oucedglXYAeunnMzpIWExoUGgjt-l_cm_iHk'
            
            chai
            .request(app)
            .get('/products/all')
            .set('token', token)
            .end(function(err, res) {
                expect(res).to.have.status(200)
                expect(res).to.be.an('object')
                expect(err).to.be.null
                done()
            })
        })
    }),

    describe("PATCH /products/:id", function() {
        it("Should access if status 200", function(done) {
            let token =
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNWE0ZmVhY2FkZGJlMmMxNjQxZGJiMSIsIm5hbWUiOiJiaWxseSIsImVtYWlsIjoiYmlsbHlAbWFpbC5jb20iLCJpYXQiOjE1NjYxOTk4MTd9.GxjMPQ_oucedglXYAeunnMzpIWExoUGgjt-l_cm_iHk'
            let productId = '5d5a7db1d1f2eb42e47f14f1'
            let updatedProduct = {
                name: 'celana',
                price: 30000,
                image: 'bbbb',
                stock: 100
            }
            chai
            .request(app)
            .patch(`/products/${productId}`)
            .set('token', token)
            .send(updatedProduct)
            .end(function(err, res) {
                expect(res).to.have.status(200)
                expect(res).to.be.an('object')
                expect(err).to.be.null
                expect(res.body).to.have.property('name')
                expect(res.body).to.have.property('price')
                expect(res.body).to.have.property('image')
                expect(res.body).to.have.property('stock')
                expect(res.body.name).to.equal(updatedProduct.name)
                expect(res.body.price).to.equal(updatedProduct.price)
                expect(res.body.image).to.equal(updatedProduct.image)
                expect(res.body.stock).to.equal(updatedProduct.stock)
                done()
            })
        })
    }),

    describe("DELETE /products/:id", function() {
        it("Should access if status 200", function(done) {
            let token =
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNWE0ZmVhY2FkZGJlMmMxNjQxZGJiMSIsIm5hbWUiOiJiaWxseSIsImVtYWlsIjoiYmlsbHlAbWFpbC5jb20iLCJpYXQiOjE1NjYxOTk4MTd9.GxjMPQ_oucedglXYAeunnMzpIWExoUGgjt-l_cm_iHk'
            let productId = '5d5a7db1d1f2eb42e47f14f1'

            chai
            .request(app)
            .delete(`/products/${productId}`)
            .set('token', token)
            .end(function(err, res) {
                expect(res).to.have.status(200)
                expect(err).to.be.null
                done()
            })
        })
    })
})

