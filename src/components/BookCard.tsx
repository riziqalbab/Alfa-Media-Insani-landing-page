/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

interface BookCardProps {
  imageSrc: string;
  title: string;
  author: string;
  price: string;
  slug: string;
}

function BookCard({ imageSrc, title, author, price, slug }: BookCardProps) {
  return (
    <Link
      href={`/katalog/${slug}`}
      className="group relative flex flex-col overflow-hidden rounded-lg border bg-white"
    >
      <div className="relative aspect-[3/4] bg-gray-100">
        <img
          src={
            `${process.env.NEXT_PUBLIC_API_URL}/api/v1/img/${imageSrc}` ||
            "https://placehold.co/600x400"
          }
          alt={title}
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col space-y-1.5 p-4">
        <h3 className="font-semibold line-clamp-1">{title}</h3>
        <p className="text-sm text-gray-500">{author}</p>
      </div>
    </Link>
  );
}

export default BookCard;
