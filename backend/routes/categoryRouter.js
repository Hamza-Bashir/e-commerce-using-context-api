const router = require("express").Router()
const {addCategory} = require("../controller/categoryControl")

router.post("/add-category", addCategory)

module.exports = router