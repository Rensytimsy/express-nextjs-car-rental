import { createUser, getUsers } from "../../controllers/getSmaples/userControllers";

import { Router } from "express";

const router = Router();

router.post("/user", createUser);
router.get("/user", getUsers);

export default router;