import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import GetCompany from "@/data/GetCompany";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});


export async function generateMetadata(): Promise<Metadata> {
  const company = await GetCompany();

  return {
    title: company.Name || "Alfa Media Insani",
    description: company.About || "Akses di mana pun, kapan pun, Baca buku yuk!",
    icons: {
      icon: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/img/${company.Logo}`, 
    },
  };
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${montserrat.variable} text-slate-900 overflow-x-hidden`}>{children}</body>
    </html>
  );
}