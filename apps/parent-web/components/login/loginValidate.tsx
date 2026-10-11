// loginValidate.ts
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { AUTH_ENDPOINTS } from '@/lib/appConfig';
import { saveToken } from '@/lib/tokenStorage';

const validationSchema = Yup.object().shape({
  email: Yup.string().email("email format is not correct").required("please enter your email"),
  password: Yup.string().min(8, "password must be at least 8 characters long").required("please enter your password")
})

export type LoginValues = {
  email: string,
  password: string
}

const initialValues: LoginValues = {
  email: "",
  password: ""
}

export const useContactLogin = () => {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);

  const formik = useFormik<LoginValues>({
    initialValues: initialValues,
    validationSchema: validationSchema,

    onSubmit: async (values, { setSubmitting }) => {
      setServerError(null);
      try {
        const res = await fetch(AUTH_ENDPOINTS.login, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        const data = await res.json();

        if (!res.ok) {
          setServerError(data.detail || "خطایی رخ داد");
          setSubmitting(false);
          return;
        }

        saveToken(data.access_token);
        router.replace("/dashboard");
      } catch (error) {
        console.error("Submission error:", error);
        setServerError("خطا در اتصال به سرور. مطمئن شو بک‌اند در حال اجراست.");
        setSubmitting(false);
      }
    },
  })

  return {
    formik,
    serverError,
  }
}
