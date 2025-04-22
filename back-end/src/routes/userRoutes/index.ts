import { createUser, getUsers, deleteUsers } from "../../controllers/getSmaples/userControllers";
import { UserLogin } from "../../auth/userAuth";

import { Router } from "express";

const router = Router();

router.post("/user", createUser);
router.get("/user", getUsers);
router.delete("/user/:id", deleteUsers);
router.post("/login", UserLogin);

export default router;