import {object, string, number, boolean, array, any} from "zod"


export const userSchema =  object({
    userName: string({required_error: "Please provide a username to continue"}),
    firstName: string({required_error: "Please provide a firsName"}).min(3).max(12),
    secondName: string({required_error: "Please provide a secondName"}).min(3).max(12),
    email: string({required_error: "Please provide an email for your account"}).email(),
    tel: number({required_error: "Provide your phone number"}),
    password: string({required_error: "Please provide your account password"}),
    isAdmin: boolean()
});

export const vehicleSchema = object({
    model: string({required_error: "Please provide vehicle model"}),
    brand: string({required_error: "Please enter vehicle brand"}),
    location: array(number({required_error: "Please allow location to get or set location"})),
    color: string({required_error: "Provide vehicle colour"}),
    mileage: number({required_error:"enter mileage"}),
    fuelCapacity: number({required_error: "Provide fuel capacity"}),
    owner: any(),
    images: array(string({required_error: "provide vehicle images"})),
    vehicleType: string({required_error: "provide vehicle type sedan, 4wd etc.."}),
    features: array(string()),
    price: number({required_error: "Provide vehicle hire price"}),
    duration: number({required_error: "Manually provide duration for hire e.g 24hrs, 3 days etc"}),
    available: boolean(),
    insuarance: string(),
    userId: string(),
    year: string({required_error: "Provide model year"})
});