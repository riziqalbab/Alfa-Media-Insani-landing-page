/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge"

interface BookCardProps {
  imageSrc: string
  title: string
  author: string
  price: number
  discount?: string
}

function BookCard({ imageSrc, title, author, price, discount }: BookCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border bg-white">
      <div className="relative aspect-[3/4] bg-gray-100">
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          
          className="object-cover transition-transform group-hover:scale-105"
        />
        {discount && <Badge className="absolute top-2 right-2 bg-red-500">{discount}</Badge>}
      </div>
      <div className="flex flex-col space-y-1.5 p-4">
        <h3 className="font-semibold line-clamp-1">{title}</h3>
        <p className="text-sm text-gray-500">{author}</p>
        <div className="flex items-center justify-between">
          <p className="font-bold">{price}</p>
          <div className="flex gap-2">
            
          </div>
        </div>
      </div>
    </div>
  )
}


export default BookCard