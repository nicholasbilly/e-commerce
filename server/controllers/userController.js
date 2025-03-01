require('dotenv').config()
const User = require('../models/user')
const { encrypt } = require('../helpers/hash')
const { decrypt } = require('../helpers/hash')
// const { OAuth2Client } = require('google-auth-library');
// const client = new OAuth2Client(process.env.CLIENT_ID);
const { generateToken } = require('../helpers/token')

class UserController {
    // static GsignIn(req, res, next){
    //     client.verifyIdToken({
    //         idToken: req.body.idToken,
    //         audience: process.env.CLIENT_ID,
    //       })
    //       .then(ticket => {
    //         const payload = ticket.payload;
    //         return User.findOne({
    //                 email: payload.email        
    //         })
    //         .then(result => {
    //             if(!result){
    //                 return User.create({
    //                     name: payload.name,
    //                     email: payload.email,
    //                     password: encrypt(process.env.PASSWORD)
    //                 })
    //             } else {
    //                 return result
    //             }
    //         })
    //         .then(user => {
    //             let dataUser = {
    //                 id: user.id,
    //                 name: user.name,
    //                 email: user.email
    //             }
    //             let token = generateToken(dataUser)
    //             res.status(200).json({
    //                 token,
    //                 message: 'Login Success'
    //             })
    //         })
    //       })
    //       .catch(next)
    // }

    static signIn(req, res, next){
        const {email, password} = req.body
        User.findOne({
            email: email
        })
        .then(user => {
            // if(user.role) {
            //     if(decrypt(password,user.password)) {
            //         const payload = {
            //             id: user._id,
            //             name: user.name,
            //             email: user.email
            //         }
            //         const token = generateToken(payload)
            //         res.status(200).json({token, role:})
            //     }
            // }
            if(user){
                if(decrypt(password,user.password)) {
                    const payload = {
                        id: user._id,
                        name: user.name,
                        email: user.email
                    }
                    const token = generateToken(payload)
                    res.status(200).json({token, role: user.role})
                } else { 
                    next
                }
            } else {
                next
            }
        })
        .catch(next)
    }

    static register(req,res,next){
        const {name, email, password} = req.body
        User.create({
            name, email, password: encrypt(password)
        })
        .then(data => {
            res.status(201).json(data)
        })
        .catch(next)
    }
}

module.exports = UserController