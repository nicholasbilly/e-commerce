if(!process.env.NODE_ENV || process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'){
    require('dotenv').config()
}
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000
const userRouter = require('./routes/userRouter')
const productRouter = require('./routes/productRouter')

app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())

mongoose.connect(`mongodb://localhost:27017/ecommerce-${process.env.NODE_ENV}`, { useNewUrlParser: true })
.then(success => {
    console.log('mongoose connected')
})
.catch(err => {
    console.log(err.message)
})

app.use('/users', userRouter)
app.use('/products', productRouter)

app.use((err, req, res, next) => {
    // console.log(err)
    res.status(err.code).json({
        message: err.message
    })
})

app.listen(PORT, (req, res) => {
    console.log(`connected to port ${PORT}`)
})

module.exports = app