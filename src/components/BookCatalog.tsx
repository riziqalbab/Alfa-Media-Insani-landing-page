import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import BookCard from "./BookCard";



const data = [
  {
    id: 1,
    title: "A Cup of Coffee",
    author: "Dee Lestari",
    price: "77000",
    coverImage: "https://picsum.photos/1920/720",
    slug: "a-cup-of-coffee",
  },
  {
    id: 2,
    title: "Sebuah Seni Untuk Bersikap Bodo Amat",
    author: "Mark Manson",
    price: "53500",
    coverImage: "https://picsum.photos/1920/720",
    slug: "sebuah-seni-untuk-bersikap-bodo-amat",
  },
  {
    id: 3,
    title: "Winter",
    author: "Marissa Meyer",
    price: "97200",
    coverImage: "https://picsum.photos/1920/720",
    slug: "winter",
  },
  {
    id: 4,
    title: "The Maze Runner #3: The Scorch Trials - New",
    author: "James Dashner",
    price: "51750",
    coverImage: "https://picsum.photos/1920/720",
    slug: "the-maze-runner-3",
  },
  {
    id: 5,
    title: "Fantastic Beasts and Where to Find Them",
    author: "J.K. Rowling",
    price: "86150",
    coverImage: "https://picsum.photos/1920/720",
    slug: "fantastic-beasts",
  },
  {
    id: 6,
    title: "One Piece 92",
    author: "Eiichiro Oda",
    price: "77000",
    coverImage: "https://picsum.photos/1920/720",
    slug: "one-piece-92",
  },
];

export default function BookCatalog() {
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
          {data.map((book) => (
            <BookCard key={book.id} imageSrc={book.coverImage} author={book.author} price={book.price} title={book.title}/>
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
          {data.map((book) => (
            <BookCard key={book.id} imageSrc={book.coverImage} author={book.author} price={book.price} title={book.title}/>
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
