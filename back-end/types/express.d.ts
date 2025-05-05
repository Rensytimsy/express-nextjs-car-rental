import { JwtPayload } from "jsonwebtoken";


declare global {
    namespace Express {
        interface Request {
            data?: {
                id: string,
                isAdmin?: boolean,
                admin?: boolean
            }
        }
    }
}