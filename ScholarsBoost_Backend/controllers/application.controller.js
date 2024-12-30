import { Application } from "../models/application.model.js";
import { Course } from "../models/course.model.js";


export const applyCourse = async (req, res) => {
    try {
        const userId = req.id;
        const courseId = req.params.id;
        if (!courseId) {
            return res.status(400).json({
                message: "Course id is required.",
                success: false
            })
        };
        const existingApplication = await Application.findOne({ course: courseId, applicant: userId });

        if (existingApplication) {
            return res.status(400).json({
                message: "You have already applied for this Course",
                success: false
            });
        }

        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({
                message: "Course not found",
                success: false
            })
        }
        const newApplication = await Application.create({
            course:courseId,
            applicant:userId,
        });

        course.applications.push(newApplication._id);
        await course.save();
        return res.status(201).json({
            message:"Course applied successfully.",
            success:true
        })
    } catch (error) {
        console.log(error);
    }
};

export const getAppliedCourses = async (req,res) => {
    try {
        const userId = req.id;
        const application = await Application.find({applicant:userId}).sort({createdAt:-1}).populate({
            path:'course',
            options:{sort:{createdAt:-1}},
            populate:{
                path:'mentor',
                options:{sort:{createdAt:-1}},
            }
        });
        if(!application){
            return res.status(404).json({
                message:"No Applications",
                success:false
            })
        };
        return res.status(200).json({
            application,
            success:true
        })
    } catch (error) {
        console.log(error);
    }
}
//for anuj to get total number of student applied for course

export const getApplicants = async (req,res) => {
    try {
        const courseId= req.params.id;
        const course = await Course.findById(courseId).populate({
            path:'applications',
            options:{sort:{createdAt:-1}},
            populate:{
                path:'applicant'
            }
        });
        if(!course){
            return res.status(404).json({
                message:'course not found.',
                success:false
            })
        };
        return res.status(200).json({
            course, 
            succees:true
        });
    } catch (error) {
        console.log(error);
    }
}

// Student k liye h ki unko pta chal jaye ki unhone jo course liya uska status kya h 

export const updateStatus=async(req,res)=>{
    try {
        const {status}=req.body;
        const applicationId=req.params.id;
        if(!status){
            return res.status(400).json({
                message:"Status is required",
                success:false
            })
        }
        //find the application by application id
        
        const application=await Application.findOne({_id:applicationId});
        if(!application){
            return res.status(404).json({
                message:"Application not found ",
                success:false
            })
        }

        //update status
        application.status=status.toLowerCase();
        await application.save();
        return res.status(200).json({
            message:"Status updated successfully",
            success:true
        })

    } catch (error) {
        console.log(error);
    }
}