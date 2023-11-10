import express  from "express";
const router=express.Router();
import {registerController,
    loginController,
    testController,
    forgrtPasswordController,
    updateProfileController,
    allUser
} from '../controller/authController.js';
import { isAdmin, requireSigning } from "../middleware/authMiddleware.js";

router.post('/register',registerController);
router.post('/login',loginController);
router.get('/alluser',allUser);
//forgrt password
router.post('/forgot-password',forgrtPasswordController)

//update profile
router.put("/profile", requireSigning, updateProfileController);

//protrct route
router.get('/test',requireSigning,isAdmin,testController)


//protected route Auth user
router.get("/user-auth", requireSigning, (req, res) => {
    res.status(200).send({ ok: true });
  });
//protected route Auth admin
router.get("/admin-auth", requireSigning,isAdmin,(req, res) => {
    res.status(200).send({ ok: true });
  });



export default router;