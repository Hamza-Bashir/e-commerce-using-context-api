const user = require("../model/userModel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const register = async (req,res)=>{
  try {

    const {name, email, password, phoneNumber, address, answer} = req.body

    if(!name){
      return res.status(401).json({
        error:"Name is required"
      })
    }

    if(!email){
      return res.status(401).json({
        error:"Email is required"
      })
    }

    if(!password){
      return res.status(401).json({
        error:"Password is required"
      })
    }

    if(!phoneNumber){
      return res.status(401).json({
        error:"PhoneNUmber is required"
      })
    }

    if(!address){
      return res.status(401).json({
        error:"Address is required"
      })
    }

    if(!address){
      return res.status(401).json({
        error:"Address is required"
      })
    }
    

    const existingUser = await user.findOne({email})
    if(existingUser){
      return res.status(400).json({
        message:"User already exist"
      })
    }

    // const hashPass = await bcrypt.hash(password,10)

    await user.create({
      name,
      email,
      password,
      phoneNumber,
      address,
      answer
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

    // const isPass = await bcrypt.compare(password, existingUser.password)

    // if(!isPass){
    //   return res.status(400).json({
    //     message:"Password is not correct"
    //   })
    // }


    console.log(existingUser.password)
    if(existingUser.password !== password){
      return res.status(401).json({
        message:"Password is not correct"
      })
    }

    const token = jwt.sign({_id:existingUser._id}, process.env.JWT_KEY)

    res.status(200).json({
      message:"Login successfully",
      token
    })
  } catch (error) {
    res.status(500).json({
      error:error.message
    })
  }
}

const forgetPassword = async (req,res)=>{
  try {
    const {email, answer, newPassword} = req.body

    if(!email){
      return res.status(401).json({
        error:"Email is required"
      })
    }


    if(!answer ){
      return res.status(401).json({
        error:"Answer is required"
      })
    }

    if(!newPassword){
      return res.status(401).json({
        error:"New Password is required"
      })
    } 

    const existingUser = await user.findOne({email})

    if(!existingUser){
      return res.status(401).json({
        error:"User not found"
      })
    }

    if(existingUser.answer !== answer){
      return res.status(401).json({
        error:"Answer not matched"
      })
    }
    
    existingUser.password = newPassword

    await existingUser.save()
    res.status(200).json({
      message:"Password reset successfully"
    })

  } catch (error) {
    res.status(500).json({
      error:error.message
    })
  }
}

module.exports = {register, login, forgetPassword}