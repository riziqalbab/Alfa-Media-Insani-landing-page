import GetDetailBook from "@/data/GetDetailBook";
import axios from "axios";
import type { Metadata } from "next";
import { notFound } from "next/navigation";



export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const book = await GetDetailBook((await params).slug);
  
  return {
    title: `${book.title} | Detail Buku` || "Detail Buku",
    description: book.description || "Informasi detail buku.",
    openGraph: {
      title: book.title,
      description: book.description,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/img/${book.image}`,
          alt: book.title,
        },
      ],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}