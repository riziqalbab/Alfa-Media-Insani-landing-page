"use client"

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import AdminLayout from "@/layout/admin-layout";
import { useAuth } from "@/context/AuthContext";
import axios from "axios";
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogCancel,
    AlertDialogAction
} from "@/components/ui/alert-dialog";

export default function AdminReviewModeration() {
    const auth = useAuth()

    const [reviews, setReviews] = useState<Array<ReviewType>>([]);
    const [selectedReview, setSelectedReview] = useState<number | null>(null);
    const [actionType, setActionType] = useState<"approve" | "reject" | null>(null);
    const [open, setOpen] = useState(false);

    const fetchReviews = async () => {
        if (auth.accessToken) {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/reviews`, {
                headers: {
                    Authorization: `Bearer ${auth.accessToken}`,
                }
            });
            setReviews(response.data.data);
        }
    };

    const handleConfirmAction = async () => {
        if (!selectedReview || !auth.accessToken || !actionType) return;

        const url =
            actionType === "approve"
                ? `${process.env.NEXT_PUBLIC_API_URL}/api/v1/review/accept/${selectedReview}`
                : `${process.env.NEXT_PUBLIC_API_URL}/api/v1/review/reject/${selectedReview}`;

        const method = actionType === "approve" ? "put" : "put";
        const data = actionType === "approve" ? { status: "approved" } : {};

        await axios[method](url, data, {
            headers: {
                Authorization: `Bearer ${auth.accessToken}`,
            }
        });

        setOpen(false);
        setSelectedReview(null);
        setActionType(null);
        fetchReviews();
    };

    useEffect(() => {
        fetchReviews();
    }, [auth.accessToken]);

    return (
        <AdminLayout>
            <div className="p-6 space-y-4">
                <h2 className="text-2xl font-bold">Moderasi Komentar</h2>
                {reviews.length === 0 ? (
                    <p className="text-gray-500">Ga ada komentar pending, admin bisa tidur.</p>
                ) : (
                    reviews.map(review => (
                        <Card key={review.IDReviewBook} className="border shadow-md">
                            <CardContent className="p-4">
                                <div className="flex justify-between">
                                    <div>
                                        <p className="font-semibold">{review.full_name}</p>
                                        <p className="text-sm text-gray-500">{review.email}</p>
                                    </div>
                                    <div className="flex gap-1">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <Star
                                                key={i}
                                                size={18}
                                                className={i < review.rating ? "text-yellow-400" : "text-gray-300"}
                                                fill={i < review.rating ? "#facc15" : "none"}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <p className="mt-2">{review.review}</p>
                                <div className="mt-4 flex gap-2">
                                    <Button
                                        variant="default"
                                        onClick={() => {
                                            setSelectedReview(review.IDReviewBook);
                                            setActionType("approve");
                                            setOpen(true);
                                        }}
                                    >
                                        Setujui
                                    </Button>
                                    <Button
                                        variant="destructive"
                                        onClick={() => {
                                            setSelectedReview(review.IDReviewBook);
                                            setActionType("reject");
                                            setOpen(true);
                                        }}
                                    >
                                        Hapus
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))
                )}
            </div>

            <AlertDialog open={open} onOpenChange={setOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Yakin nih?</AlertDialogTitle>
                        <AlertDialogDescription>
                            {actionType === "approve"
                                ? "Review ini bakal disetujui dan muncul di publik."
                                : "Review ini bakal dihapus. Gak bisa dibalikin."}
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Batal</AlertDialogCancel>
                        <AlertDialogAction onClick={handleConfirmAction}>Lanjut</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </AdminLayout>
    );
}
