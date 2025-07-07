import express from 'express';
import { loginController, registerController, testController } from '../controllers/authController.js';
import { requireSignIn, isAdmin } from '../middlewares/authMiddleware.js';


const router = express.Router()

// Route to handle user registration
router.post('/register', registerController); 

router.post('/login', loginController); 

router.post('/test' ,requireSignIn,isAdmin,testController);

export default router