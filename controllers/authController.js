import userModel from "../models/userModel.js";
import { hashPassword } from "../helpers/authHelper.js";
import  JWT from "jsonwebtoken";
import bcrypt from "bcrypt";
import Profile from '../students/src/components/user/Profile';

export const registerController = async (req, res) => {
  try {
    const { name, email, password, gender, phone, hostelBlock, roomNumber, course, passingYear } = req.body;

    if (!name || !email || !password || !gender || !phone || !hostelBlock || !roomNumber || !course || !passingYear) {
      return res.status(400).send({
        success: false,
        message: "All fields are required",
      });
    }

    const collegeEmailRegex = /^[a-zA-Z0-9._%+-]+@rgipt\.ac\.in$/;
    if (!collegeEmailRegex.test(email)) {
      return res.status(400).send({
        success: false,
        message: "Only RGIPT college email are allowed",
      });
    }

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(409).send({
        success: false,
        message: "User already exists. Please login.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new userModel({
      name,
      email,
      password: hashedPassword,
      gender, 
      phone,
      hostelBlock,
      roomNumber,
      course,
      passingYear,
    });
    await user.save();

    res.status(201).send({
      success: true,
      message: "User registered successfully",
      user: {
        name: user.name,
        email: user.email,
        gender: user.gender,
        phone: user.phone,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).send({
      success: false,
      message: "Error in registration",
      error: error.message,
    });
  }
};


export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate required fields
        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: "Invalid email or password",
            });
        }

        // Find user by email
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "Email is not registered",
            });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(200).send({
                success: false,
                message: "Invalid credentials",
            });
        } 

        // Generate JWT token
        const token = await JWT.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7D' });

        res.status(200).send({
            success: true,
            message: "Login successfully",
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                role: user.role,
            },
            token,
        });

    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).send({
            success: false,
            message: "Error in login",
            error: error.message,
        });
    }
};

export const testController = (req, res) => {
    console.log("Protected Route");
};


   