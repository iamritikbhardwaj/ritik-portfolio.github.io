import mongoose from "mongoose";
import { Schema, Document } from "mongoose";

export interface User extends Document{
    createdAt: Date;
    name: string,
    email: string,
    message: string,
    website: string,
    isHiring: boolean,
    isRecruter: boolean
}

const UserSchema : Schema<User> = new Schema({
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true,
    },
    website: {
        type: String,
        required: false
    },
    isHiring: {
        type: Boolean,
        required: false,
        default: false
    },
    isRecruter: {
        type: Boolean,
        required: false,
        default: false
    },

})

const UserModel = (mongoose.models.User as mongoose.Model<User>) || (mongoose.model<User>("User", UserSchema));

export default UserModel;