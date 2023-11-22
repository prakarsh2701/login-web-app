import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoute from './routes/auth.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';


const app = express();
dotenv.config();


app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:'http://localhost:4200',
    credentials: true

}))
app.use("/api/auth",authRoute);


// Error Handler Middleware
app.use((obj,req,res,next)=>{
    const statusCode = obj.status || 500;
    const message = obj.message || "something went wrong!";
    return res.status(statusCode).json({
        success:[200,201,284].some(a=> a===obj.status)? true : false,
        status:statusCode,
        message: message,
        data: obj.data
    });
});

// DB connection
const connectMongoDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("connected to database")
    }catch (error){
       throw error;  
    }

}

app.listen(8800, ()=>{
    connectMongoDB();
    console.log("connected to backend");
})