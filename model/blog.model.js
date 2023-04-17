const mongoose=require("mongoose")

const blogSchema=mongoose.Schema({
    title:String,
    body:String,
    userid:String
})

const blogmodel=mongoose.model("blog",blogSchema)

module.exports={blogmodel}