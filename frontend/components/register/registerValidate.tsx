import { useFormik } from 'formik';
import * as Yup from 'yup';



const validationSchema = Yup.object().shape({

    email: Yup.string().email("email format is not correct").required("please enter your email"),
    password: Yup.string().min(8, "password must be at least 8 characters long").required("please enter your password")
                  .matches(/[A-Za-z]/, "password must contain at least one letter")
                  .matches(/\d/, "password must contain at least one number")
                  .matches(/[@$!%*?&#^()_\-+=<>]/, "password must contain at least one symbol"),

    confirmPassword: Yup.string().oneOf([Yup.ref('password')] , "The entered value does not match the password")
                        .required("Please enter your password again")

})


export type RegisterValues = {

    email: string,
    password: string,
    confirmPassword: string
}

const initialValues : RegisterValues = {

    email: "",
    password: "",
    confirmPassword: ""
  }


export const useContactRegister = () => {

  const formik = useFormik<RegisterValues>({

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
