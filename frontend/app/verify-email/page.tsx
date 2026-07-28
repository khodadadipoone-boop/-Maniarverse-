"use client";

import Link from "next/link"
import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { HiOutlineCheckCircle, HiOutlineXCircle } from "react-icons/hi2"
import { AUTH_ENDPOINTS } from "@/lib/appConfig"

type VerifyStatus = "loading" | "success" | "error"


const VerifyEmailPage = () => {

  const searchParams = useSearchParams()
  const token = searchParams.get("token")

  const [status, setStatus] = useState<VerifyStatus>("loading")
  const [errorMessage, setErrorMessage] = useState<string>("")

  useEffect(() => {

    const verifyToken = async () => {
      if (!token) {
        setStatus("error")
        setErrorMessage("Verification token is missing.")
        return
      }

      try {
        const res = await fetch(`${AUTH_ENDPOINTS.verifyEmail}?token=${encodeURIComponent(token)}`, {
        method: "GET",
        })

        const data = await res.json()

        if (!res.ok) {
          const message = Array.isArray(data.detail)
            ? data.detail.map((item: { msg: string }) => item.msg).join(" | ")
            : data.detail || "Verification failed."

          setStatus("error")
          setErrorMessage(message)
          return
        }

        setStatus("success");
      }

      catch (error) {
        console.error("Verification error:", error)
        setStatus("error")
        setErrorMessage("Could not connect to the server. Please try again later.")
      }
    };

    verifyToken()
  }, [token])

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 px-4">
      <div className="w-lg flex flex-col justify-center bg-white shadow-md border border-teal-100 rounded-2xl px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
          {status === "loading" && (
            <>
              <div className="mx-auto flex items-center justify-center w-20 h-20 rounded-full bg-linear-to-br from-teal-400 to-cyan-500 animate-pulse">
                <HiOutlineCheckCircle size={34} className="text-white" />
              </div>
              <h2 className="mt-10 text-2xl/9 font-bold tracking-tight text-gray-900">
                Verifying your email...
              </h2>
              <p className="mt-4 text-sm/6 text-gray-600">
                Please wait a moment.
              </p>
            </>
          )}

          {status === "success" && (
            <>
              <div className="mx-auto flex items-center justify-center w-20 h-20 rounded-full bg-linear-to-br from-teal-400 to-cyan-500">
                <HiOutlineCheckCircle size={34} className="text-white" />
              </div>
              <h2 className="mt-10 text-2xl/9 font-bold tracking-tight text-gray-900">
                Your account has been verified successfully.
              </h2>
              <div className="mt-10">
                <Link
                  href="/login"
                  className="inline-flex justify-center rounded-xl bg-linear-to-r from-teal-500 to-cyan-500 px-6 py-2.5 text-sm/6 font-bold text-white hover:from-teal-600 hover:to-cyan-600 transition-colors"
                >
                  go to login
                </Link>
              </div>
            </>
          )}

          {status === "error" && (
            <>
              <div className="mx-auto flex items-center justify-center w-20 h-20 rounded-full bg-red-500">
                <HiOutlineXCircle size={34} className="text-white" />
              </div>
              <h2 className="mt-10 text-2xl/9 font-bold tracking-tight text-gray-900">
                Verification failed.
              </h2>
              <p className="mt-4 text-sm/6 text-red-500 font-semibold">
                {errorMessage}
              </p>
              <div className="mt-10">
                <Link
                  href="/login"
                  className="inline-flex justify-center rounded-xl bg-linear-to-r from-teal-500 to-cyan-500 px-6 py-2.5 text-sm/6 font-bold text-white hover:from-teal-600 hover:to-cyan-600 transition-colors"
                >
                  go to login
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default VerifyEmailPage
