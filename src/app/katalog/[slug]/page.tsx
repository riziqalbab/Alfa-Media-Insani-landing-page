/* eslint-disable @next/next/no-img-element */

import BookCard from "@/components/BookCard";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import GetDetailBook from "@/data/GetDetailBook";
import GetRecomendationBooks from "@/data/GetRecomendedBooks";
import axios from "axios";
import { Car, Star } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReviewComment from "./review-comment";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  let book: DetailBook | null = null;

  const response = await GetDetailBook(slug, { is_count: true });

  console.log(response);


  if (!response) notFound();
  book = response;
  const recommendation_books = await GetRecomendationBooks();

  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl">
      <div className="flex text-sm mb-6">
        <Link href="/" className="text-blue-600 hover:underline">
          Beranda
        </Link>
        <span className="mx-2">/</span>
        <Link href="/katalog" className="text-blue-600 hover:underline">
          Katalog
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-600">{book?.title}</span>
      </div>

      {/* Main Book Detail Card */}
      <Card className="mb-8 bg-sky-50 relative overflow-hidden">
        <CardContent className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Book Cover */}
            <div className="flex-shrink-0 w-full md:w-64">
              <div className="bg-white p-2 rounded-md shadow-md">
                <img
                  src={
                    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/img/${book?.image}` ||
                    "https://placehold.co/600x400"
                  }
                  alt={book?.title || "Cover Buku"}
                  width={250}
                  height={350}
                  className="w-full h-auto rounded"
                />
              </div>
            </div>


            {/* Book Info */}
            <div className="flex-1">
              <div className="inline-block px-3 py-1 text-sm font-medium text-red-600 bg-white rounded-full border border-red-500 mb-4">
                {book?.category?.Title}
              </div>
              <div className="flex">
                {[...Array(5)].map((_, i) => {
                  const filled = i + 1 <= Math.floor(book?.rating);
                  const half = i + 1 - book?.rating === 0.5;
                  return (
                    <div key={i} className="relative w-5 h-5">
                      <Star className="w-5 h-5 text-gray-300" />
                      <div
                        className={`absolute top-0 left-0 h-full overflow-hidden ${half ? "w-1/2" : filled ? "w-full" : "w-0"
                          }`}
                      >
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      </div>
                    </div>
                  );
                })}
              </div>

              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                {book?.title?.toUpperCase()}
              </h1>
              {/* Synopsis */}
              <div className="prose max-w-none mb-8">
                <p>{book?.description}</p>
              </div>

              {/* Book Details */}
              <div>
                <h2 className="text-lg font-bold mb-4 text-gray-800">
                  DETAIL BUKU
                </h2>
                <Separator className="mb-4" />

                <dl className="grid grid-cols-1 md:grid-cols-3 gap-y-4 text-sm">
                  <dt className="font-semibold text-gray-700 col-span-1">
                    Penerbit
                  </dt>
                  <dd className="text-gray-800 col-span-2">{book?.publisher}</dd>

                  <dt className="font-semibold text-gray-700 col-span-1">
                    ISBN
                  </dt>
                  <dd className="text-gray-800 col-span-2">{book?.isbn}</dd>

                  <dt className="font-semibold text-gray-700 col-span-1">
                    Harga
                  </dt>
                  <dd className="text-gray-800 col-span-2">{book?.price}</dd>
                  <dt className="font-semibold text-gray-700 col-span-1">
                    Tahun Terbit
                  </dt>
                  <dd className="text-gray-800 col-span-2">
                    {book?.publish_year}
                  </dd>
                  <dt className="font-semibold text-gray-700 col-span-1">
                    Jumlah Halaman
                  </dt>
                  <dd className="text-gray-800 col-span-2">
                    {book?.page} Halaman
                  </dd>
                  <dt className="font-semibold text-gray-700 col-span-1">
                    Berat
                  </dt>
                  <dd className="text-gray-800 col-span-2">
                    {book?.weight / 1000} Kg
                  </dd>

                  <dt className="font-semibold text-gray-700 col-span-1">
                    Penulis
                  </dt>
                  <dd className="text-gray-800 col-span-2">{book?.author}</dd>

                  <dt className="font-semibold text-gray-700 col-span-1">
                    Jumlah Dilihat
                  </dt>
                  <dd className="text-gray-800 col-span-2">{book?.count || 0} kali</dd>
                </dl>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="w-full">
        <ReviewComment id_book={book.id_book} />
      </div>
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Rekomendasi buku lainnya
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-6">
        {recommendation_books.map((book) => (
          <BookCard
            key={book.id_book}
            imageSrc={book.image}
            author={book.author}
            price={book.price}
            title={book.title}
            slug={book.slug}
          />
        ))}
      </div>
    </div>
  );
}