"use client";

import { useState } from "react"

import Link from "next/link"
import { useContactRegister } from "./registerValidate"

import { BiHide } from "react-icons/bi"
import { FaEye } from "react-icons/fa"


const RegisterForm = () => {

        const { formik } = useContactRegister()

        const [showPassword, setShowPassword] = useState<boolean>(false)
        const [showConfirm , setShowConfirm] = useState<boolean>(false)

    return(
        <>
            <form onSubmit={formik.handleSubmit} className="space-y-6">
                <div>

                    <label htmlFor="email" className="block text-sm/6 font-medium">Email Address</label>
                    <div className="mt-2">

                        <input id="email" type="email" name="email" required autoComplete="email"
                        onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}
                        className="block w-full rounded-md px-3 py-1.5 text-base outline-none outline-white/10
                                    ring ring-gray-200 sm:text-sm/6" />
                            {
                            formik.touched.email && formik.errors.email && (
                                <p className="text-red-500 font-bold text-xs mt-1">{formik.errors.email}</p>
                                )
                            }
                    </div>
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm/6 font-medium ">Password</label>
                    <div className="mt-2">

                        <div className="relative">
                            <input id="password" type={showPassword ? "string" : "password"} name="password" required autoComplete="current-password"
                                    onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password}
                                    className="block w-full rounded-md px-3 py-1.5 text-base outline-none outline-white/10
                                                 ring ring-gray-200 sm:text-sm/6" />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                                    onMouseDown={ () => setShowPassword(true) }
                                    onMouseUp={ () => setShowPassword(false) }
                                    onMouseLeave={ () => setShowPassword(false) }
                                    >
                                { showPassword ? <FaEye /> : <BiHide /> }
                            </button>
                        </div>
                            {
                            formik.touched.password && formik.errors.password && (
                                 <p className="text-red-500 font-bold text-xs mt-1">{formik.errors.password}</p>
                            )
                            }
                    </div>
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm/6 font-medium ">Confirm Password</label>

                    <div className="mt-2">
                        <div className="relative">
                            <input id="password" type={showConfirm ? "string" : "password"} name="confirmPassword" required autoComplete="current-password"
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirmPassword}
                                className="block w-full rounded-md px-3 py-1.5 text-base outline-none outline-white/10
                                             ring ring-gray-200 sm:text-sm/6" />

                             <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                                    onMouseDown={ () => setShowConfirm(true) }
                                    onMouseUp={ () => setShowConfirm(false) }
                                    onMouseLeave={ () => setShowConfirm(false) }
                                    >
                                 { showConfirm ? <FaEye /> : <BiHide /> }
                                </button>
                         </div>
                            {
                             formik.touched.confirmPassword && formik.errors.confirmPassword && (
                                <p className="text-red-500 font-bold text-xs mt-1">{formik.errors.confirmPassword}</p>
                                )
                            }
                    </div>
                </div>

                <div>
                    <button type="submit" className="flex w-full justify-center rounded-md bg-violet-600 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-violet-800 transition-colors cursor-pointer">Register</button>
                </div>

                <div className="text-violet-600 hover:text-violet-800 transition-colors cursor-pointer text-sm text-center mt-10 lg:mt-7">
                    <Link href={'/'}>back to home</Link>
                </div>

                <div className="text-sm text-center mt-6 lg:mt-5
                                flex justify-center space-x-2">
                    <p>have account?</p>
                    <Link href={'/login'} className="text-violet-600 hover:text-violet-800 transition-colors cursor-pointer">login</Link>
                </div>
            </form>
        </>
    )
}

export default RegisterForm
