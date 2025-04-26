import { JwtPayload } from "jsonwebtoken";


declare global {
    namespace Express {
        interface Request {
            data?: JwtPayload | string
        }
    }
}