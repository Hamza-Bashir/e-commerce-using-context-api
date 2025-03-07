const mongoose = require("mongoose")

const userSch = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  phoneNumber:{
    type:String,
    required:true
  },
  address:{
    type:String,
    required:true
  },
  answer:{
    type:String,
    required:true
  },
  role:{
    type:Number,
    default:0
  }
})

module.exports =  mongoose.model("user", userSch)