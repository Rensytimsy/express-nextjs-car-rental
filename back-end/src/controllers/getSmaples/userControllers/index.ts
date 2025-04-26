import { PrismaClient } from "../../../generated/prisma";
import {Request, Response, NextFunction} from "express";
import { z } from "zod";
import { userSchema } from "../../../models/zodSchemas/zod";
import bcrypt from "bcrypt"

const prisma = new PrismaClient();


export const createUser = async(req: Request, res: Response, next: NextFunction ) => {
    try{
        const {
            userName, 
            firstName, 
            secondName, 
            tel, 
            email, 
            password,
            isAdmin
        } : z.infer<typeof userSchema> = req.body;

        let salt = await bcrypt.genSalt(10);
        let hash = await bcrypt.hash(req.body.password, salt);

        const newUser = await prisma.users.create({
            data: {
                userName,
                secondName,
                email,
                tel,
                firstName,
                password: hash,
                isAdmin: false
            }
        });

        res.status(200).json({createdUser: newUser});
    }catch(error){
        next(error);
    }
}

//get all users
export const getUsers = async(req: Request, res: Response, next: NextFunction) => {
    try{
        const availableUsers = await prisma.users.findMany();
        res.status(200).json({data: availableUsers});
    }catch(error){
        next(error);
    }
}

//Delete users: Find and delete users with their document id
export const deleteUsers = async(req: Request, res: Response, next: NextFunction) => {
    try{
        let userId = req.params.id;
        await prisma.users.delete({
            where: {id: userId}
        });
        res.status(200).json({message: "User Successfully deleted!"});
    }catch(error){
        next(error);
    }
}