
import React from "react"
import Link from "next/link"

import Image from "next/image"
import loginImg from "@/public/images/login.jpg"
import LoginForm from "./loginForm"


const LoginTheme : React.FC = () => {

    return(
        <>
        <div className="w-lg flex flex-col justify-center border border-gray-200 rounded  px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <Image src={loginImg} alt="loginImage" className="mx-auto h-20 w-20" />
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight">login</h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

                <LoginForm />

            </div>
            <div className="text-violet-600 hover:text-violet-800 transition-colors cursor-pointer text-sm text-center mt-10 lg:mt-7">
                <Link href={'/'}>back to home</Link>
            </div>
            <div className="text-sm text-center mt-6 lg:mt-5
                                  flex justify-center space-x-2">
                <p>dont have account?</p>
                <Link href={'/register'} className="text-violet-600 hover:text-violet-800 transition-colors cursor-pointer">Register</Link>
            </div>
        </div>
        </>
    )
}

export default LoginTheme
