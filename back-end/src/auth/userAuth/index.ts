import { NextFunction, Response, Request } from "express";
import jwt from "jsonwebtoken";
import { PrismaClient } from "../../generated/prisma";
import { customError } from "../../utils/error";
import bcrypt from "bcrypt"

let prisma = new PrismaClient();
interface SignInCredentials  {
    userName: string,
    password: string
}

export const UserLogin = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const { userName, password } = req.body;
        
        // Type guard to ensure these are strings
        if (typeof userName !== 'string' || typeof password !== 'string') {
            return next(customError(400, "Username and password must be strings"));
        }

        const credentials: SignInCredentials = { userName, password };

        const isUser = await prisma.users.findUnique({
            where: { 
                userName: credentials.userName, 
                password: credentials.password 
            }
        });


        if (!isUser) return next(customError(403, "Invalid username!"));
    
        res.status(200).json({user: isUser});

    } catch (error) {
        next(error);
    }
}