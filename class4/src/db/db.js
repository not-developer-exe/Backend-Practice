const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/class4")
  .then(() => {
    console.log("connected to db");
  })

  .catch((err) => {
    console.log(err);
  });

  const driverSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  mobile: {
    type: String,
  },
  password: {
    type: String,
  },
});


const driverModel = mongoose.model("driver", driverSchema)

module.exports = driverModel
