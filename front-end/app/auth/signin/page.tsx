"use client"

import {useForm} from "react-hook-form";
import {Form, FormMessage, FormControl, FormField, FormLabel, FormItem} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SignInSchema } from "@/zod";
import {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";


export default function SignInPage(){

    const form = useForm<z.infer<typeof SignInSchema>>({
        resolver: zodResolver(SignInSchema),
        defaultValues: {
            userName: "",
            email: "",
            password: ""
        }
    });

    return (
        <div>
            <Form {...form}>
                <form>
                    <FormField 
                        control={form.email}
                        name="userName"
                        render={({ filed }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input {...filed} placeholder="email" />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField 
                        control={form.password}
                        name="userName"
                        render={({ filed }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input {...filed} placeholder="password" />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <Button>Login</Button>
                </form>
            </Form>
        </div>
    )
}