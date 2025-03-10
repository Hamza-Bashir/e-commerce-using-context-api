const categoryModel = require("../model/categoryModel")
const slugify = require("slugify")
const addCategory = async (req,res)=>{
    try {
        const {name} = req.body

        if(!name){
            return res.status(400).json({
                message:"Name is required"
            })
        }

        const existingCategory = await categoryModel.findOne({name})

        if(existingCategory){
            return res.status(400).json({
                message:"Category already exist"
            })
        }

        const category = await new categoryModel({name, slug:slugify(name)}).save()
        res.status(200).json({
            message:"New category added"
        })
    } catch (error) {
        res.status(500).json({
            error:error.message
        })
    }
}

module.exports = {addCategory}