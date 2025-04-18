import { Router } from "express";
import { getDataSample } from "../../controllers/getSmaples";

const router = Router();

router.get("/sample", getDataSample); //this line is an api endpoint.

export default router;   