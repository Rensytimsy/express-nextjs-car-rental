import { uploadVehicle, getVehicles } from "../../controllers/vehicleController";
import { Router } from "express";

let route = Router();

// route.post("/upload", uploadVehicle);
route.get("/", getVehicles);
route.post("/upload", uploadVehicle);

export default route;

