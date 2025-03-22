import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import BookCard from "./BookCard";
import axios from "axios";



interface Books{
  id_book: number
  title: string
  author: string
  image: string
  isbn: string
  price: string
}

async function GetLatestBooks(): Promise<Books[]> {
  
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/books/latest`)

  return response.data.data
}

async function GetRecomendationBooks(): Promise<Books[]>{
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/books/recommendations`)

  return response.data.data
}



export default async function BookCatalog() {


  const latest_book = await GetLatestBooks()
  const recommendation_books = await GetRecomendationBooks()
  console.log(recommendation_books);
  


  return (
    <div className="container mx-auto px-4 py-8">
      {/* Popular Section */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Temukan Buku Pilihan</h1>
        <p>Koleksi buku terbaru dan terbaik dari Penerbit Alfa Media Insani untuk kebutuhan pendidikan Anda.</p>
      </div>
      <div className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-medium text-gray-700 border-b-2 border-emerald-500 pb-1 inline-block">
            REKOMENDASI BUKU
          </h2>
          <Link
            href="/katalog"
            className="text-sm text-emerald-500 hover:text-emerald-600 flex items-center"
          >
            LIHAT SEMUA <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {recommendation_books.map((book) => (
            <BookCard key={book.id_book} imageSrc={book.image} author={book.author} price={book.price} title={book.title}/>
          ))}
        </div>
      </div>

      {/* Pre Order Section */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-medium text-gray-700 border-b-2 border-emerald-500 pb-1 inline-block">
            BUKU TERBARU
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {latest_book.map((book) => (
            <BookCard key={book.id_book} imageSrc={book.image} author={book.author} price={book.price} title={book.title}/>
          ))}
        </div>
      </div>

      {/* Show All Books Button */}
      <div className="flex justify-center">
        <Button
          asChild
          className="bg-emerald-500 hover:bg-emerald-600 text-white px-8"
        >
          <Link href="/katalog">LIHAT KATALOG BUKU</Link>
        </Button>
      </div>
    </div>
  );
}
