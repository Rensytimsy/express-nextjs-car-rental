"use client"

import {Form, FormControl, FormMessage, FormField, FormItem, FormLabel} from "@/components/ui/form"
import { SignUpSchema } from "@/zod";
import {z} from "zod"
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";

import { Facebook, Twitter, Github, Instagram, GitBranch } from "lucide-react";


export default function SignUpPage() {

    const form = useForm<z.infer<typeof SignUpSchema>>({
        resolver: zodResolver(SignUpSchema),
        defaultValues: {
            firstName: "",
            secondName: "",
            userName: "",
            email: "",
            password: "",
            tel: 0
        }
    });

  return (
    <div className="flex justify-center align-center">
      <div className="p-2 mt-[5%] w-1/4 rounded-sm">
        <Form {...form}>
            <p className="p-2  font-semibold text-center text-2xl">
                Sign Up
            </p>
            <form action="" className="space-y-6">
                <FormField
                    control={form.control}
                    name="firstName"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <Input {...field} placeholder="First name"/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="secondName"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Second Name</FormLabel>
                            <Input {...field} placeholder="Second name"/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="userName"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>User Name</FormLabel>
                            <Input {...field} placeholder="userName"/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <Input {...field} placeholder="email"/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <Input {...field} placeholder="Password"/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="tel"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <Input {...field} placeholder="Phone number"/>
                        </FormItem>
                    )}
                />
                <div className="flex justify-center align-center">
                     <Button className="bg-[var(--teal)] cursor-pointer p-2 w-3/4">Create Account</Button> 
                </div>
            </form>
        </Form>
        <div className="mt-4">
            <div className="flex flex-row space-x-6 justify-center align-center">
                <div>-----</div>
                <div>Create Account with</div>
                <div>-----</div>
            </div>
            <div className="flex flex-row justify-center align-center space-x-6 m-2">
                    <div className="border p-2 rounded-md hover:shadow-lg cursor-pointer">
                        <Instagram size={23} />
                    </div>
                    <div className="border p-2 rounded-md hover:shadow-lg cursor-pointer">
                        <Facebook size={23} />
                    </div>
                    <div className="border p-2 rounded-md hover:shadow-lg cursor-pointer">
                        <Twitter size={23} />
                    </div>
                    <div className="border p-2 rounded-md hover:shadow-lg cursor-pointer">
                        <Github size={23} />
                    </div>
            </div>
        </div>
      </div>
    </div>
  );
}
