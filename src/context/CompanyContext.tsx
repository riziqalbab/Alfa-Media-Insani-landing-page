import { createContext, useState } from "react";



const contextCompany = createContext<CompanyContextType>(
    {} as CompanyContextType
)

export const CompanyProvider = ({ children }: { children: React.ReactNode }) => {

    const [company, setCompany] = useState<CompanyType | null>(null)

    const getCompany = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/company`)
        const data = await res.json()
        setCompany(data.data)
    }

    return (
        <contextCompany.Provider value={{ company, setCompany }}>
            {children}
        </contextCompany.Provider>
    )
}