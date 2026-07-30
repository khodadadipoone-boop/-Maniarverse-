"use client";

import { useState } from "react"
import Link from "next/link"

import { FaEye } from "react-icons/fa"
import { BiHide } from "react-icons/bi"

import { useContactLogin } from "./loginValidate"

const LoginForm = () => {

    const [showPassword, setShowPassword] = useState<boolean>(false)
    const { formik , serverError } = useContactLogin()

    return (
        <>
                { serverError && (
                    <p className="text-red-500 font-bold text-sm text-center bg-red-50 rounded-lg py-2 mb-4">
                        {serverError}
                    </p>
                )}
                <form action="#" onSubmit={formik.handleSubmit} className="space-y-6">
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
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm/6 font-semibold text-gray-700">Password</label>
                            <div className="text-sm">
                                <Link href="/forgot-password" className="font-semibold text-teal-600 hover:text-teal-800">Forget Password?</Link>
                            </div>
                        </div>

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
                        <button type="submit" disabled={formik.isSubmitting} className="flex w-full justify-center rounded-xl bg-linear-to-r from-teal-500 to-cyan-500 px-3 py-2.5 text-sm/6 font-bold text-white hover:from-teal-600 hover:to-cyan-600 transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed">
                        { formik.isSubmitting ? "please wait..." : " Login " }
                        </button>
                    </div>
                </form>
        </>
    )
}

export default LoginForm
