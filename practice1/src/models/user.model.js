const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    }
})


module.exports = mongoose.model("User",userSchema);