"use client";

import { useState } from "react"

import Link from "next/link"
import { useContactRegister } from "./registerValidate"

import { BiHide } from "react-icons/bi"
import { FaEye } from "react-icons/fa"


const RegisterForm = () => {

        const { formik , serverError } = useContactRegister()

        const [showPassword, setShowPassword] = useState<boolean>(false)
        const [showConfirm , setShowConfirm] = useState<boolean>(false)

    return(
        <>
            { serverError && (
                <p className="text-red-500 font-bold text-sm text-center bg-red-50 rounded-lg py-2 mb-4">
                    {serverError}
                </p>
            )}
            <form onSubmit={formik.handleSubmit} className="space-y-6">
                <div>

                    <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-700">Email Address</label>
                    <div className="mt-2">

                        <input id="email" type="email" name="email" required autoComplete="email"
                        onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}
                        className="block w-full rounded-xl border-2 border-transparent bg-teal-50 px-3 py-2.5 text-base text-gray-900 outline-none
                                    focus:border-teal-500 transition-colors sm:text-sm/6" />
                            {
                            formik.touched.email && formik.errors.email && (
                                <p className="text-red-500 font-bold text-xs mt-1">{formik.errors.email}</p>
                                )
                            }
                    </div>
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm/6 font-semibold text-gray-700">Password</label>
                    <div className="mt-2">

                        <div className="relative">
                            <input id="password" type={showPassword ? "string" : "password"} name="password" required autoComplete="current-password"
                                    onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password}
                                    className="block w-full rounded-xl border-2 border-transparent bg-teal-50 px-3 py-2.5 text-base text-gray-900 outline-none
                                                 focus:border-teal-500 transition-colors sm:text-sm/6" />
                            <button type="button" className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-teal-600 cursor-pointer transition-colors"
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
                    <label htmlFor="confirmPassword" className="block text-sm/6 font-semibold text-gray-700">Confirm Password</label>

                    <div className="mt-2">
                        <div className="relative">
                            <input id="confirmPassword" type={showConfirm ? "string" : "password"} name="confirmPassword" required autoComplete="current-password"
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirmPassword}
                                className="block w-full rounded-xl border-2 border-transparent bg-teal-50 px-3 py-2.5 text-base text-gray-900 outline-none
                                             focus:border-teal-500 transition-colors sm:text-sm/6" />

                             <button type="button" className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-teal-600 cursor-pointer transition-colors"
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
                    <button type="submit" disabled={formik.isSubmitting} className="flex w-full justify-center rounded-xl bg-linear-to-r from-teal-500 to-cyan-500 px-3 py-2.5 text-sm/6 font-bold text-white hover:from-teal-600 hover:to-cyan-600 transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed">
                        { formik.isSubmitting ? "please wait..." : "Register" }
                    </button>
                </div>

                <div className="text-teal-600 hover:text-teal-800 transition-colors cursor-pointer text-sm text-center mt-10 lg:mt-7">
                    <Link href={'/'}>back to home</Link>
                </div>

                <div className="text-sm text-center mt-6 lg:mt-5
                                flex justify-center space-x-2">
                    <p className="text-gray-600">have account?</p>
                    <Link href={'/login'} className="text-teal-600 hover:text-teal-800 transition-colors cursor-pointer font-semibold">login</Link>
                </div>
            </form>
        </>
    )
}

export default RegisterForm
