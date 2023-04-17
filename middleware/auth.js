const jwt=require("jsonwebtoken")

const auth=(req,res,next)=>{
    const token=req.headers.authorization
    if(token){
        var decoded = jwt.verify(token, 'superman')
         req.body.userid=decoded.userid
       next()
    }
}

module.exports={auth}