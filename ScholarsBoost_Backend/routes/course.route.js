import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getadmincourse, getAllCourse, getCourseById, postCourse } from "../controllers/course.controller.js";
 const router=express.Router();

 router.route("/post").post(isAuthenticated,postCourse);
 
 router.route("/get").get(isAuthenticated,getAllCourse);
 
 router.route("/getadmincourse").get(isAuthenticated,getadmincourse);
 
 router.route("/get/:id").get(isAuthenticated,getCourseById);

 export default router;
