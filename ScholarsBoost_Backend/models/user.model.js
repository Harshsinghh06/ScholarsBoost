import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        requitred:true
    },
    role:{
        type:String,
        enum:['mentee','mentor'],
        required:true
    },
    profile:{
        bio:{type:String},
        courses:[{type:String}],
        enrolled:{type:mongoose.Schema.Types.ObjectId, ref:'Mentor'},
        profilePhoto:{
            type:String,
            default:""
        }
    },
},{timestamps:true});
export const User=mongoose.model('User',userSchema);