"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll"
import { Plus, Trash2, } from "lucide-react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import AdminLayout from "@/layout/admin-layout"
import axios from "axios"
import { useAuth } from "@/context/AuthContext"
import { toast, ToastContainer } from "react-toastify"
import { redirect } from "next/navigation"

export default function ImageSlider() {


    const auth = useAuth()

    useEffect(() => {
        if (auth.isLoggedIn === false) {
            redirect("/admin/login");
        }
        if (auth.isLoggedIn && auth.userData?.role !== "admin") {
            redirect("/");
        }
    }, [auth.isLoggedIn]);


    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [isEditMode, setIsEditMode] = useState(false)
    const [selectedSlider, setSelectedSlider] = useState<any>(null)
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
    const [sliderToDelete, setSliderToDelete] = useState<number | null>(null)

    const [sliders, setSliders] = useState<Array<ImageSliderType>>([])

    const [description, setDescription] = useState<string>("")
    const [image, setImage] = useState<File | null>(null)

    const fetchImageSlider = () => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/image-slider`).then((response) => {
            setSliders(response.data.data)
        })
    }

    useEffect(() => {
        fetchImageSlider()
    }, [])




    // Handler untuk membuka drawer tambah slider
    const handleAddSlider = () => {
        setIsEditMode(false)
        setSelectedSlider(null)
        setIsDrawerOpen(true)
    }


    const handleDeleteConfirm = (id: number) => {
        setSliderToDelete(id)
        setDeleteDialogOpen(true)
    }

    // Handler untuk menghapus slider
    const handleDeleteSlider = async () => {

        const response = await toast.promise(axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/image-slider/${sliderToDelete}`, {
            headers: {
                Authorization: `Bearer ${auth.accessToken}`
            }
        }), {
            pending: 'Tunggu sebentar',
            success: 'Berhasil Menghapus Slider',
            error: 'Gagal Menghapus Slider'
        })

        if (response.status === 200) {
            fetchImageSlider()
            setDeleteDialogOpen(false)
        }

    }
    const handleSaveSlider = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData()

        formData.append("description", description)
        formData.append("image", image!)

        const response = toast.promise(
            axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/image-slider`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${auth.accessToken}`
                }
            }),
            {
                pending: 'Tunggu sebentar',
                success: 'Berhasil Menambahkan Slider',
                error: 'Gagal Menambahkan Slider'
            }
        )

        if ((await response).status === 200) {
            fetchImageSlider()
        }




        setIsDrawerOpen(false)
    }


    return (
        <AdminLayout>
            <ToastContainer />
            <div className="space-y-6 p-10">
                <RevealOnScroll>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <h1 className="text-2xl font-bold">Manajemen Slider</h1>
                            <p className="text-gray-500">Kelola gambar slider untuk halaman utama website</p>
                        </div>
                        <Button className="gap-2" onClick={handleAddSlider}>
                            <Plus className="h-4 w-4" />
                            Tambah Slider
                        </Button>
                    </div>
                </RevealOnScroll>

                <RevealOnScroll delay={100}>
                    <Card>
                        <CardHeader className="pb-3">
                            <CardTitle>Daftar Slider</CardTitle>
                            <CardDescription>
                                Total slider: {sliders.length}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="rounded-md border overflow-hidden">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-[80px]">Nomor</TableHead>
                                            <TableHead className="min-w-[300px]">Image</TableHead>
                                            <TableHead className="text-right">Aksi</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {sliders.map((slider, index) => (
                                            <TableRow key={index}>
                                                <TableCell>
                                                    <div className="font-medium">{index + 1}</div>
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex items-center gap-3">
                                                        <div className="h-16 w-28 rounded-md overflow-hidden bg-gray-100">
                                                            <img
                                                                src={`${process.env.NEXT_PUBLIC_API_URL}/api/v1/img/${slider.image}`}
                                                                alt={slider.description}
                                                                width={112}
                                                                height={64}
                                                                className="h-full w-full object-cover"
                                                            />
                                                        </div>
                                                        <div>
                                                            <div className="text-sm text-gray-500 line-clamp-2">{slider.description}</div>
                                                        </div>
                                                    </div>
                                                </TableCell>

                                                <TableCell className="text-right">
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <Button variant="ghost" size="sm">
                                                                Aksi
                                                            </Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent align="end">

                                                            <DropdownMenuItem onClick={() => handleDeleteConfirm(slider.ID)}>
                                                                <Trash2 className="mr-2 h-4 w-4 text-red-500" />
                                                                <span className="text-red-500">Hapus</span>
                                                            </DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </CardContent>
                    </Card>
                </RevealOnScroll>

                <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
                    <SheetContent side="right" className="w-full sm:max-w-xl overflow-y-auto p-8">
                        <SheetHeader>
                            <SheetTitle>Tambah Slider Baru</SheetTitle>
                            <SheetDescription>
                                Isi informasi slider baru. Klik tambah ketika selesai
                            </SheetDescription>
                        </SheetHeader>

                        <form onSubmit={handleSaveSlider} className="py-6 space-y-6">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="image">Gambar Slider</Label>
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="relative w-full aspect-[2/1] rounded-md overflow-hidden border">
                                            <img
                                                alt="Preview"
                                                className="object-cover"
                                                src={image ? URL.createObjectURL(image) : ""}
                                            />
                                        </div>
                                        <div className="w-full">
                                            <Input id="image" name="image" type="file" accept="image/*" onChange={(e) => setImage(e.target.files![0])} />
                                            <p className="text-xs text-gray-500 mt-1">Ukuran yang direkomendasikan: 1200x600 piksel</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="description">Deskripsi</Label>
                                    <Textarea
                                        id="description"
                                        name="description"
                                        placeholder="Masukkan deskripsi singkat"
                                        defaultValue={isEditMode && selectedSlider ? selectedSlider.description : ""}
                                        className="resize-none"
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>

                            </div>

                            <SheetFooter className="pt-4 border-t">
                                <Button variant="outline" type="button" onClick={() => setIsDrawerOpen(false)}>
                                    Batal
                                </Button>
                                <Button type="submit">{isEditMode ? "Simpan Perubahan" : "Tambah Slider"}</Button>
                            </SheetFooter>
                        </form>
                    </SheetContent>
                </Sheet>

                <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Konfirmasi Hapus</DialogTitle>
                            <DialogDescription>
                                Apakah Anda yakin ingin menghapus slider ini? Tindakan ini tidak dapat dibatalkan.
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
                                Batal
                            </Button>
                            <Button variant="destructive" onClick={handleDeleteSlider}>
                                Hapus
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </AdminLayout>
    )
}

