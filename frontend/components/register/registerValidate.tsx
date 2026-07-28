
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { AUTH_ENDPOINTS } from '@/lib/appConfig'


const validationSchema = Yup.object().shape({

  email: Yup.string().email("email format is not correct").required("please enter your email"),
  password: Yup.string().min(8, "password must be at least 8 characters long").required("please enter your password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], "passwords must match")
    .required("please confirm your password"),

})


export type RegisterValues = {
  email: string,
  password: string,
  confirmPassword: string,
}

const initialValues: RegisterValues = {
  email: "",
  password: "",
  confirmPassword: "",
}


export const useContactRegister = () => {

  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);

  const formik = useFormik<RegisterValues>({
    initialValues: initialValues,
    validationSchema: validationSchema,

    onSubmit: async (values, { setSubmitting }) => {
      setServerError(null);
      try {
        const res = await fetch(AUTH_ENDPOINTS.register, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: values.email,
            password: values.password,
          }),
        })

        const data = await res.json()

        if (!res.ok) {
          const message = Array.isArray(data.detail)
            ? data.detail.map((item: { msg: string }) => item.msg).join(" | ")
            : data.detail || "we have an unknown error."

          setServerError(message)
          setSubmitting(false)
          return
        }

        router.push(`/register/success?email=${encodeURIComponent(values.email)}`)
      } catch (error) {
        console.error("Submission error:", error)
        setServerError("error connecting to server. make sure the backend is running.")
        setSubmitting(false)
      }
    },
  })

  return {
    formik,
    serverError,
  }
}
