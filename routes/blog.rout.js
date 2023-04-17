const express = require("express")
const {blogmodel}=require("../model/blog.model")

const blog=express.Router()
blog.get("/",async(req,res)=>{
    try {
        const data=await blogmodel.find()
        res.send({"msg":data})
    } catch (error) {
        res.send({"msg":error.message})
    }
})

blog.post("/add",async(req,res)=>{
    try {
        const data=new blogmodel(req.body)
        await data.save()
        res.send({"msg":"blog add successfully"})
    } catch (error) {
        res.send({"msg":error.message})
    }
})
blog.patch("/update/:id",async(req,res)=>{
     const {id}=req.params
    try {
        // const usetdata=blogmodel.find({userid:req.body.userid})
        const data=await blogmodel.findByIdAndUpdate({_id:id,userid:req.body.userid},req.body)
        res.send({"msg":"update blog successfully"})
    } catch (error) {
        res.send({"msg":error.message})
    }
})

blog.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params
   try {
       const data=await blogmodel.findByIdAndDelete({_id:id,userid:req.body.userid})
       res.send({"msg":"delete blog successfully"})
   } catch (error) {
       res.send({"msg":error.message})
   }
})

module.exports={blog}