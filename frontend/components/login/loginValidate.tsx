import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({

    email: Yup.string().email("email format is not correct").required("please enter your email"),
    password: Yup.string().min(8, "password must be at least 8 characters long").required("please enter your password")

})

export type LoginValues = {

    email: string,
    password: string
}

const initialValues : LoginValues = {

    email: "",
    password: ""
  }


export const useContactLogin = () => {

  const formik = useFormik<LoginValues>({

    initialValues: initialValues,
    validationSchema: validationSchema,

    onSubmit:() => {

      try {
        formik.resetForm()
        console.log("success")
      }

      catch (error) {
        console.error("Submission error:", error)
      }

    },
  })

  return {
    formik
  }

}
