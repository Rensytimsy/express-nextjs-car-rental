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
                if(req.data?.id){
                    // res.status(200).json("User authenticated"); //Uncomment this line when testing authentication
                    next();
                }else{
                    res.status(400).json({message: "Unauthorized!, Please login"})
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
                if(req.data?.isAdmin  == true){
                    // res.status(200).json("Hello admin"); // Uncomment this line when testing authentication
                    next();
                }else{
                    res.status(200).json({message: "Unauthorized!"});
                }
            }catch(error){
                next(error);
            }
        })
    }catch(error){
        next(error);
    }
}