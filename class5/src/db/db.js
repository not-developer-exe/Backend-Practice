const mongoose = require('mongoose')

const connect = () =>{
    mongoose.connect('mongodb://localhost:27017/class5')
        .then(()=>{
            console.log('Connected to DB');
            
        })
        .catch((err)=>{
            console.log(err);
            
        })
}

module.exports = connect