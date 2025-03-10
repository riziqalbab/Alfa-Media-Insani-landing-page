// import About from "@/components/About";
import BookCatalog from "@/components/BookCatalog";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      {/* <About /> */}
      <BookCatalog/>
    </>
  );
}
