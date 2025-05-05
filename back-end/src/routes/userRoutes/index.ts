import { createUser, getUsers, deleteUsers } from "../../controllers/getSmaples/userControllers";
import { UserLogin } from "../../auth/userAuth";
import { VerifyToken, VerifyUserToken, VerifyAdmin } from "../../auth/verfyToken";

import { Router } from "express";

const router = Router();

router.post("/user", createUser);
router.get("/user", VerifyToken, getUsers);
router.delete("/user/:id", deleteUsers);
router.post("/login", UserLogin);
router.get("/verify", VerifyUserToken); 
router.get("/admin", VerifyAdmin);

export default router;