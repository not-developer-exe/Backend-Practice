const userModel = require('../models/user.model');
const userController = (req,res)=>{
    res.send("hello from user!");
}

const createUser = async(req,res)=>{
    const {username, age, email,password}=req.query;
    // res.send(req.query);

   const newUser = await userModel.create({
        name:username,
        email:email,
        password:password,
        age:age,
    })
    
  res.send(newUser);





}

const userUpdate = async(req,res)=>{
    const updateUser =  await userModel.findOneAndUpdate({
        name:"sheetal",
    },{
        age:"34",
    },{new:true});
     await updateUser.save();
    res.send(updateUser);

}

const FindUsers =async (req,res)=>{
    const allUsers = await userModel.find();
    res.send(allUsers);

}

module.exports = {createUser,userController,userUpdate,FindUsers};
