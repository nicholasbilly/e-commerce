const chai = require('chai')
const app = require('../app')
const chaiHttp = require('chai-http')
chai.use(chaiHttp)
const expect = chai.expect
const User = require('../models/user')

describe("user testing", function() {
    // describe("POST /users/register", function() {
    //     it("should access if status code 201", function(done) {
    //         // after(function() {
    //         //     return User.deleteMany({})
    //         // })
    //         let user = {
    //             name: 'billy',
    //             password: 'abcde',
    //             email: 'billy@mail.com'
    //         }

    //         chai
    //         .request(app)
    //         .post('/users/register')
    //         .send(user)
    //         .end(function(err, res) {
    //             console.log(res.body)
    //             expect(res).to.have.status(201)
    //             expect(res).to.be.an('object')
    //             expect(err).to.be.null
    //             expect(res.body.data).to.have.property('name')
    //             expect(res.body.data).to.have.property('password')
    //             expect(res.body.data).to.have.property('email')
    //             expect(res.body.data.name).to.equal(user.name)
    //             expect(res.body.data.password).to.not.equal(user.password)
    //             expect(res.body.data.email).to.equal(user.email)
    //             done()
    //         })
    //     })
    // }),

    describe("POST /users/login", function() {
        it("should access if status 200", function(done) {
            let login = {
                email: 'billy@mail.com',
                password: 'abcde'
            }

            chai
            .request(app)
            .post('/users/login')
            .send(login)
            .end(function(err, res) {
                // console.log(res.body)
                expect(res).to.have.status(200)
                expect(res).to.be.an('object')
                expect(err).to.be.null
                expect(res.body).to.have.property('token')
                done()
            })
        })
    })
})