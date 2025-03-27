import {
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { useDataContext } from "@/context/DataContext";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "@/context/AuthContext";
import { toast, ToastContainer } from "react-toastify";



function AddBook() {

    const [categories, setCategories] = useState<string>()
    const [title, setTitle] = useState<string>()
    const [author, setAuthor] = useState<string>()
    const [price, setPrice] = useState<string>()
    const [isbn, setIsbn] = useState<string>()
    const [publisher, setPublisher] = useState<string>()
    const [publishDate, setPublishDate] = useState<string>()
    const [description, setDescription] = useState<string>()
    const [cover, setCover] = useState<File>()

    const isLoading = useState(false)


    const dataContext = useDataContext()
    const auth = useAuth()

    const handleSubmitBook = async (e: React.FormEvent) => {


        e.preventDefault()

        const formData = new FormData()
        formData.append("author", author!)
        formData.append("title", title!)
        formData.append("category_id", categories!)
        formData.append("isbn", isbn!)
        formData.append("price", price!)
        formData.append("publish_year", publishDate!)
        formData.append("publisher", publisher!)
        formData.append("description", description!)
        formData.append("image", cover!)


        const response = await toast.promise(
            axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/book`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${auth.accessToken}`
                }
            }),
            {
                pending: 'Tunggu sebentar',
                success: 'Berhasil menambah buku',
                error: 'Gagal menambah buku'
            }
        );
        console.log(response)
        const data = await response.data
        console.log(await data)
    }

    return (
        <div className="p-6 space-y-4">
            <ToastContainer />
            <SheetHeader>
                <SheetTitle>Tambah Buku Baru</SheetTitle>
                <SheetDescription>Isi informasi buku baru. Klik tambah ketika selesai.</SheetDescription>
            </SheetHeader>

            <div className="py-6 space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3 flex flex-col items-center">
                        <div className="relative w-full aspect-[3/4] mb-4 bg-gray-100 rounded-md border flex items-center justify-center">
                            <img
                                src={cover ? URL.createObjectURL(cover) : ""}
                                alt="Cover buku"
                                width={300}
                                height={400}
                                className="object-cover rounded-md opacity-50"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="img-cover">Cover Buku</Label>
                            <Input id="img-cover" type="file" onChange={(e) => setCover(e.target.files![0])} />
                        </div>
                    </div>

                    <div className="md:w-2/3 space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="new-title">Judul Buku</Label>
                            <Input id="new-title" placeholder="Masukkan judul buku" onChange={(e) => setTitle(e.target.value)} />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="new-author">Penulis</Label>
                            <Input id="new-author" placeholder="Masukkan nama penulis" onChange={(e) => setAuthor(e.target.value)} />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="new-price">Harga</Label>
                                <Input id="new-price" placeholder="Contoh: 75000" onChange={(e) => setPrice(e.target.value)} />
                            </div>

                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="new-category">Kategori</Label>
                            <Select onValueChange={(value) => setCategories(value)} defaultValue={categories}>
                                <SelectTrigger id="new-category">
                                    <SelectValue placeholder="Pilih kategori" />
                                </SelectTrigger>
                                <SelectContent>
                                    {dataContext.category.map((category) => (
                                        <SelectItem key={category.CategoryID} value={category.CategoryID.toString()}>
                                            {category.Title}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="new-isbn">ISBN</Label>
                            <Input id="new-isbn" placeholder="Contoh: 978-623-7891-xx-x" onChange={(e) => setIsbn(e.target.value)} />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="new-publisher">Penerbit</Label>
                            <Input id="new-publisher" onChange={(e) => setPublisher(e.target.value)} />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="new-publishDate">Tahun Terbit</Label>
                            <Input id="new-publishDate" placeholder="Contoh: 2023" onChange={(e) => setPublishDate(e.target.value)} />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="new-description">Deskripsi</Label>
                        <Textarea

                            id="new-description"
                            rows={5}
                            placeholder="Masukkan deskripsi buku..."
                            className="resize-none"
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                </div>

                <SheetFooter className="pt-4 border-t">
                    {
                        !isLoading ? (
                            <Button disabled>Tambah Buku</Button>
                        ) : (
                            <Button onClick={handleSubmitBook}>Tambah Buku</Button>
                        )
                    }
                </SheetFooter>
            </div>
        </div>
    );
}

export default AddBook;