const express = require("express")
const db = require("./db/conn")
require("dotenv").config()

const app = express()

const port = process.env.PORT


app.listen(port, ()=>{
    console.log(`Server start at port ${port}`)
    db()
})