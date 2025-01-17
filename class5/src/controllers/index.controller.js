const userModel = require("../models/user.model");

module.exports.indexController = (req, res)=>{
    res.send('Hello world')
}

module.exports.registerController = async (req, res)=>{
    console.log(req.query);
    const {username, email, password} = req.query

    const newUser = new userModel({
        username,
        email,
        password
    })

    await newUser.save()
    res.send("Chud Gye Guru ;chud gye guru wala bandar;")
    
}