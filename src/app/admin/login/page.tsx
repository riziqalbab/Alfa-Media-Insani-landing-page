"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useEffect, useState } from "react"
import axios from "axios"
import { useAuth } from "@/context/AuthContext"

import { ToastContainer, toast } from 'react-toastify';
import { redirect } from "next/navigation"


export default function AdminLoginPage() {

  const auth = useAuth()


  useEffect(() => {
    if (auth.isLoggedIn && auth.isLoggedIn != null) {
      redirect("/admin")
    }
  }, [auth.isLoggedIn])

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    const loadingToast = toast.loading('Logging in...');

    axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/login`, {
      username: username,
      password: password
    }, {
      withCredentials: true
    }).then((res) => {
      toast.update(loadingToast, {
        render: 'Login success',
        type: 'success',
        isLoading: false,
        autoClose: 2000,
      });
      const accessToken = res.data.access_token
      auth.login(accessToken)
    }).catch((err) => {
      if (err.status == 401) {
        toast.update(loadingToast, {
          render: 'Password atau username salah',
          type: 'error',
          isLoading: false,
          autoClose: 2000,
        });
      }

    })
  }



  return (

    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center relative overflow-hidden">
      <ToastContainer />
      {/* <GeometricPattern variant="dots" className="inset-0 text-primary" /> */}
      <div className="w-full max-w-md z-10">
        <div className="bg-white rounded-lg shadow-lg border p-8">
          <div className="flex flex-col items-center mb-6">

            <h1 className="text-2xl font-bold">Admin Login</h1>
            <p className="text-gray-500 text-sm mt-2">Masuk ke panel admin Alfa Media Insani</p>
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" type="text" placeholder="" onChange={(e) => { setUsername(e.target.value) }} />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>

              </div>
              <Input id="password" type="password" placeholder="••••••••" onChange={(e) => { setPassword(e.target.value) }} />
            </div>

            <div className="pt-2">
              <Button onClick={handleLogin} className="w-full bg-primary hover:bg-primary/90">
                Login
              </Button>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

