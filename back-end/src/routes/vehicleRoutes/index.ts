import { uploadVehicle, getVehicles } from "../../controllers/vehicleController";
import { Router } from "express";
import { VerifyAdmin, VerifyUserToken } from "../../auth/verfyToken";

let route = Router();

// route.post("/upload", uploadVehicle);
route.get("/", VerifyAdmin, getVehicles);
route.post("/upload", VerifyUserToken,  uploadVehicle);

export default route;

