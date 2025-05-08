import {Router, Request, Response, NextFunction} from "express";
import { vehicleSchema } from "../../models/zodSchemas/zod";
import {z} from "zod"
import {ObjectId, Types} from "mongoose"

import { PrismaClient } from "../../generated/prisma";
const prisma = new PrismaClient();



export const uploadVehicle = async(req: Request, res: Response, next: NextFunction) => {
    try{
        const {
            model,
            brand,
            fuelCapacity,
            available,
            images,
            mileage,
            vehicleType,
            userId,
            location,
            features,
            price,
            duration,
            color,
            insuarance,
            year
        }: z.infer<typeof vehicleSchema> = await req.body;

        const uploadVehicle = await prisma.vehicles.create({
            data: {
                model,
                brand,
                features,
                fuelCapacity,
                images,
                mileage,
                price,
                duration,
                location,
                userId,
                vehicleType,
                available,
                color,
                insuarance,
                year
            }
        });

        res.status(200).json({car: uploadVehicle});

    }catch(error: any){
        next(error);
    }
}

//Update vehicle 
export const updateVehicle = async(req: Request, res: Response, next: NextFunction) => {
    try{
        //await for data request from submitted body, Update vehicle object by its object id in the database
        let {carId} = req.params || "";
        if(typeof carId !== "string") return res.status(403).json({message: "vehicleid must be a string"});
        const updateData = req.body;
        //Await for request data to update object
        if(!carId){
            res.status(400).json({message: "Please provide an ob"})
        }

        let foundVehicle = await prisma.vehicles.findUnique({
            where: {id: carId}
        });

        if(!foundVehicle) return res.status(400).json({message: "Vehicle does not exist"});
        res.status(200).json({vehicle: foundVehicle});

    }catch(error: any){
        next(error);
    }
}


export const getVehicles = async(req: Request, res: Response, next: NextFunction) => {
    try{
       const getVehicles = await prisma.vehicles.findMany();
        res.status(200).json({data: getVehicles});
    }catch(error: any){
        next(error);
    }
}