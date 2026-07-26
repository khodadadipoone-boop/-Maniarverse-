// LoginTheme.tsx
import React from "react"
import Link from "next/link"
import { HiLockClosed } from "react-icons/hi2"

import LoginForm from "./loginForm"


const LoginTheme: React.FC = () => {

    return (
        <>
        <div className="w-lg flex flex-col justify-center bg-white shadow-md border border-teal-100 rounded-2xl px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <div className="mx-auto flex items-center justify-center w-20 h-20 rounded-full bg-linear-to-br from-teal-400 to-cyan-500">
                    <HiLockClosed size={34} className="text-white" />
                </div>
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Login</h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

                <LoginForm />

            </div>
            <div className="text-teal-600 hover:text-teal-800 transition-colors cursor-pointer text-sm text-center mt-10 lg:mt-7">
                <Link href={'/'}>back to home</Link>
            </div>
            <div className="text-sm text-center mt-6 lg:mt-5
                                  flex justify-center space-x-2">
                <p className="text-gray-600">dont have account?</p>
                <Link href={'/register'} className="text-teal-600 hover:text-teal-800 transition-colors cursor-pointer font-semibold">Register</Link>
            </div>
        </div>
        </>
    )
}

export default LoginTheme
