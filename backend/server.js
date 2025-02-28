const express = require("express")
const db = require("./db/conn")
require("dotenv").config()
const userRouter = require("./routes/userRouter")

const app = express()

const port = process.env.PORT

app.use(express.json())
app.use("/", userRouter)


app.listen(port, ()=>{
    console.log(`Server start at port ${port}`)
    db()
})