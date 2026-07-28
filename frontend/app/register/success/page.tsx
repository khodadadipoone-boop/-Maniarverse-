"use client";

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { HiOutlineEnvelope } from "react-icons/hi2"


const RegisterSuccessPage = () => {

  const searchParams = useSearchParams()
  const email = searchParams.get("email")

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 px-4">
      <div className="w-lg flex flex-col justify-center bg-white shadow-md border border-teal-100 rounded-2xl px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="mx-auto flex items-center justify-center w-20 h-20 rounded-full bg-linear-to-br from-teal-400 to-cyan-500">
            <HiOutlineEnvelope size={34} className="text-white" />
          </div>

          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Thank you for your registration.
          </h2>

          <p className="mt-4 text-center text-sm/6 text-gray-600">
            An authentication link has been sent to you via email.
            {email && (
              <>
                {" "}
                to{" "}
                <span className="font-semibold text-teal-600">{email}</span>
              </>
            )}
          </p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm text-center">
          <Link
            href="/login"
            className="inline-flex justify-center rounded-xl bg-linear-to-r from-teal-500 to-cyan-500 px-6 py-2.5 text-sm/6 font-bold text-white hover:from-teal-600 hover:to-cyan-600 transition-colors"
          >
            go to login
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RegisterSuccessPage
