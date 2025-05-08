import {object, string} from "zod";

export const SignInSchema = object({
    userName: string({required_error: "Please enter username!"}).min(3).max(10),
    email: string({required_error: "Please provide an email address"}),
    password: string({required_error: "Please provide a password"})
})