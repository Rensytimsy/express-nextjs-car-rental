import { NextFunction, Response, Request } from "express";
import { PrismaClient } from "../../generated/prisma";
import { customError } from "../../utils/error";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

let prisma = new PrismaClient();
interface SignInCredentials  {
    userName: string,
    password: string
}

let jwt_secret:string = process.env.JWT_SECRET || "";

export const UserLogin = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const { userName, password } = req.body;

        if (typeof userName !== 'string' || typeof password !== 'string') {
            return next(customError(400, "Username and password must be strings"));
        }

        const credentials: SignInCredentials = { userName, password };

        const isUser = await prisma.users.findUnique({
            where: { userName: credentials.userName }
        });

        if (!isUser) return next(customError(403, "Invalid username!"));

        let isPassword = await bcrypt.compare(password, isUser.password);
        if (!isPassword) return next(customError(400, "Incorrect password"));

        let generatedToken = jwt.sign({ id: isUser.id, isAdmin: isUser.isAdmin }, jwt_secret);

        res.cookie("token", generatedToken, { sameSite: "strict", httpOnly: true, secure: false })
           .status(200)
           .json("User logged in");
    } catch (error) {
        next(error);
    }
}
 