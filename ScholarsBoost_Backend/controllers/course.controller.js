import { trusted } from "mongoose";
import { Course } from "../models/course.model.js";


export const postCourse = async (req, res) => {
    try {
        const { title, description,location, courseType,mentorId } = req.body;
        const userId = req.id;

        if (!title || !description || !location || !courseType || !mentorId) {
            return res.status(400).json({
                message: "Something is missing.",
                success: false
            })
        };
        const job = await Course.create({
            title,
            description,
            location,
            courseType,
            mentor: mentorId,
            created_by: userId
        });
        return res.status(201).json({
            message: "New course created successfully.",
            job,
            success: true
        });
    } catch (error) {
        console.log(error);
    }
}

export const getAllCourse=async(req,res)=>{
    try {
        const keyword=req.query.keyword || "";
        const query = {
            $or: [
                { title: { $regex: keyword, $options: "i" } },
                { description: { $regex: keyword, $options: "i" } },
            ]
        };
        const courses=await Course.find(query).populate({
            path:"mentor"
        }).sort({createdAt:-1});
        if(!courses){
            return res.status(404).json({
                message:"Course not found",
                success:false
            })
        }
        return res.status(200).json({
            courses,
            success:trusted
        })
    } catch (error) {
        console.log(error);
    }
}

export const getCourseById = async (req, res) => {
    try {
        const courseId = req.params.id;
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({
                message: "Course not found.",
                success: false
            })
        };
        return res.status(200).json({ course, success: true });
    } catch (error) {
        console.log(error);
    }
}

export const getadmincourse=async(req,res)=>{
    try {
        const adminId=req.id;
        const course=await Course.find({created_by:adminId})
        if(!course){
            return res.status(404).json({
                message:"Course not found",
                success:true
            })
        }
        return res.status(200).json({
            course,
            success:true
        })
    } catch (error) {
        console.log(error);
    }
}