import {number, object, string} from "zod";

export const SignInSchema = object({
    email: string({required_error: "Please provide an email address"}).email("Please enter a valid email"),
    password: string({required_error: "Please provide a password"}).min(5)
});

export const SignUpSchema = object({
    firstName: string({required_error: "Provide a valid first Name"}).min(3),
    secondName: string({required_error: "Provide a valid secondName"}),
    userName: string({required_error: "Provide a userName"}),
    email: string({required_error:"Provide an email"}).email(),
    password: string({required_error: "Provide password"}),
    tel: number({required_error: "Provide a phone number"})
})