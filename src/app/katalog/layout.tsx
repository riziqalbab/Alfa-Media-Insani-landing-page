import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import GetCompany from "@/data/GetCompany";
import type { Metadata } from "next";


export async function generateMetadata(): Promise<Metadata> {
  const company = await GetCompany();

  return {
    title: `Katalog Buku | ${company.Name}` || "Alfa Media Insani",
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
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
