import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import UserModel from "./models/Customers.js";
const app=express();

app.use(cors());
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/coffee")
try {
    console.log('connected')
} catch (error) {
    console.log(error)
}

app.post('/',async(req,res)=>{
    const {name,email,phone,message} = req.body
    try {
        const user=new UserModel({
            name,
            email,
            phone,
            message
        })
        await user.save();
        res.status(200).json({"message":"successfully inserted"})
        console.log('inserted')
    } catch (error) {
        res.status(500).json({"message":"not inserted"})
        console.log(error)
    }
})

app.listen(4000,console.log("server running on 4000"));


