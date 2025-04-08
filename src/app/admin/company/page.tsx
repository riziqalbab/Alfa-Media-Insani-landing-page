"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Loader2 } from "lucide-react"
import axios from "axios"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { toast, ToastContainer } from "react-toastify"
import AdminLayout from "@/layout/admin-layout"
import { useAuth } from "@/context/AuthContext"
import { redirect } from "next/navigation"

const companyFormSchema = z.object({
    name: z.string().min(2, {
        message: "Nama perusahaan harus minimal 2 karakter.",
    }),
    about: z.string().min(10, {
        message: "Deskripsi perusahaan harus minimal 10 karakter.",
    }),
    address: z.string().min(5, {
        message: "Alamat harus minimal 5 karakter.",
    }),
    email: z.string().email({
        message: "Email tidak valid.",
    }),
    misi: z.string().min(10, {
        message: "Misi perusahaan harus minimal 10 karakter.",
    }),
    phone: z.string().min(10, {
        message: "Nomor telepon harus minimal 10 karakter.",
    }),
    visi: z.string().min(10, {
        message: "Visi perusahaan harus minimal 10 karakter.",
    }),
    website: z.string().url({
        message: "URL website tidak valid.",
    }),
    logo: z.any().optional(),
})

type CompanyFormValues = z.infer<typeof companyFormSchema>






export default function CompanyIdentityForm() {
    const auth = useAuth()

    useEffect(() => {
        if (auth.isLoggedIn === false) {
            redirect("/admin/login");
        }
        if (auth.isLoggedIn && auth.userData?.role !== "admin") {
            redirect("/");
        }
    }, [auth.isLoggedIn]);
7



    const [company, setCompany] = useState<CompanyType>()
    const [defaultValues, setDefaultValues] = useState<Partial<CompanyFormValues>>({})


    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/company`).then((response) => {
            setCompany(response.data.data)
        })
    }, [])


    const form = useForm<CompanyFormValues>({
        resolver: zodResolver(companyFormSchema),
        defaultValues,
        mode: "onChange",
    })
    useEffect(() => {
        if (company) {
            form.reset({
                name: company?.Name,
                about: company?.About,
                address: company?.Address,
                email: company?.Email,
                misi: company?.Misi,
                phone: company?.Phone,
                visi: company?.Visi,
                website: company?.Website,
            });
        }
    }, [company, form]);



    const [isSubmitting, setIsSubmitting] = useState(false)
    const [logoPreview, setLogoPreview] = useState<string | null>(null)



    async function onSubmit(data: CompanyFormValues) {
        setIsSubmitting(true)

        try {
            // Membuat FormData untuk mengirim file
            const formData = new FormData()
            Object.entries(data).forEach(([key, value]) => {
                if (value instanceof File) {
                    formData.append(key, value)
                } else if (value !== undefined) {
                    formData.append(key, value)
                }
            })

            // Mengirim data ke API menggunakan axios
            const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/company`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${auth.accessToken}`
                },
            })

            if (response.status === 200 || response.status === 201) {
                toast.success("Data perusahaan berhasil diperbarui.")
            } else {
                throw new Error("Gagal memperbarui data perusahaan")
            }
        } catch (error) {
            console.error("Error updating company data:", error)
            toast
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            form.setValue("logo", file)

            // Membuat preview logo
            const reader = new FileReader()
            reader.onload = () => {
                setLogoPreview(reader.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <AdminLayout>
            <div className="p-10">
                <ToastContainer />
                <CardContent className="pt-6">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Nama Perusahaan</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Masukkan nama perusahaan" {...field} />
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
                                                <Input placeholder="contoh@perusahaan.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Nomor Telepon</FormLabel>
                                            <FormControl>
                                                <Input placeholder="021-12345678" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="website"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Website</FormLabel>
                                            <FormControl>
                                                <Input placeholder="https://perusahaan.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="address"
                                    render={({ field }) => (
                                        <FormItem className="md:col-span-2">
                                            <FormLabel>Alamat</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Masukkan alamat lengkap" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="about"
                                    render={({ field }) => (
                                        <FormItem className="md:col-span-2">
                                            <FormLabel>Tentang Perusahaan</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Deskripsi singkat tentang perusahaan"
                                                    className="min-h-[120px]"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="visi"
                                    render={({ field }) => (
                                        <FormItem className="md:col-span-2">
                                            <FormLabel>Visi</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="Visi perusahaan" className="min-h-[100px]" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="misi"
                                    render={({ field }) => (
                                        <FormItem className="md:col-span-2">
                                            <FormLabel>Misi</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="Misi perusahaan" className="min-h-[100px]" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="logo"
                                    render={({ field: { value, onChange, ...fieldProps } }) => (
                                        <FormItem className="md:col-span-2">
                                            <FormLabel>Logo Perusahaan</FormLabel>
                                            <FormControl>
                                                <div className="flex flex-col gap-4">
                                                    <Input
                                                        type="file"
                                                        accept="image/*"
                                                        onChange={(e) => {
                                                            handleLogoChange(e)
                                                            onChange(e.target.files?.[0] || null)
                                                        }}
                                                        {...fieldProps}
                                                    />
                                                    {logoPreview && (
                                                        <div className="mt-2">
                                                            <p className="text-sm text-muted-foreground mb-2">Preview:</p>
                                                            <div className="border rounded-md p-2 w-40 h-40 flex items-center justify-center">
                                                                <img
                                                                    src={logoPreview || "/placeholder.svg"}
                                                                    alt="Logo Preview"
                                                                    className="max-w-full max-h-full object-contain"
                                                                />
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </FormControl>
                                            <FormDescription>Unggah logo perusahaan dalam format JPG, PNG, atau SVG.</FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="flex justify-end gap-4">
                                <Button variant="outline" type="button">
                                    Batal
                                </Button>
                                <Button type="submit" disabled={isSubmitting}>
                                    {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                    Simpan Perubahan
                                </Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </div>
        </AdminLayout>
    )
}

