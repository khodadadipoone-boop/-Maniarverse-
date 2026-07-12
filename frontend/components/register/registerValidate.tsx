"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";


const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email format is not correct")
    .required("Please enter your email"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .required("Please enter your password")
    .matches(/[A-Za-z]/, "Password must contain at least one letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[@$!%*?&#^()_\-+=<>]/,
      "Password must contain at least one symbol"
    ),

  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref("password")],
      "The entered value does not match the password"
    )
    .required("Please enter your password again"),
});


export type RegisterValues = {
  email: string;
  password: string;
  confirmPassword: string;
};


const initialValues: RegisterValues = {
  email: "",
  password: "",
  confirmPassword: "",
};


type ApiErrorResponse = {
  detail?:
    | string
    | Array<{
        msg?: string;
      }>;
};


export const useContactRegister = () => {
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");

  const apiUrl =
    process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000";

  const formik = useFormik<RegisterValues>({
    initialValues,
    validationSchema,

    onSubmit: async (values, { resetForm, setSubmitting }) => {
      setSubmitError("");
      setSubmitSuccess("");

      try {
        const response = await fetch(`${apiUrl}/auth/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: values.email,
            password: values.password,
          }),
        });

        const data = (await response.json()) as ApiErrorResponse;

        if (!response.ok) {
          let errorMessage = "Registration failed.";

          if (typeof data.detail === "string") {
            errorMessage = data.detail;
          } else if (Array.isArray(data.detail)) {
            errorMessage =
              data.detail[0]?.msg ??
              "Please check the submitted information.";
          }

          throw new Error(errorMessage);
        }

        setSubmitSuccess(
          "Registration successful. Please verify your email."
        );

        resetForm();
      } catch (error) {
        setSubmitError(
          error instanceof Error
            ? error.message
            : "An unexpected error occurred."
        );
      } finally {
        setSubmitting(false);
      }
    },
  });

  return {
    formik,
    submitError,
    submitSuccess,
  };
};