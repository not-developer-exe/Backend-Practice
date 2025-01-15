const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/class4")
  .then(() => {
    console.log("connected to db");
  })

  .catch((err) => {
    console.log(err);
  });


const userSchema = new mongoose.Schema({
    username: String,
    age: Number,
    email: String
})

mongoose.model("user", userSchema)