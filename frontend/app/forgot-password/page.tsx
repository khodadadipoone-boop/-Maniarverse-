"use client"

import { useState } from "react"
import Link from "next/link"
import { useFormik } from "formik"
import * as Yup from "yup"
import { HiOutlineEnvelope } from "react-icons/hi2"
import { AUTH_ENDPOINTS } from "@/lib/appConfig"


const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("email format is not correct")
    .required("please enter your email"),
})


const ForgotPasswordPage = () => {

  const [submitted, setSubmitted] = useState<boolean>(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setServerError(null);
      try {
        const res = await fetch(AUTH_ENDPOINTS.forgotPassword, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: values.email }),
        });

        const data = await res.json();

        if (!res.ok) {
          const message = Array.isArray(data.detail)
            ? data.detail.map((item: { msg: string }) => item.msg).join(" | ")
            : typeof data.detail === "string"
            ? data.detail
            : "Something went wrong.";

          setServerError(message);
          setSubmitting(false);
          return;
        }

        setSubmitted(true);
      } catch (error) {
        console.error("Forgot password error:", error);
        setServerError("Could not connect to the server. Please try again later.");
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 px-4">
      <div className="w-lg flex flex-col justify-center bg-white shadow-md border border-teal-100 rounded-2xl px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="mx-auto flex items-center justify-center w-20 h-20 rounded-full bg-linear-to-br from-teal-400 to-cyan-500">
            <HiOutlineEnvelope size={34} className="text-white" />
          </div>
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Forgot your password?
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {submitted ? (
            <p className="text-center text-sm/6 text-gray-600">
              If an account exists with{" "}
              <span className="font-semibold text-teal-600">{formik.values.email}</span>,
              a password reset link has been sent to it.
            </p>
          ) : (
            <>
              {serverError && (
                <p className="text-red-500 font-bold text-sm text-center bg-red-50 rounded-lg py-2 mb-4">
                  {serverError}
                </p>
              )}
              <form onSubmit={formik.handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-700">
                    Email Address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      className="block w-full rounded-xl border-2 border-transparent bg-teal-50 px-3 py-2.5 text-base text-gray-900 outline-none
                                 focus:border-teal-500 transition-colors sm:text-sm/6"
                    />
                    {formik.touched.email && formik.errors.email && (
                      <p className="text-red-500 font-bold text-xs mt-1">{formik.errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={formik.isSubmitting}
                    className="flex w-full justify-center rounded-xl bg-linear-to-r from-teal-500 to-cyan-500 px-3 py-2.5 text-sm/6 font-bold text-white hover:from-teal-600 hover:to-cyan-600 transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {formik.isSubmitting ? "please wait..." : "Send reset link"}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>

        <div className="text-teal-600 hover:text-teal-800 transition-colors cursor-pointer text-sm text-center mt-10 lg:mt-7">
          <Link href="/login">back to login</Link>
        </div>
      </div>
    </div>
  )
}

export default ForgotPasswordPage
