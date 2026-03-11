import { Schema, model } from "mongoose";

//creating user Schema
export const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    dateOfBirth: {
        
        type: String,
        required: [true, "Password is required"]
    },
    mobileNumber: {
        type: Number
    },
    status: {
        type: Boolean,
        default: true
    }
},
    {
        strict: "throw",
        timestamps: true,
        versionKey: false
    }
)

export const UserModel = model("user", userSchema);