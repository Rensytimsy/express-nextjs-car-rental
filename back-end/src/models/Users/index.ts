import mongoose,{Schema, model, models} from "mongoose";
import { userSchema } from "../zodSchemas/zod";
import {z} from "zod"

type userObject = z.infer<typeof userSchema>;

const userModel = new Schema<userObject>({
    firstName: {
        type: String,
        required: true
    },
    secondName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },

    tel: {
        type: Number,
        required: true
    },

    userName: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }
    
}, {timestamps: true});

const User = models?.Users || model("Users", userModel);
export default User;