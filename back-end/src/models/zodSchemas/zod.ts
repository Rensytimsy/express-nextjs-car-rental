import {object, string, number} from "zod"


export const userSchema =  object({
    userName: string({required_error: "Please provide a username to continue"}),
    firstName: string({required_error: "Please provide a firsName"}).min(3).max(12),
    secondName: string({required_error: "Please provide a secondName"}).min(3).max(12),
    email: string({required_error: "Please provide an email for your account"}).email(),
    tel: number({required_error: "Provide your phone number"}),
    password: string({required_error: "Please provide your account password"})
});

