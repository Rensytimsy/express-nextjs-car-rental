import {
    Form,
    FormField,
    FormControl,
    FormDescription,
    FormLabel,
    FormMessage
} from "@/components/ui/form";

import {zodResolver} from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";


export default function SignInPage(){

    const formcontrol = useForm();

    return (
        <div>
            <Form {...formcontrol}>
                <form action="">

                
                </form>
            </Form>
        </div>
    )
}