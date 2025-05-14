import { createUser, getUsers, deleteUsers } from "../../controllers/getSmaples/userControllers";
import { UserLogin } from "../../auth/userAuth";
import { VerifyToken, VerifyUserToken, VerifyAdmin } from "../../auth/verfyToken";
import passport from "passport";
import {Request, Response, NextFunction, Router} from "express"


const router = Router();

router.post("/user", createUser);
router.get("/user", VerifyToken, getUsers);
router.delete("/user/:id", deleteUsers);
router.post("/login", UserLogin);
router.get("/verify", VerifyUserToken); 
router.get("/admin", VerifyAdmin);

//OAuth rotes below
router.get("/google", (req: Request, res: Response, next: NextFunction) => {    
    try{
        res.send(`<a href="/api/auth/google">Sign In with google</a>`);
    }catch(error){
        next(error);
    }
});

router.get("/auth/google", passport.authenticate("google", {scope: ["profile", "email"]}))

export default router;