import Link from "next/link"
import { RegisterForm } from "./register-form"
import GetCompany from "@/data/GetCompany";
import { ToastContainer } from "react-toastify";

export default async function RegisterPage() {
    const company: CompanyType = await GetCompany();



    return (
        <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
            <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex items-center justify-center dark:border-r">
                <div className="absolute inset-0 bg-emerald-900" />
                <div className="relative z-20 flex items-center text-lg font-medium">
                    <img
                        src={`${process.env.NEXT_PUBLIC_API_URL}/api/v1/img/${company.Logo}`} alt="Logo" className="" />
                </div>
            </div>
            <div className="lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] lg:w-[450px]">
                    <div className="flex flex-col space-y-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">Buat Akun</h1>
                        <p className="text-sm text-muted-foreground">
                            Daftar untuk menjadi bagian dari komunitas Alfa Media Insani
                        </p>
                    </div>
                    <RegisterForm />
                    <p className="px-8 text-center text-sm text-muted-foreground">
                        Sudah memiliki akun?{" "}
                        <Link href="/login" className="underline underline-offset-4 hover:text-primary">
                            Masuk di sini
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
