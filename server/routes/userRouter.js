const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

// router.post('/gsignin', userController.GsignIn)
router.post('/login', userController.signIn)
router.post('/register', userController.register)

module.exports = router