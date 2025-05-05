import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface CustomRequest extends Request {
    data?: {
        id: string,
        isAdmin?: boolean,
        admin?: boolean
    }
}