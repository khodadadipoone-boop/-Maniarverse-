// RegisterTheme.tsx
import { HiUserPlus } from "react-icons/hi2"
import RegisterForm from "./registerForm";


const RegisterTheme = () => {


    return(
        <>
        <div className="w-lg flex flex-col justify-center bg-white shadow-md border border-teal-100 rounded-2xl px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <div className="mx-auto flex items-center justify-center w-20 h-20 rounded-full bg-linear-to-br from-teal-400 to-cyan-500">
                    <HiUserPlus size={34} className="text-white" />
                </div>
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Register</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <RegisterForm />
            </div>
        </div>
        </>
    )
}

export default RegisterTheme
