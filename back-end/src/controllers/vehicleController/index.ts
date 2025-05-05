import {Router, Request, Response, NextFunction} from "express";
import { vehicleSchema } from "../../models/zodSchemas/zod";
import {z} from "zod"

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

export const getVehicles = async(req: Request, res: Response, next: NextFunction) => {
    try{
       const getVehicles = await prisma.vehicles.findMany();
        res.status(200).json({data: getVehicles});
    }catch(error: any){
        next(error);
    }
}