const driverModel = require('../db/db')

module.exports.indexController = (req, res)=>{
    res.send({
        msg: 'Hello from index controller'
    })
}