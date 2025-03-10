const express = require("express")
const db = require("./db/conn")
const cors = require("cors")
require("dotenv").config()
const userRouter = require("./routes/userRouter")
const requireSign = require("./middleware/auth")
const categoryRouter = require("./routes/categoryRouter")


const app = express()

const port = process.env.PORT

app.use(cors())


app.use(express.json())
app.use("/", userRouter)
app.use("/", categoryRouter)

app.get("auth-user", requireSign, (req,res)=>{
    res.status(200).json({ok:true})
})




app.listen(port, ()=>{
    console.log(`Server start at port ${port}`)
    db()
})