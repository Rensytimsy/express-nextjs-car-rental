import mongoose,{Schema, model, models} from "mongoose";
import { userSchema } from "../zodSchemas/zod";
import {z} from "zod";
import bcrypt from "bcryptjs";


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
    },

    isAdmin: {
        type: Boolean,
        default: false
    }
    
}, {timestamps: true});

userModel.statics.hashPassword = async(userPassword: string) => {
    let salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(userPassword, salt);
}

userModel.pre("save", async function (next) {
    try{
        if(this.isModified("password") || this.isNew){
            let salt = await bcrypt.genSalt(10);
            let hashedPswd = await bcrypt.hash(this.password, salt);
            this.password = hashedPswd;
            console.log(hashedPswd);
        }
        next();
    }catch(error: any){
        next(error);
    }
} );

const Users = models?.Users || model("Users", userModel);
export default Users;