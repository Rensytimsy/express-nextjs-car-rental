import {object, string} from "zod";

export const SignInSchema = object({
    email: string({required_error: "Please provide an email address"}).email("Please enter a valid email"),
    password: string({required_error: "Please provide a password"}).min(5)
})