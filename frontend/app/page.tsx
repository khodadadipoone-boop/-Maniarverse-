
import Link from "next/link"

export default function Home() {

  return (
    <>
    <div className="flex flex-col text-center min-h-full space-y-10">
      <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Wellcome to Minyaverse project</h3>

      <Link href="/register" className="text-violet-700">Register Page</Link>
      <Link href="/login" className="text-violet-700">login page</Link>
    </div>
    </>
  )

}
