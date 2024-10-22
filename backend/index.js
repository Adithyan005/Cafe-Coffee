import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import UserModel from "./models/Customers.js";
import AppointmentModel from "./models/Appointment.js";
const app=express();

app.use(cors());
app.use(express.json())

mongoose.connect("mongodb+srv://adithyanm22cse:Gb1SwiuizBxFh1Qj@cluster0.f9uba.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
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

app.post('/appointment/insert',async(req,res)=>{
    const {name,phone,count,date,time} = req.body
    try {
        const appointment=new AppointmentModel({
            name,phone,count,date,time
        })
        await appointment.save();
        console.log('inserted')
        res.status(200).json({"message":"Inserted Successfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"Not inserted"})
    }
})



app.listen(4000,console.log("server running on 4000"));


