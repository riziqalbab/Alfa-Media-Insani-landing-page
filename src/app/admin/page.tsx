"use client"

import { Plus, Search, Filter, MoreHorizontal, Edit, Trash2, Eye, ArrowUpDown, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll"
import AdminLayout from "@/layout/admin-layout"
import { useEffect, useState } from "react"
import axios from "axios"
import AddBook from "@/components/add-book"
import { useDataContext } from "@/context/DataContext"
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast, ToastContainer } from "react-toastify"

import { useAuth } from "@/context/AuthContext"

export default function AdminBooksPage() {

    const auth = useAuth()

    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)
    const [totalData, setTotalData] = useState(0)
    const [books, setBooks] = useState<Array<Books>>([])
    const [isEditing, setIsEditing] = useState(false);

    const [isLoading, setIsloading] = useState(false)


    const [categories, setCategories] = useState<any>()
    const [title, setTitle] = useState<string>()
    const [author, setAuthor] = useState<string>()
    const [price, setPrice] = useState<string>()
    const [isbn, setIsbn] = useState<string>()
    const [publisher, setPublisher] = useState<string>()
    const [publishDate, setPublishDate] = useState<any>()
    const [description, setDescription] = useState<string>()
    const [cover, setCover] = useState<File>()


    const [currentBook, setCurrentBook] = useState<Book>({} as Book)
    const [isOpen, setIsOpen] = useState(false)


    const dataContext = useDataContext()

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/books?page=${page}&limit=10`).then((response) => {
            setBooks(response.data.data)
            setTotalPage(response.data.total_page)
            setTotalData(response.data.total_data)
        })
    }, [page])


    const handleEditBook = async () => {

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
            axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/book/${currentBook.isbn}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${auth.accessToken}`
                }
            }),
            {
                pending: 'Tunggu sebentar',
                success: 'Berhasil Mengubah Buku',
                error: 'Gagal Mengubah Buku'
            }
        );
    }

    const startEdit = (book: Books) => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/book/${book.isbn}`).then((response) => {
            const book: Book = response.data.data
            setCurrentBook(book)
            setIsEditing(true);
        })
    }

    useEffect(() => {
        setTitle(currentBook.title)
        setAuthor(currentBook.author)
        setCategories(currentBook.category?.CategoryID)
        setIsbn(currentBook.isbn)
        setPrice(currentBook.price)
        setPublisher(currentBook.publisher)
        setPublishDate(currentBook.publish_year)
        setDescription(currentBook.description)
    }, [currentBook])



    return (
        <AdminLayout>
            <ToastContainer />

            <div className="space-y-6 p-10">
                <RevealOnScroll>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <h1 className="text-2xl font-bold">Manajemen Buku</h1>
                            <p className="text-gray-500">Kelola semua buku dalam katalog</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <Sheet>
                                <SheetTrigger className="gap-2" asChild>
                                    <Button>
                                        <Plus className="h-4 w-4" />
                                        Tambah Buku
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="right" className="w-full sm:max-w-xl overflow-y-auto">
                                    <AddBook />
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </RevealOnScroll>

                <RevealOnScroll delay={100}>
                    <Card>
                        <CardHeader className="pb-3">
                            <CardTitle>Daftar Buku</CardTitle>
                            <CardDescription>Total buku: {books.length}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col md:flex-row gap-4 mb-6">
                                <div className="flex-1 relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                    <Input placeholder="Cari buku..." className="pl-10" />
                                </div>
                                <div className="flex flex-col sm:flex-row gap-2">
                                    <Select defaultValue="all">
                                        <SelectTrigger className="w-full sm:w-[180px]">
                                            <SelectValue placeholder="Kategori" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {
                                                dataContext.category.map((category, index) => (
                                                    <SelectItem value={category.Slug} key={index}>{category.Title}</SelectItem>
                                                ))
                                            }
                                        </SelectContent>
                                    </Select>

                                    <Button variant="outline" className="gap-2">
                                        <Filter className="h-4 w-4" />
                                        Filter
                                    </Button>
                                </div>
                            </div>

                            <div className="rounded-md border overflow-hidden">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-[80px]">NO</TableHead>
                                            <TableHead className="min-w-[300px]">
                                                <div className="flex items-center gap-2">
                                                    Buku
                                                    <ArrowUpDown className="h-4 w-4" />
                                                </div>
                                            </TableHead>
                                            <TableHead>Harga</TableHead>
                                            <TableHead>ISBN</TableHead>
                                            <TableHead className="text-right">Aksi</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {books.map((book, index) => (
                                            <TableRow key={book.id_book}>
                                                <TableCell className="font-medium">{index + 1}</TableCell>
                                                <TableCell>
                                                    <div className="flex items-center gap-3">
                                                        <div className="h-10 w-10 rounded-md overflow-hidden bg-gray-100">
                                                            <img
                                                                src={
                                                                    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/img/${book.image}` ||
                                                                    "https://placehold.co/600x400"
                                                                }
                                                                alt={book.title}
                                                                width={40}
                                                                height={40}
                                                                className="h-full w-full object-cover"
                                                            />
                                                        </div>
                                                        <div>
                                                            <div className="font-medium">{book.title}</div>
                                                            <div className="text-sm text-gray-500">{book.author}</div>
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell>{book.price}</TableCell>
                                                <TableCell>{book.isbn}</TableCell>
                                                <TableCell className="text-right">
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <Button variant="ghost" size="icon">
                                                                <MoreHorizontal className="h-4 w-4" />
                                                            </Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent align="end">
                                                            <DropdownMenuLabel>Aksi</DropdownMenuLabel>
                                                            <DropdownMenuSeparator />
                                                            <DropdownMenuItem className="flex items-center gap-2">
                                                                <Eye className="h-4 w-4" />
                                                                <Link href={`/katalog/${book.isbn}`}>Lihat</Link>
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem className="flex items-center gap-2" onClick={() => startEdit(book)}>
                                                                <Edit className="h-4 w-4" />
                                                                <span>Edit</span>
                                                            </DropdownMenuItem>
                                                            <DropdownMenuSeparator />
                                                            <DropdownMenuItem className="flex items-center gap-2 text-red-500">
                                                                <Trash2 className="h-4 w-4" />
                                                                <span>Hapus</span>
                                                            </DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>

                            <div className="flex items-center justify-between mt-4">
                                <div className="text-sm text-gray-500">
                                    Menampilkan {books.length} dari {totalData} buku
                                </div>
                                <div className="flex items-center gap-2">
                                    {page > 1 && (
                                        <Button variant="outline" size="sm" onClick={() => setPage(page - 1)}>
                                            Sebelumnya
                                        </Button>
                                    )}
                                    <Button variant="outline" size="sm" className="bg-primary/10">
                                        {page}
                                    </Button>
                                    {page < totalPage && (
                                        <Button variant="outline" size="sm" onClick={() => setPage(page + 1)}>
                                            Selanjutnya
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </RevealOnScroll>
            </div>

            <Dialog open={isEditing} onOpenChange={setIsEditing}>
                <DialogContent className="lg:max-w-screen-lg overflow-y-scroll max-h-screen h-screen">
                    <DialogHeader>
                        <DialogTitle>Edit Kategori</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                        <SheetHeader>
                            <SheetTitle>Edit Buku</SheetTitle>
                            <SheetDescription>Isi informasi buku baru. Klik tambah ketika selesai.</SheetDescription>
                        </SheetHeader>

                        <div className="py-6 space-y-6">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="md:w-1/3 flex flex-col items-center">
                                    <div className="relative w-full aspect-[3/4] mb-4 bg-gray-100 rounded-md border flex items-center justify-center">
                                        <img
                                            src={cover ? URL.createObjectURL(cover) : `${process.env.NEXT_PUBLIC_API_URL}/api/v1/img/${currentBook.image}`}
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
                                        <Input defaultValue={currentBook.title} id="new-title" placeholder="Masukkan judul buku" onChange={(e) => setTitle(e.target.value)} />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="new-author">Penulis</Label>
                                        <Input defaultValue={currentBook.author} id="new-author" placeholder="Masukkan nama penulis" onChange={(e) => setAuthor(e.target.value)} />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="new-price">Harga</Label>
                                            <Input defaultValue={currentBook.price} id="new-price" placeholder="Contoh: 75000" onChange={(e) => setPrice(e.target.value)} />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="new-category">Kategori</Label>
                                        <Select defaultValue={currentBook.category?.CategoryID?.toString()} onValueChange={(value) => setCategories(value)} >
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
                                        <Input defaultValue={currentBook.isbn} id="new-isbn" placeholder="Contoh: 978-623-7891-xx-x" onChange={(e) => setIsbn(e.target.value)} />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="new-publisher">Penerbit</Label>
                                        <Input defaultValue={currentBook.publisher} id="new-publisher" onChange={(e) => setPublisher(e.target.value)} />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="new-publishDate">Tahun Terbit</Label>
                                        <Input defaultValue={currentBook.publish_year} id="new-publishDate" placeholder="Contoh: 2023" onChange={(e) => setPublishDate(e.target.value)} />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="new-description">Deskripsi</Label>
                                    <Textarea

                                        id="new-description"
                                        rows={5}
                                        defaultValue={currentBook.description}
                                        placeholder="Masukkan deskripsi buku..."
                                        className="resize-none"
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>
                            </div>

                            <SheetFooter className="pt-4 border-t">
                                {/* {
                                    !isLoading ? (
                                        <Button disabled>Tambah Buku</Button>
                                    ) : (
                                        <Button onClick={handleSubmitBook}>Tambah Buku</Button>
                                    )
                                } */}
                                <Button onClick={handleEditBook}>SIMPAN</Button>
                            </SheetFooter>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </AdminLayout>
    )
}


