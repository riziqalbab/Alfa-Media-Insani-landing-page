"use client"

import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const authContext = createContext<AuthContextType>({
    isLoggedIn: false,
    accessToken: "",
    login: () => { },
    logout: () => { }
})

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
    const [accessToken, setAccessToken] = useState<string>("");

    const refreshAccessToken = () => {
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/refresh_token`, {}, {
            withCredentials: true
        }).then((res) => {
            const accessToken = res.data.access_token;
            login(accessToken);
        }).catch((err) => {
            if (err.status == 401) logout();
        })
    };

    useEffect(() => {
        refreshAccessToken();
        const tokenExpirationTime = 15 * 60 * 1000;
        const interval = setInterval(() => {
            refreshAccessToken();
        }, tokenExpirationTime - 60 * 1000);

        return () => clearInterval(interval);
    }, []);


    const login = (accessToken: string) => {
        setAccessToken(accessToken);
        setIsLoggedIn(true);
    }

    const logout = () => {
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/logout`, {}, {
            withCredentials: true
        }).then(() => {
            setAccessToken("");
            setIsLoggedIn(false);
        })

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