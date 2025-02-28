const user = require("../model/userModel")
const bcrypt = require("bcryptjs")

const register = async (req,res)=>{
  try {

    const {name, email, password, phoneNumber, address} = req.body

    if(!name || !email || !password || !phoneNumber || !address){
      return res.status(400).json({
        message:"Something is missing"
      })
    }

    const existingUser = await user.findOne({email})
    if(existingUser){
      return res.status(400).json({
        message:"User already exist"
      })
    }

    const hashPass = await bcrypt.hash(password,10)

    await user.create({
      name,
      email,
      password:hashPass,
      phoneNumber,
      address
    })

    res.status(200).json({
      message:"Register successfully"
    })
    
  } catch (error) {
    res.status(500).json({
      error:error.message
    })
  }
}

const login = async (req,res)=>{
  try {
    const {email, password} = req.body

    if(!email || !password){
      return res.status(400).json({
        message:"Something is missing"
      })
    }

    const existingUser = await user.findOne({email})

    if(!existingUser){
      return res.status(400).json({
        message:"User not found, please register it"
      })
    }

    const isPass = await bcrypt.compare(password, existingUser.password)

    if(!isPass){
      return res.status(400).json({
        message:"Password is not correct"
      })
    }

    res.status(200).json({
      message:"Login successfully",
      existingUser
    })
  } catch (error) {
    res.status(500).json({
      error:error.message
    })
  }
}

module.exports = {register, login}