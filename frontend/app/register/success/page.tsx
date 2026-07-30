"use client";

import { useEffect, useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { HiOutlineEnvelope } from "react-icons/hi2"
import { AUTH_ENDPOINTS } from "@/lib/appConfig"

const RESEND_WAIT_SECONDS = 60

type ResendStatus = "idle" | "sending" | "sent" | "error"

const RegisterSuccessPage = () => {

  const searchParams = useSearchParams();
  const email = searchParams.get("email")

  const [secondsLeft, setSecondsLeft] = useState<number>(RESEND_WAIT_SECONDS)
  const [resendStatus, setResendStatus] = useState<ResendStatus>("idle")
  const [errorMessage, setErrorMessage] = useState<string>("")


  useEffect(() => {

    if (secondsLeft <= 0) return

    const timerId = setTimeout(() => {
      setSecondsLeft((prev) => prev - 1)
    }, 1000)

    return () => clearTimeout(timerId)
  }, [secondsLeft])


  const handleResend = async () => {

    if (!email) {
      setResendStatus("error")
      setErrorMessage("Email address is missing.")
      return
    }

    setResendStatus("sending")
    setErrorMessage("")

    try {
      const res = await fetch(AUTH_ENDPOINTS.resendVerification, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (!res.ok) {

        if (res.status === 429 && data.detail?.retry_after) {
          setResendStatus("error")
          setErrorMessage(data.detail.message || "Please wait before requesting another email.")
          setSecondsLeft(data.detail.retry_after)
          return
        }

        const message = Array.isArray(data.detail)
          ? data.detail.map((item: { msg: string }) => item.msg).join(" | ")
          : typeof data.detail === "string"
          ? data.detail
          : "Failed to resend verification email.";

        setResendStatus("error")
        setErrorMessage(message)
        return
      }

      setResendStatus("sent")
      setSecondsLeft(RESEND_WAIT_SECONDS)
    } catch (error) {
      console.error("Resend error:", error)
      setResendStatus("error")
      setErrorMessage("Could not connect to the server. Please try again later.")
    }
  };

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

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm text-center">
          {secondsLeft > 0 ? (
            <p className="text-xs text-gray-400">
              Didn&apos;t receive the email? You can resend it in{" "}
              <span className="font-semibold text-gray-500">{secondsLeft}s</span>
            </p>
          ) : (
            <div>
              <button
                type="button"
                onClick={handleResend}
                disabled={resendStatus === "sending"}
                className="text-sm font-semibold text-teal-600 hover:text-teal-800 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {resendStatus === "sending" ? "Sending..." : "Resend verification email"}
              </button>

              {resendStatus === "sent" && (
                <p className="mt-2 text-xs text-green-600 font-semibold">
                  Verification email resent successfully.
                </p>
              )}

              {resendStatus === "error" && (
                <p className="mt-2 text-xs text-red-500 font-semibold">
                  {errorMessage}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterSuccessPage
