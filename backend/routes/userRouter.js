const router = require("express").Router()
const {register, login, forgetPassword} = require("../controller/userControl")


router.post("/register", register)
router.post("/login", login)
router.post("/forget-password", forgetPassword)

module.exports = router