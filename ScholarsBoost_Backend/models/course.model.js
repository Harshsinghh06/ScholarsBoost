import mongoose, { Types } from "mongoose";
const courseSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    courseType:{
        type:String,
        required:true
    },
    mentor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Mentor',
        required:true
    },
    created_by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    applications:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Application',
    }
]
},{timestamps:true})

export const Course=mongoose.model("Course",courseSchema);