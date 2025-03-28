import axios from "axios";
import type { Metadata } from "next";

async function GetDetailBook(isbn: string): Promise<DetailBook> {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/book/${isbn}`
  );

  return response.data.data;
}

export async function generateMetadata({
  params,
}: {
  params: { isbn: string };
}): Promise<Metadata> {
  const book = await GetDetailBook(params.isbn);

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