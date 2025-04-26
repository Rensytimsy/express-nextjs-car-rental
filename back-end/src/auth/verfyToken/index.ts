import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { customError } from "../../utils/error";
import { CustomRequest } from "../../../typeIntefaces/express";

let jwt_secret:string = process.env.JWT_SECRET || "";

export const VerifyToken = async(req: CustomRequest, res: Response, next: NextFunction) => {
    try {
        let token = await req.cookies.token;
        if (!token) return next(customError(403, "Invalid token"));

        jwt.verify(token, jwt_secret, (error: any, data: any) => {
            if (error) return next(customError(403, "Corrupt cookies token"));
            req.data = data; 
            next(); // Moved inside here ✅
        });
    } catch (error) {
        next(error);
    }
}


export const VerifyUserToken = async(req: CustomRequest, res: Response, next: NextFunction) => {
    try{
        VerifyToken(req, res, error => {
            try{
                if((req.data as any).id){
                    res.status(200).json("User authenticated");
                }

            }catch(error){
                next(error);
            }
        })
    }catch(error){
        next(error);
    }
}


export const VerifyAdmin = async(req: CustomRequest, res: Response, next: NextFunction) => {
    try{
        VerifyToken(req, res, error => {
            try{
                if((req.data as any).isAdmin  == true){
                    res.status(200).json("Hello admin");
                }
                res.status(400).json("you are not an admin");
            }catch(error){
                next(error);
            }
        })
    }catch(error){
        next(error);
    }
}