"use client"

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { z } from "zod";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Zod schema for validation
const reviewSchema = z.object({
    full_name: z.string().min(1, "Nama lengkap harus diisi"),
    email: z.string().email("Email tidak valid"),
    review: z.string().min(1, "Komentar harus diisi"),
    rating: z.number().min(1, "Rating harus diisi").max(5),
});

export default function ReviewComment({ id_book }: { id_book: number }) {
    const [rating, setRating] = useState(0);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [review, setReview] = useState("");
    const [reviewData, setReviewData] = useState<Array<ReviewType>>([]);

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/reviews/${id_book}`).then((res) => {
            setReviewData(res.data.data);
            console.log(res.data.data);
            
        });
    }, [id_book]);

    useEffect(()=>{
        console.log(reviewData);
        
    }, [reviewData])

    const handleSubmit = async () => {
        try {
            // Validate form data
            reviewSchema.parse({
                full_name: fullName,
                email,
                review,
                rating,
            });

            // Submit review
            await toast.promise(
                axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/review`, {
                    id_book,
                    full_name: fullName,
                    email,
                    review,
                    rating,
                }),
                {
                    pending: "Mengirim komentar...",
                    success: "Komentar akan tampil jika admin menyetujui.",
                    error: "Gagal mengirim komentar.",
                }
            );

            // Reset form
            setFullName("");
            setEmail("");
            setReview("");
            setRating(0);

            // Refresh comments
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/reviews/${id_book}`);
            setReviewData(res.data.data);
        } catch (error: any) {
            if (error instanceof z.ZodError) {
                // Show validation errors
                error.errors.forEach((err) => toast.error(err.message));
            } else {
                toast.error("Terjadi kesalahan saat mengirim komentar.");
            }
        }
    };

    return (
        <div className="w-full mx-auto py-10 px-4">
            <ToastContainer />
            {reviewData.map((item, index) => (
                <Card key={index} className="mb-6">
                    <CardContent className="p-6 flex gap-4">
                        <div className="rounded-full bg-gray-200 w-12 h-12" />
                        <div>
                            <div className="font-semibold">{item.full_name}</div>
                            <div className="text-sm">{item.review}</div>
                            <div className="flex mt-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-4 h-4 ${i < item.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}

            <h3 className="text-lg font-semibold mb-2">Berikan Komentar</h3>

            <div className="mb-4">
                <label className="text-sm">Rating</label>
                <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            onClick={() => setRating(i + 1)}
                            className={`w-5 h-5 cursor-pointer ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                        />
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <Input
                    placeholder="Isi Nama Lengkap"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
                <Input
                    placeholder="Isi email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <Textarea
                    placeholder="Isi komentar"
                    className="min-h-[120px]"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                />
            </div>

            <Button onClick={handleSubmit}>Kirim Komentar</Button>
        </div>
    );
}