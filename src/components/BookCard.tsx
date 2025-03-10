/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

interface Book {
  id: number
  title: string
  author: string
  coverImage: string
  slug: string
}

interface BookCardProps {
  book: Book
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <Link href={`/books/${book.slug}`} className="group">
      <div className="flex flex-col h-full">
        <div className="relative aspect-[3/4] mb-2 overflow-hidden rounded-md">
          <img
            src={book.coverImage || "/placeholder.svg"}
            alt={book.title}
            className="object-cover transition-transform group-hover:scale-105 w-full h-full"
          />
        </div>
        <h3 className="font-medium text-sm line-clamp-2">{book.title}</h3>
        <p className="text-xs text-gray-500 mb-1">{book.author}</p>
      </div>
    </Link>
  )
}

