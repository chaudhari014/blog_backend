const express = require("express")
const bcrypt = require("bcrypt")
const jwt=require("jsonwebtoken")
const fs=require("fs")
const { usermodel } = require("../model/user.model")

const user = express.Router()

user.post("/register", async (req, res) => {
    try {
        bcrypt.hash(req.body.pass, 3, async (err, hash) => {
            req.body.pass = hash
            const data = new usermodel(req.body)
            await data.save()
            res.status(200).send({ "msg": "registration successfully" })
        });
    } catch (error) {
        res.send(error)
    }
})

user.post("/login", async (req, res) => {
    try {
        const data=await usermodel.findOne({email:req.body.email})
        console.log(data)
        if(data){
        bcrypt.compare(req.body.pass, data.pass, function(err, result) {
            if(result){
                res.send({"msg":"login successfully","token":jwt.sign({userid:data._id},"superman",{ expiresIn:"1m" }),"refresh_token":jwt.sign({userid:data._id},"badman",{ expiresIn:"3m" })})
            }else{
                res.send(err)
            }
        });
    }
    } catch (error) {
         res.send(error)
    }
})

// user.get("/logout",(req,res)=>{
    
// })


module.exports = { user }