"use client"

import React, { useEffect, useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Pencil, Trash2 } from 'lucide-react';
import AdminLayout from '@/layout/admin-layout';
import axios from 'axios';
import { useDataContext } from '@/context/DataContext';
import { useAuth } from '@/context/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import { redirect } from 'next/navigation';

const BookCategoryManagement = () => {
    const auth = useAuth()

    useEffect(() => {
        if (!auth.isLoggedIn && auth.isLoggedIn != null) {
            redirect("/admin/login")
        }
    }, [auth.isLoggedIn])



    const dataContext = useDataContext()
    const [categories, setCategories] = useState<Array<Category>>([]);

    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');

    const [currentCategory, setCurrentCategory] = useState<Category>();
    const [isEditing, setIsEditing] = useState(false);

    const generateSlug = (input: string) => {
        const generated_slug = input
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '');

        setSlug(generated_slug);
    };

    useEffect(() => {
        setCategories(dataContext.category)

    }, [dataContext.category])

    const handleSubmit = async () => {
        try {
            const response = await toast.promise(axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/category`, { title, slug }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${auth.accessToken}`
                }
            }), {
                pending: 'Tunggu sebentar',
                success: 'Berhasil menambah kategori',
                error: 'Gagal menambah kategori'
            }
            )
            console.log(response.data);
            setCategories([...categories, response.data.data]);
            setTitle('');
            setSlug('');
        } catch (error) {
            console.error(error);
        }
    };
    const handleEdit = async () => {
        try {
            const response = await toast.promise(axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/category/${currentCategory?.CategoryID}`, { title, slug }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${auth.accessToken}`
                }
            }), {
                pending: 'Tunggu sebentar',
                success: 'Berhasil mengubah kategori',
                error: 'Gagal mengubah kategori'
            }
            )
            console.log(response.data);
            const updatedCategories = categories.map((category) => {
                if (category.CategoryID === currentCategory?.CategoryID) {
                    return response.data.data;
                }
                return category;
            });
            setCategories(updatedCategories);
            setTitle('');
            setSlug('');
            setIsEditing(false);
        } catch (error) {
            console.error(error);
        }
    };


    const startEdit = (category: Category) => {
        setIsEditing(true);
        setCurrentCategory(category);
        setTitle(category.Title);
        setSlug(category.Slug);
    };


    return (
        <AdminLayout>
            <ToastContainer />
            <div className="max-w-4xl mx-auto mt-10 space-y-6">
                {/* Tabel Kategori */}

                <Dialog>
                    <DialogTrigger asChild>
                        <Button>TAMBAH</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Tambah Kategori</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="title" className="text-right">
                                    Nama
                                </Label>
                                <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="slug" className="text-right">
                                    Slug
                                </Label>
                                <Input id="slug" value={slug} onChange={(e) => setSlug(e.target.value)} className='col-span-3' />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button variant="outline" onClick={() => generateSlug(title)}>Generate Slug</Button>
                            <Button type="submit" onClick={handleSubmit}>SIMPAN</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>


                <Card>
                    <CardHeader>
                        <CardTitle>Daftar Kategori Buku</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>No</TableHead>
                                    <TableHead>Judul Kategori</TableHead>
                                    <TableHead>Slug</TableHead>
                                    <TableHead className="text-right">Aksi</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {categories.map((category, index) => (
                                    <TableRow key={category.CategoryID}>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>{category.Title}</TableCell>
                                        <TableCell>{category.Slug}</TableCell>
                                        <TableCell className="text-right space-x-2">
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                onClick={() => startEdit(category)}
                                            >
                                                <Pencil className="h-4 w-4" />
                                            </Button>

                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                {/* Dialog Edit Kategori */}
                <Dialog open={isEditing} onOpenChange={setIsEditing}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Edit Kategori</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="edit-title">Judul Kategori</Label>
                                <Input
                                    defaultValue={currentCategory?.Title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    id="edit-title"
                                    placeholder="Masukkan judul kategori"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="edit-slug">Slug Kategori</Label>
                                <Input
                                    id="edit-slug"
                                    defaultValue={currentCategory?.Slug}
                                    onChange={e => setSlug(e.target.value)}
                                    placeholder="Slug kategori"
                                />
                            </div>

                            <Button className="w-full" onClick={handleEdit}>
                                Simpan Perubahan
                            </Button>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </AdminLayout>
    );
};

export default BookCategoryManagement;