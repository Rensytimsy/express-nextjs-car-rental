import { PrismaClient } from "../../../generated/prisma";
import {Request, Response, NextFunction} from "express";
import { z } from "zod";
import { userSchema } from "../../../models/zodSchemas/zod";

const prisma = new PrismaClient();


export const createUser = async(req: Request, res: Response, next: NextFunction ) => {
    try{
        const {
            userName, 
            firstName, 
            secondName, 
            tel, 
            email, 
            password
        } : z.infer<typeof userSchema> = req.body;

        const newUser = await prisma.users.create({
            data: {
                userName,
                secondName,
                email,
                tel,
                firstName,
                password
            }
        });

        res.status(200).json({createdUser: newUser});
    }catch(error){
        next(error);
    }
}

export const getUsers = async(req: Request, res: Response, next: NextFunction) => {
    try{
        const availableUsers = await prisma.users.findMany();
        res.status(200).json({data: availableUsers});
    }catch(error){
        next(error);
    }
}