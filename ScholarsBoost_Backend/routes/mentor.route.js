import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getMentor, getMentorById, registerMentor, updateMentor } from "../controllers/mentor.controller.js";
 const router=express.Router();

 router.route("/register").post(isAuthenticated,registerMentor);
 
 router.route("/get").get(isAuthenticated,getMentor);
 
 router.route("/get/:id").get(isAuthenticated,getMentorById);
 
 router.route("/update/:id").put(isAuthenticated,updateMentor);

 export default router;
