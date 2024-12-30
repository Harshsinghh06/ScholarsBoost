import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./util/db.js";
import userRoute from "./routes/user.route.js"
import courseRoute from "./routes/course.route.js"
import mentorRoute from "./routes/mentor.route.js"
import applicationRoute from "./routes/application.route.js"

dotenv.config({});

const app=express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOption={
    origin:'http//localhost:5173',
    creedentials:true
}

app.use(cors(corsOption));
 const PORT= process.env.PORT || 3000;

app.use("/api/v1/user",userRoute);
app.use("/api/v1/course",courseRoute);
app.use("/api/v1/mentor",mentorRoute);
app.use("/api/v1/application",applicationRoute);

 app.listen(PORT,()=>{
    connectDB()
    console.log(`server running at PORT ${PORT}`);
 })