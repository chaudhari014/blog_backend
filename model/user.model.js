const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    email:String,
    pass:String,
    city:String
})

const usermodel=mongoose.model("user",userSchema)

module.exports={usermodel}