import { Course } from "../models/course.model.js";
import { Mentor } from "../models/mentor.model.js";


export const registerMentor = async (req, res) => {
    try {
        const { MentorName } = req.body;
        if (!MentorName) {
            return res.status(400).json({
                message: "Mentor name is required.",
                success: false
            });
        }
        let mentor= await Mentor.findOne({ name: MentorName });
        if (mentor) {
            return res.status(400).json({
                message: "You can't register same Mentor.",
                success: false
            })
        };
        mentor = await Mentor.create({
            name: MentorName,
            userId: req.id
        });

        return res.status(201).json({
            message: "Mentor registered successfully.",
            mentor,
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}
export const getMentor= async (req, res) => {
    try {
        const userId = req.id; // logged in user id
        const mentors = await Course.find({ userId });
        if (!mentors) {
            return res.status(404).json({
                message: "mentor not found.",
                success: false
            })
        }
        return res.status(200).json({
            mentors,
            success:true
        })
    } catch (error) {
        console.log(error);
    }
}
// get mentor by id
export const getMentorById = async (req, res) => {
    try {
        const mentorId = req.params.id;
        const mentor = await Mentor.findById(mentorId);
        if (!mentor) {
            return res.status(404).json({
                message: "Mentor not found.",
                success: false
            })
        }
        return res.status(200).json({
            mentor,
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}
export const updateMentor = async (req, res) => {
    try {
        const { name, description, website, location } = req.body;
 
        const file = req.file;
        // idhar cloudinary ayega
       
    
        const updateData = { name, description, website, location };

        const mentor = await Mentor.findByIdAndUpdate(req.params.id, updateData, { new: true });

        if (!mentor) {
            return res.status(404).json({
                message: "Mentor not found.",
                success: false
            })
        }
        return res.status(200).json({
            message:"mentor information updated.",
            success:true
        })

    } catch (error) {
        console.log(error);
    }
}