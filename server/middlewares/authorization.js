module.exports = (req, res, next) => {
    const User = require('../models/user')
    const { id } = req.decode
    User.findById(id)
    .then(data => {
        if(data.role == 'admin'){
            next()
        }
    })
    .catch(next)
}