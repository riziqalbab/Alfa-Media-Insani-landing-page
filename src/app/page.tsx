// import About from "@/components/About";
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
      <BookCatalog />
      <Testimoni />
      <Footer />
    </>
  );
}
