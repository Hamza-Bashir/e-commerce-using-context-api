const mongoose = require("mongoose")

const db = async ()=>{
  await mongoose.connect(process.env.MONGO_URI)
  .then(()=>{
    console.log("DB Connected")
  })
  .catch((error)=>{
    console.log("DB not connected")
  })
}

module.exports = db