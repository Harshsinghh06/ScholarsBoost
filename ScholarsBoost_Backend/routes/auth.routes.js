import express from "express"
import { getphone, login, logout,postMobile,register } from "../controllers/auth.controller.js";
import { verifyToken } from "../middleware/jwt.js";
const router = express.Router();
router.post("/login",login)
router.post("/register",register)
router.post("/logout",logout)
router.get("/",getphone)
router.post("/login/mobile",postMobile)
export default router