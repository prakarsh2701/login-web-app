import mongoose from 'mongoose';


const UserSchema = mongoose.Schema({
    firstName:{
        type:String,
        required: true
    },
    dob:{
        type:String,
        requied: true,
    },
    email:{
        type: String,
        requied: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
})

export default mongoose.model("User", UserSchema);