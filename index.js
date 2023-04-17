const express=require("express")
const {connection}=require("./db")
const {user}=require("./routes/user.rout")
const {blog}=require("./routes/blog.rout")
const {auth}=require("./middleware/auth")
const dotenv=require("dotenv")
dotenv.config()
const app=express()

app.use(express.json())
app.use("/users",user)

app.use(auth)

app.use("/blog",blog)



app.listen(process.env.port,async(req,res)=>{
    try {
        await connection
        console.log("connected to db")
    } catch (error) {
        console.log(error)
    }
    console.log("connected server")
})