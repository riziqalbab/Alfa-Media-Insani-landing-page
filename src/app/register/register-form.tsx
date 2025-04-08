"use client"

import { useEffect, useState } from "react"
import { redirect, useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import axios from "axios"
import { toast, ToastContainer } from "react-toastify"
import { useAuth } from "@/context/AuthContext"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Nama harus minimal 2 karakter.",
  }),
  username: z.string().min(2, {
    message: "Nama harus minimal 2 karakter.",
  }),
  email: z.string().email({
    message: "Email tidak valid.",
  }),
  password: z.string().min(8, {
    message: "Password harus minimal 8 karakter.",
  }),
  confirmPassword: z.string().min(8, {
    message: "Konfirmasi password harus minimal 8 karakter.",
  }),
  phone: z.string().min(10, {
    message: "Nomor telepon tidak valid.",
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Password tidak cocok",
  path: ["confirmPassword"],
})

export function RegisterForm() {

  const auth = useAuth()

  useEffect(() => {
    if (auth.isLoggedIn && auth.isLoggedIn != null) {
      redirect("/")
    }
  }, [auth.isLoggedIn])
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await toast.promise(axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/register`, {
        username: values.username,
        email: values.email,
        phone: values.phone,
        name: values.name,

        password: values.password
      }, {
        withCredentials: true
      }), {
        pending: 'Registering...',
        success: 'Register success',
        error: {
          render({ data }) {
            return (data as any).response.data.error
          }
        }
      })

    } catch (error) {

    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form {...form}>
      <ToastContainer />
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama Lengkap</FormLabel>
              <FormControl>
                <Input placeholder="Masukkan nama lengkap" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="nama@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Konfirmasi Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nomor Telepon</FormLabel>
              <FormControl>
                <Input placeholder="08xxxxxxxxxx" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />



        <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700" disabled={isLoading}>
          {isLoading ? "Mendaftar..." : "Daftar"}
        </Button>
      </form>
    </Form>
  )
}
