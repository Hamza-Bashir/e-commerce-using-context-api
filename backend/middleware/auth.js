const jwt = require("jsonwebtoken")



const requireSign = async (req,res,next)=>{
    try {
        
        const token = req.headers.authorization?.split(" ")[1]
        jwt.verify(token, process.env.JWT_KEY, (err, decode)=>{
            if(err){
                return res.status(401).json({
                    message:"Invalid token"
                })
            }

            req.user = decode

            return next()
        })


    } catch (error) {
        res.status(500).json({
            error:error.message
        })
    }
}


module.exports = requireSign