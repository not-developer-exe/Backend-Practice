const express = require("express"); // require express and set up the server ;
const app = express();

const userRouter = require('../src/routes/user.routes');
app.use('/users',userRouter);





module.exports = app;

