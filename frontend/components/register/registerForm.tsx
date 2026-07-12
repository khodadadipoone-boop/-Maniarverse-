"use client";

import { useState } from "react";

import Link from "next/link";

import { BiHide } from "react-icons/bi";
import { FaEye } from "react-icons/fa";

import { useContactRegister } from "./registerValidate";


const RegisterForm = () => {
  const {
    formik,
    submitError,
    submitSuccess,
  } = useContactRegister();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="space-y-6"
    >
      <div>
        <label
          htmlFor="email"
          className="block text-sm/6 font-medium"
        >
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
            className="block w-full rounded-md px-3 py-1.5 text-base
                       outline-none outline-white/10 ring ring-gray-200
                       sm:text-sm/6"
          />

          {formik.touched.email && formik.errors.email && (
            <p className="mt-1 text-xs font-bold text-red-500">
              {formik.errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm/6 font-medium"
        >
          Password
        </label>

        <div className="mt-2">
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              required
              autoComplete="new-password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className="block w-full rounded-md px-3 py-1.5 text-base
                         outline-none outline-white/10 ring ring-gray-200
                         sm:text-sm/6"
            />

            <button
              type="button"
              aria-label={
                showPassword
                  ? "Hide password"
                  : "Show password"
              }
              className="absolute right-2 top-1/2 -translate-y-1/2
                         cursor-pointer text-gray-500"
              onMouseDown={() => setShowPassword(true)}
              onMouseUp={() => setShowPassword(false)}
              onMouseLeave={() => setShowPassword(false)}
              onTouchStart={() => setShowPassword(true)}
              onTouchEnd={() => setShowPassword(false)}
            >
              {showPassword ? <FaEye /> : <BiHide />}
            </button>
          </div>

          {formik.touched.password && formik.errors.password && (
            <p className="mt-1 text-xs font-bold text-red-500">
              {formik.errors.password}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="confirmPassword"
          className="block text-sm/6 font-medium"
        >
          Confirm Password
        </label>

        <div className="mt-2">
          <div className="relative">
            <input
              id="confirmPassword"
              type={showConfirm ? "text" : "password"}
              name="confirmPassword"
              required
              autoComplete="new-password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              className="block w-full rounded-md px-3 py-1.5 text-base
                         outline-none outline-white/10 ring ring-gray-200
                         sm:text-sm/6"
            />

            <button
              type="button"
              aria-label={
                showConfirm
                  ? "Hide confirmation password"
                  : "Show confirmation password"
              }
              className="absolute right-2 top-1/2 -translate-y-1/2
                         cursor-pointer text-gray-500"
              onMouseDown={() => setShowConfirm(true)}
              onMouseUp={() => setShowConfirm(false)}
              onMouseLeave={() => setShowConfirm(false)}
              onTouchStart={() => setShowConfirm(true)}
              onTouchEnd={() => setShowConfirm(false)}
            >
              {showConfirm ? <FaEye /> : <BiHide />}
            </button>
          </div>

          {formik.touched.confirmPassword &&
            formik.errors.confirmPassword && (
              <p className="mt-1 text-xs font-bold text-red-500">
                {formik.errors.confirmPassword}
              </p>
            )}
        </div>
      </div>

      {submitError && (
        <p className="text-sm font-medium text-red-600">
          {submitError}
        </p>
      )}

      {submitSuccess && (
        <p className="text-sm font-medium text-green-600">
          {submitSuccess}
        </p>
      )}

      <div>
        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="flex w-full justify-center rounded-md bg-violet-600
                     px-3 py-1.5 text-sm/6 font-semibold text-white
                     transition-colors hover:bg-violet-800
                     disabled:cursor-not-allowed disabled:opacity-60"
        >
          {formik.isSubmitting
            ? "Registering..."
            : "Register"}
        </button>
      </div>

      <div className="mt-10 cursor-pointer text-center text-sm
                      text-violet-600 transition-colors hover:text-violet-800
                      lg:mt-7"
      >
        <Link href="/">Back to home</Link>
      </div>

      <div className="mt-6 flex justify-center space-x-2 text-center text-sm lg:mt-5">
        <p>Have an account?</p>

        <Link
          href="/login"
          className="cursor-pointer text-violet-600
                     transition-colors hover:text-violet-800"
        >
          Login
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;