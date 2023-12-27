"use client"

import Input from "@/app/components/inputs/Input";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
type Variant = 'LOGIN' | 'REGISTER';
const AuthForm = () => {
    const [variant,setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();


    const toggleVariant = useCallback(() => {
       if(variant === 'LOGIN') {
        setVariant('REGISTER');
       } else{
        setVariant('LOGIN');
       }
    },[variant]);
    const {
        register,
        handleSubmit,
        formState : {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        if (variant === 'REGISTER' ) {
            // Axios register
        }
        if (variant === 'LOGIN' ) {
            // NextAuth SignIn
        }
    }
    const sosialAction = (action: string) => {
        setIsLoading(true);

        // NextAuth SocialSign
    }
  return (
    <div className="
    mt-8
    sm:mx-auto 
    sm:w-full 
    sm:max-w-md
    ">
        <div
           className="
           bg-white
             px-4
             py-8
             shadow
             sm:rounded-lg
             sm:px-10
           "
        >
       <form 
       className="space-y-6 "
       onSubmit={handleSubmit(onSubmit)}
       >
       <Input/>
       </form>
        </div>
    </div>
  )
}

export default AuthForm