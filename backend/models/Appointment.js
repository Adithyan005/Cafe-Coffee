import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    count:{
        type:Number,
        required:true,
    },
    date:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    }
})

const AppointmentModel= mongoose.model("appointments",AppointmentSchema)
export default AppointmentModel