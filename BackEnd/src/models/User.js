import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    tel: {
        type: Number,
        required: true,
    },
    role: {
        type: String,
        default: "student"
    }
})
export default mongoose.model('User', userSchema)