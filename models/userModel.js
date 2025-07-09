import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },


    password: {
        type: String,
        required: true,
        trim: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    hostelBlock: {
        type: String,
        required: true,
        trim: true,
    },
    roomNumber: {
        type: String,
        required: true,
        trim: true,
    },
    course: {
        type: String,
        required: true,
        trim: true,
    },
    passingYear: {
        type: String,
        required: true,
        trim: true,
    },
    Gender: {
        type: String,
        required: true,
    },

    role: {
        type: Number,
        default:0,
       
    },
});   

  export default mongoose.model("User", userSchema)