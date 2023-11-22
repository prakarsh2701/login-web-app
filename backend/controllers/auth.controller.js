import User from "../models/User.js"
import bcrypt from "bcryptjs";
import {CreateSuccess} from "../utils/success.js"
import {CreateError} from "../utils/error.js"
import jwt from "jsonwebtoken";

export const register = async (req,res,next)=>{
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(req.body.password,salt)
    const newUser =  new User({
        firstName :req.body.firstName,
        dob: req.body.dob,
        email: req.body.email,
        password: hashpassword,
    })
    await newUser.save();
    return next(CreateSuccess(200, "User Registered Successfully"));
}

export const login = async(req,res,next)=>{
    try{
       const user = await User.findOne({email: req.body.email});
       if(!user){
        return res.status(404).send("User not found");
       }
       const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
       if(!isPasswordCorrect){
        return res.status(404).send("Password Incorrect");
       }
       const token = jwt.sign(
        {email : user.email, firstName: user.firstName},
        process.env.JWT_SECRET
       )
       res.cookie("access_token",token,{httpOnly:true})
       .status(200)
       .json({
        status: 200,
        message: "login Success",
        data: token
       })
    }
    catch(error){
       return res.status(500).send("Something went wrong");
    }
}