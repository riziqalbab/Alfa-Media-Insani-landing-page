import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DIGITAL MADRASAH | Platform Baru Edukasi Digital",
  description: "Akses di mana pun, kapan pun, Baca buku yuk!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${montserrat.variable} text-slate-900`}>{children}</body>
    </html>
  );
}