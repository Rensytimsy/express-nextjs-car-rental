"use client";

import { FormProvider, useForm } from "react-hook-form";
import {
  Form,
  FormMessage,
  FormControl,
  FormField,
  FormLabel,
  FormItem,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SignInSchema } from "@/zod";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Github, Facebook, Twitter, Instagram } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { redirect } from 'next/navigation';
import { useRouter } from "next/navigation";
import Link from "next/link"

export default function SignInPage() {
  const [globalError, setGlobalError] = useState<string>();
  const [globalText, setGlobalText] = useState<string>();

  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const OnSubmit = async (values: z.infer<typeof SignInSchema>) => {
    try {
      let response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/api/login`,
        values,
        { withCredentials: true }
      );
      if(response.data) return router.push("/");
    //   console.log(response.data);
      setGlobalText("Successfully logged In!");
    } catch (error: any) {
      setGlobalError(error?.response.data.message);
      // console.log(error.response.data.message)
    }
  };

  //Below function handles google login authentication
  const GoogleAuthentication = async() => {
    try{
      let googleRes = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/api/auth/google`);
      console.log(googleRes.data);
    }catch(error: any){
      console.log(error);
    }
  }

  console.log("");

  return (
    <div className="flex justify-center align-center mt-[10%]">
      <div className="mt-6 p-4 w-1/4 rounded-sm shadow-sm">
        <Form {...form}>
          <h1 className="text-center text-2xl">Login</h1>
          <form
            onSubmit={form.handleSubmit(OnSubmit)}
            className="flex flex-col space-y-6"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mt-6">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="email"
                      className="outline-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="password"
                      className="outline-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="bg-blue-400 hover:bg-blue-500 cursor-pointer"
            >
              Login
            </Button>
          </form>
          <div className="flex flex-row justify-center align-center">
            {globalError ? (
              <p className=" w-1/2 text-red-500 text-center mt-4 mb-4 bg-red-50 p-1 rounded-md">
                {globalError}
              </p>
            ) : (
              ""
            )}
          </div>
        </Form>
        <div>
          <div className="flex flex-row justify-center align-center space-x-4 mt-4">
            <div className="text-gray-500">--- --- ---</div>
            <div className="text-gray-500">SignIn with</div>
            <div className="text-gray-500">--- --- ---</div>
          </div>
          <div className="flex flex-row m-4 justify-center align-center space-x-6">
            <div className="border rounded-md p-2 hover:shadow-md cursor-pointer">
              <Github size={23} />
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
            <div className="border rounded-md p-2 hover:shadow-md cursor-pointer"
            onClick={() => GoogleAuthentication()}
            >
              <p>Google</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
