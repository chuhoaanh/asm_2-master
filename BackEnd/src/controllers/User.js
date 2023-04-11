import { singin, userSchema } from "../Schema/User"
import User from "../models/User";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
export const signup = async (req, res) => {
    try {
        const { error } = userSchema.validate(req.body, { abortEarly: false });
        if (error) {
            return res.status(400).json({
                messages: error.details.map(err => err.message)
            })
        }

        const userEmail = await User.findOne({ email: req.body.email })
        if (userEmail) {
            return res.status(400).json({
                messages: "Email da ton tai hay nhap email khac"
            })
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 5)

        const user = await User.create({
            ...req.body,
            password: hashedPassword
        })

        const token = jwt.sign({ id: user._id }, "quyennc", { expiresIn: "1d" });
        user.password = undefined;
        return res.status(201).json({
            message: "Tao tai khoan thanh cong",
            accessToken: token,
            user
        })
    } catch (error) {

    }
}

export const signin = async (req, res) => {
    try {
        const { error } = singin.validate(req.body, { abortEarly: false })
        if (error) {
            return res.status(400).json({
                messages: error.details.map(err => err.message)
            })
        }

        const userCheck = await User.findOne({ email: req.body.email });
        if (!userCheck) {
            return res.status(400).json({
                message: "Email not found"
            })
        }

        const passwordCheck = await bcrypt.compare(req.body.password, userCheck.password);
        if (!passwordCheck) {
            return res.status(400).json({
                message: "Password Khong dung"
            })
        }

        const token = jwt.sign({ id: userCheck._id }, "quyennc", { expiresIn: "1d" })
        return res.status(200).json({
            message: "Dang nhap thanh cong",
            accessToken: token,
            userCheck
        })
    } catch (error) {

    }
}