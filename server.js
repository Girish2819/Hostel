import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";

dotenv.config();
connectDB(); // Connect to MongoDB

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies
app.use(morgan('dev')); // Logging middleware

app.get("/",(req,res)=>{
    res.send("<h1>Welcome to RGIPT Hostel<h1>");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
});