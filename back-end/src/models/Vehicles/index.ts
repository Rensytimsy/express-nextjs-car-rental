import {Schema, model, models} from "mongoose";

import { vehicleSchema } from "../zodSchemas/zod";
import {z} from "zod";


const vehicleModel = new Schema<z.infer<typeof vehicleSchema>>({
    model: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    images: {
        type: [String],
        required: true
    },
    location: {
        type: [Number],
        required: true
    },
    fuelCapacity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    insuarance: {
        type: String,
    },
    mileage: {
        type: Number,
    },
    vehicleType: {
        type: String,
    },
    features: {
        type: [String]
    },
    available: {
        type: Boolean
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },
    year: {
        type: String,
        required: true
    }
});

export const Vehicle = models?.vehicles || model("vehicles", vehicleModel);
