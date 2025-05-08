"use client"

import { FormProvider, useForm } from "react-hook-form";
import { Form, FormMessage, FormControl, FormField, FormLabel, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SignInSchema } from "@/zod";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Github, Facebook, Twitter, Instagram } from "lucide-react";
import { useState } from "react";


export default function SignInPage() {

    const [credentials, setCredentials] = useState();

    const form = useForm<z.infer<typeof SignInSchema>>({
        resolver: zodResolver(SignInSchema),
        defaultValues: {
            userName: "",
            email: "",
            password: ""
        }
    });

    const OnSubmit = async(values: z.infer<typeof SignInSchema>) => {
        try{
            console.log(values.email, values.password);
        }catch(error){
            console.log("Error in authentication")
        }
    };

    console.log(form);

    return (
        <div className="flex justify-center align-center mt-6">
            <div className="mt-6 p-4 w-1/4 rounded-sm shadow-sm">

                <Form {...form}>
                    <h1 className="text-center text-2xl">Login</h1>
                    <form onSubmit={form.handleSubmit(OnSubmit)} className="flex flex-col space-y-6">
                        <FormField
                            control={form.email}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="mt-6">
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder="email" className="outline-none" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.password}
                            name="password"
                            render={({ field }) => (
                                <FormItem className="">
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder="password" className="outline-none" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="bg-blue-400 hover:bg-blue-500 cursor-pointer">Login</Button>
                    </form>
                </Form>
                <div>
                    <div className="flex flex-row justify-center align-center space-x-4 mt-4">
                        <div className="text-gray-500">--- --- ---</div>
                        <div className="text-gray-500">SignIn with</div>
                        <div className="text-gray-500">--- --- ---</div>
                    </div>
                    <div className="flex flex-row m-4 justify-center align-center space-x-6">
                        <div className="border rounded-md p-2 hover:shadow-md cursor-pointer">
                            <Github size={23}/>
                        </div>
                        <div className="border rounded-md p-2 hover:shadow-md cursor-pointer">
                            <Facebook size={23} />
                        </div>
                        <div className="border rounded-md p-2 hover:shadow-md cursor-pointer">
                            <Instagram size={23} />
                        </div>
                        <div className="border rounded-md p-2 hover:shadow-md cursor-pointer">
                            <Twitter size={23} />
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}