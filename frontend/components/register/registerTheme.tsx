import registerImg from "@/public/images/register.jpg"
import Image from "next/image";
import RegisterForm from "./registerForm";


const RegisterTheme = () => {


    return(
        <>
        <div className="w-lg flex flex-col justify-center border border-gray-200 rounded  px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <Image src={registerImg} alt="registerImage" className="mx-auto w-16 h-16"/>
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight">Register</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <RegisterForm />
            </div>
        </div>
        </>
    )
}

export default RegisterTheme
