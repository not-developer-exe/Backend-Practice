const express = require('express')
const indexRoutes = require('./routes/index.routes')
const app = express()


app.get('/', indexRoutes)


module.exports = app