"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import { HiOutlineKey } from "react-icons/hi2";
import { FaEye } from "react-icons/fa";
import { BiHide } from "react-icons/bi";
import { AUTH_ENDPOINTS } from "@/lib/appConfig";


const validationSchema = Yup.object().shape({
  newPassword: Yup.string()
    .min(8, "password must be at least 8 characters long")
    .required("please enter your new password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword")], "passwords must match")
    .required("please confirm your new password"),
});

const ResetPasswordPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const formik = useFormik({
    initialValues: { newPassword: "", confirmPassword: "" },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setServerError(null);

      if (!token) {
        setServerError("Reset token is missing or invalid.");
        setSubmitting(false);
        return;
      }

      try {
        const res = await fetch(AUTH_ENDPOINTS.resetPassword, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            token,
            new_password: values.newPassword,
          }),
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

        router.push("/login");
      } catch (error) {
        console.error("Reset password error:", error);
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
            <HiOutlineKey size={34} className="text-white" />
          </div>
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Set a new password
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {!token ? (
            <p className="text-red-500 font-bold text-sm text-center bg-red-50 rounded-lg py-2">
              Reset link is invalid or missing a token.
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
                  <label htmlFor="newPassword" className="block text-sm/6 font-semibold text-gray-700">
                    New Password
                  </label>
                  <div className="mt-2">
                    <div className="relative">
                      <input
                        id="newPassword"
                        type={showPassword ? "string" : "password"}
                        name="newPassword"
                        required
                        autoComplete="new-password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.newPassword}
                        className="block w-full rounded-xl border-2 border-transparent bg-teal-50 px-3 py-2.5 text-base text-gray-900 outline-none
                                   focus:border-teal-500 transition-colors sm:text-sm/6"
                      />
                      <button
                        type="button"
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-teal-600 cursor-pointer transition-colors"
                        onMouseDown={() => setShowPassword(true)}
                        onMouseUp={() => setShowPassword(false)}
                        onMouseLeave={() => setShowPassword(false)}
                      >
                        {showPassword ? <FaEye /> : <BiHide />}
                      </button>
                    </div>
                    {formik.touched.newPassword && formik.errors.newPassword && (
                      <p className="text-red-500 font-bold text-xs mt-1">{formik.errors.newPassword}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm/6 font-semibold text-gray-700">
                    Confirm New Password
                  </label>
                  <div className="mt-2">
                    <div className="relative">
                      <input
                        id="confirmPassword"
                        type={showConfirm ? "string" : "password"}
                        name="confirmPassword"
                        required
                        autoComplete="new-password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.confirmPassword}
                        className="block w-full rounded-xl border-2 border-transparent bg-teal-50 px-3 py-2.5 text-base text-gray-900 outline-none
                                   focus:border-teal-500 transition-colors sm:text-sm/6"
                      />
                      <button
                        type="button"
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-teal-600 cursor-pointer transition-colors"
                        onMouseDown={() => setShowConfirm(true)}
                        onMouseUp={() => setShowConfirm(false)}
                        onMouseLeave={() => setShowConfirm(false)}
                      >
                        {showConfirm ? <FaEye /> : <BiHide />}
                      </button>
                    </div>
                    {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                      <p className="text-red-500 font-bold text-xs mt-1">{formik.errors.confirmPassword}</p>
                    )}
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={formik.isSubmitting}
                    className="flex w-full justify-center rounded-xl bg-linear-to-r from-teal-500 to-cyan-500 px-3 py-2.5 text-sm/6 font-bold text-white hover:from-teal-600 hover:to-cyan-600 transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {formik.isSubmitting ? "please wait..." : "Reset password"}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage
