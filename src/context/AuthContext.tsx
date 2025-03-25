"use client"

import { createContext, useContext, useState } from "react";

const authContext = createContext<AuthContextType>({
    isLoggedIn: false,
    accessToken: "",
    login: () => { },
    logout: () => { }
})

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [accessToken, setAccessToken] = useState<string>("");


    const login = (accessToken: string) => {
        setAccessToken(accessToken);
        console.log(accessToken);
        
        setIsLoggedIn(true);
    }

    const logout = () => {
        setIsLoggedIn(false);
    }

    return (
        <authContext.Provider value={{ isLoggedIn, accessToken, login, logout }}>   
            {children}
        </authContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(authContext);
}