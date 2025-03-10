// import About from "@/components/About";
import Benefit from "@/components/Benefit";
import BookCatalog from "@/components/BookCatalog";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimoni from "@/components/Testimoni";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      {/* <About /> */}
      <BookCatalog />
      <Benefit />
      <Services />
      <Testimoni />
      <Footer />
    </>
  );
}
