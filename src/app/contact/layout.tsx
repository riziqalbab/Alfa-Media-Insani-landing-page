import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "TENTANG KAMI | DIGITAL MADRASAH",
  description: "Akses di mana pun, kapan pun, Baca buku yuk!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
        <Navbar />
        {children}
        <Footer />
      </>
  );
}
