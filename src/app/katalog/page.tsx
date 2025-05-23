"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronRight, Search, SlidersHorizontal } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import BookCard from "@/components/BookCard";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";
import { useContext, useEffect, useState } from "react";

import axios from "axios";
import { FilterContext, FilterContextProvider } from "@/context/FilterContext";

export default function Page() {
  return (
    <FilterContextProvider>
      <KatalogPage />
    </FilterContextProvider>
  );
}

function KatalogPage() {
  const categoryContext = useContext(FilterContext);
  const [books, setBooks] = useState<Array<Books>>();

  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [totalData, setTotalData] = useState(0);

  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL
        }/api/v1/books?page=${page}&limit=20&${categoryContext.category.length > 0 ? `category=${categoryContext.category.join(",")}` : ``}&search=${categoryContext.search}`)
      .then((res) => {
        console.log(res.data);
        setTotalData(res.data.total_data)
        setTotalPage(res.data.total_page)
        setBooks(res.data.data);
      });
  }, [categoryContext, page]);



  return (
    <div className="min-h-screen p-5 bg-gray-50 relative overflow-hidden flex items-center justify-center">
      <div className="container py-8 relative z-10">
        {/* Breadcrumb */}
        <nav className="flex mb-6 text-sm">
          <ol className="flex items-center space-x-2">
            <li>
              <Link
                href="/"
                className="text-gray-500 hover:text-primary transition-colors duration-300"
              >
                Beranda
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <span className="font-medium text-primary">Katalog</span>
            </li>
          </ol>
        </nav>

        <RevealOnScroll>
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Katalog Buku
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Jelajahi koleksi lengkap buku dari Penerbit Alfa Media Insani
              untuk kebutuhan pendidikan Anda. Temukan buku-buku berkualitas
              untuk semua jenjang pendidikan.
            </p>
          </div>
        </RevealOnScroll>

        {/* Mobile Filter Button */}
        <div className="md:hidden mb-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="w-full gap-2">
                <SlidersHorizontal className="h-4 w-4" />
                Filter & Pencarian
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[350px]">
              <div className="py-4">
                <h2 className="text-lg font-semibold mb-4">
                  Filter & Pencarian
                </h2>
                <MobileFilterPanel />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filter Panel - Desktop */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border p-4 sticky top-24">
              <h2 className="text-lg font-semibold mb-4">Filter & Pencarian</h2>
              <FilterPanel />
            </div>
          </div>

          <div className="flex-1">
            {/* Sorting and View Options */}


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
              {books?.map((book, index) => (
                <RevealOnScroll key={index} delay={50 * index} threshold={0.1}>
                  <Link href={`/buku/${book.isbn}-${book.title}`}>
                    <div className="relative">
                      <BookCard
                        imageSrc={book.thumbnail}
                        title={book.title}
                        author={book.author}
                        price={book.price}
                        slug={book.slug}
                      />
                    </div>
                  </Link>
                </RevealOnScroll>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex justify-center mt-12">
                <div className="flex items-center justify-between mt-4">
                  <div className="text-sm text-gray-500">
                    Menampilkan {books?.length} dari {totalData} buku
                  </div>
                  <div className="flex items-center gap-2">
                    {page > 1 && (
                      <Button variant="outline" size="sm" onClick={() => setPage(page - 1)}>
                        Sebelumnya
                      </Button>
                    )}
                    <Button variant="outline" size="sm" className="bg-primary/10">
                      {page}
                    </Button>
                    {page < totalPage && (
                      <Button variant="outline" size="sm" onClick={() => setPage(page + 1)}>
                        Selanjutnya
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterPanel() {
  const filterContext = useContext(FilterContext);

  const { setSearchValue, changeCategory } = filterContext;

  const [categoryData, setCategoryData] = useState<Array<Category>>([]);
  const [selectedCategories, setSelectedCategories] = useState<Array<string>>(
    []
  );
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/category`, {

      })
      .then((res) => {
        setCategoryData(res.data.data);
      });
  }, []);

  const handleCheckboxChange = (slug: string) => {
    setSelectedCategories((prev) =>
      prev.includes(slug)
        ? prev.filter((item) => item !== slug)
        : [...prev, slug]
    );
  };

  const handleApplyFilter = () => {
    changeCategory(selectedCategories);
    setSearchValue(search);
  };


  return (
    <div className="space-y-6">
      {/* Pencarian */}
      <div>
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input onChange={(e) => setSearch(e.target.value)} placeholder="Cari buku..." className="pl-10" />
        </div>
      </div>

      {/* Kategori */}
      <Accordion type="single" collapsible defaultValue="kategori">
        <AccordionItem value="kategori" className="border-b">
          <AccordionTrigger className="text-base font-medium">
            Kategori
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {categoryData.map((category, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category.Slug.toLowerCase().replace(
                      /\s+/g,
                      "-"
                    )}`}
                    onCheckedChange={() => handleCheckboxChange(category.Slug)}
                  />
                  <label
                    htmlFor={`category-${category.Slug.toLowerCase().replace(
                      /\s+/g,
                      "-"
                    )}`}
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {category.Title}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button className="w-full" onClick={handleApplyFilter}>
        Terapkan Filter
      </Button>
    </div>
  );
}


function MobileFilterPanel() {
  const filterContext = useContext(FilterContext);

  const { setSearchValue, changeCategory } = filterContext;

  const [categoryData, setCategoryData] = useState<Array<Category>>([]);
  const [selectedCategories, setSelectedCategories] = useState<Array<string>>(
    []
  );
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/category`, {})
      .then((res) => {
        setCategoryData(res.data.data);
      });
  }, []);

  const handleCheckboxChange = (slug: string) => {
    setSelectedCategories((prev) =>
      prev.includes(slug)
        ? prev.filter((item) => item !== slug)
        : [...prev, slug]
    );
  };

  const handleApplyFilter = () => {
    changeCategory(selectedCategories);
    setSearchValue(search);
  };

  return (
    <div className="space-y-6 p-10">
      {/* Pencarian */}
      <div>
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari buku..."
            className="pl-10"
          />
        </div>
      </div>

      {/* Kategori */}
      <Accordion type="single" collapsible defaultValue="kategori">
        <AccordionItem value="kategori" className="border-b">
          <AccordionTrigger className="text-base font-medium">
            Kategori
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {categoryData.map((category, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Checkbox
                    id={`mobile-category-${category.Slug.toLowerCase().replace(
                      /\s+/g,
                      "-"
                    )}`}
                    onCheckedChange={() => handleCheckboxChange(category.Slug)}
                  />
                  <label
                    htmlFor={`mobile-category-${category.Slug.toLowerCase().replace(
                      /\s+/g,
                      "-"
                    )}`}
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {category.Title}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button className="w-full" onClick={handleApplyFilter}>
        Terapkan Filter
      </Button>
    </div>
  );
}


