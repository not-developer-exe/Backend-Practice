const express = require('express')
const controller = require('./controller/index.controller')
const userController = require('./controller/user.controller')
const app = express()

app.get('/', controller.indexController) 
app.get('/users/profile', userController.getProfileController)


module.exports = app;