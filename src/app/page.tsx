import { Suspense } from 'react';
import BookCatalog from "@/components/BookCatalog";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Testimoni from "@/components/Testimoni";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <BookCatalog />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Testimoni />
      </Suspense>
      <Footer />
    </>
  );
}