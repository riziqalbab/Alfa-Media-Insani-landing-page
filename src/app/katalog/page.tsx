import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronRight, Search, SlidersHorizontal } from "lucide-react"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import BookCard from "@/components/BookCard"
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll"

export const metadata: Metadata = {
  title: "Katalog Buku | Alfa Media Insani",
  description: "Jelajahi koleksi lengkap buku dari Penerbit Alfa Media Insani untuk kebutuhan pendidikan Anda.",
}

export default function KatalogPage() {
  // Data dummy untuk buku-buku
  const books = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    title: `Buku ${i + 1}`,
    author: i % 3 === 0 ? "M Alaika Salamulloh" : i % 3 === 1 ? "Yuslim Fauzi" : "Ismail",
    price: `Rp ${(75 + i * 5).toLocaleString("id-ID")}`,
    imageSrc: "https://placehold.co/600x400",
    category: i % 4 === 0 ? "BUKU MI" : i % 4 === 1 ? "BUKU MTs" : i % 4 === 2 ? "BUKU MA" : "BUKU PTAI",
    isNew: i % 8 === 0,
    isBestSeller: i % 9 === 0,
  }))

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden flex items-center justify-center">

      <div className="container py-8 relative z-10">
        {/* Breadcrumb */}
        <nav className="flex mb-6 text-sm">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="text-gray-500 hover:text-primary transition-colors duration-300">
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Katalog Buku</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Jelajahi koleksi lengkap buku dari Penerbit Alfa Media Insani untuk kebutuhan pendidikan Anda. Temukan
              buku-buku berkualitas untuk semua jenjang pendidikan.
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
                <h2 className="text-lg font-semibold mb-4">Filter & Pencarian</h2>
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

          {/* Main Content */}
          <div className="flex-1">
            {/* Sorting and View Options */}
            <div className="bg-white p-4 rounded-lg shadow-sm mb-6 border flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <span className="text-sm text-gray-500">Urutkan:</span>
                <Select defaultValue="terbaru">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Urutkan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="terbaru">Terbaru</SelectItem>
                    <SelectItem value="terlaris">Terlaris</SelectItem>
                    <SelectItem value="harga-terendah">Harga: Terendah</SelectItem>
                    <SelectItem value="harga-tertinggi">Harga: Tertinggi</SelectItem>
                    <SelectItem value="abjad-az">Judul: A-Z</SelectItem>
                    <SelectItem value="abjad-za">Judul: Z-A</SelectItem>
                  </SelectContent>
                </Select>
              </div>

            </div>

            

            {/* Grid Buku */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
              {books.map((book, index) => (
                <RevealOnScroll key={book.id} delay={50 * index} threshold={0.1}>
                  <Link href={`/buku/${book.id}-${book.title.toLowerCase().replace(/\s+/g, "-")}`}>
                    <div className="relative">
                      
                      <BookCard
                        imageSrc={book.imageSrc}
                        title={book.title}
                        author={book.author}
                        price={book.price}
                        
                      />
                    </div>
                  </Link>
                </RevealOnScroll>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">8</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FilterPanel() {
  return (
    <div className="space-y-6">
      {/* Pencarian */}
      <div>
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input placeholder="Cari buku..." className="pl-10" />
        </div>
      </div>

      {/* Kategori */}
      <Accordion type="single" collapsible defaultValue="kategori">
        <AccordionItem value="kategori" className="border-b">
          <AccordionTrigger className="text-base font-medium">Kategori</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {["Buku MI", "Buku MTs", "Buku MA", "Buku PTAI", "Jurnal Ilmiah", "Sastra"].map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox id={`category-${category.toLowerCase().replace(/\s+/g, "-")}`} />
                  <label
                    htmlFor={`category-${category.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Rentang Harga */}

      <Button className="w-full">Terapkan Filter</Button>
    </div>
  )
}

function MobileFilterPanel() {
  return (
    <div className="space-y-6 p-10">
      {/* Pencarian */}
      <div>
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input placeholder="Cari buku..." className="pl-10" />
        </div>
      </div>

      {/* Kategori */}
      <Accordion type="single" collapsible defaultValue="kategori">
        <AccordionItem value="kategori" className="border-b">
          <AccordionTrigger className="text-base font-medium">Kategori</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {["Buku MI", "Buku MTs", "Buku MA", "Buku PTAI", "Jurnal Ilmiah", "Sastra"].map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox id={`mobile-category-${category.toLowerCase().replace(/\s+/g, "-")}`} />
                  <label
                    htmlFor={`mobile-category-${category.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Rentang Harga */}
      <Accordion type="single" collapsible defaultValue="harga">
        <AccordionItem value="harga" className="border-b">
          <AccordionTrigger className="text-base font-medium">Rentang Harga</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider defaultValue={[50000, 150000]} min={0} max={300000} step={10000} />
              <div className="flex items-center justify-between">
                <div className="text-sm">Rp 50.000</div>
                <div className="text-sm">Rp 150.000</div>
              </div>
              <div className="flex gap-2">
                <Input type="number" placeholder="Min" className="w-full" defaultValue={50000} />
                <Input type="number" placeholder="Max" className="w-full" defaultValue={150000} />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Penulis */}
      <Accordion type="single" collapsible>
        <AccordionItem value="penulis" className="border-b">
          <AccordionTrigger className="text-base font-medium">Penulis</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {["M Alaika Salamulloh", "Yuslim Fauzi", "Ismail", "Fatah Yasin", "Tim Penulis"].map((author) => (
                <div key={author} className="flex items-center space-x-2">
                  <Checkbox id={`mobile-author-${author.toLowerCase().replace(/\s+/g, "-")}`} />
                  <label
                    htmlFor={`mobile-author-${author.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {author}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Tahun Terbit */}
      <Accordion type="single" collapsible>
        <AccordionItem value="tahun" className="border-b">
          <AccordionTrigger className="text-base font-medium">Tahun Terbit</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {["2023", "2022", "2021", "2020", "2019"].map((year) => (
                <div key={year} className="flex items-center space-x-2">
                  <Checkbox id={`mobile-year-${year}`} />
                  <label
                    htmlFor={`mobile-year-${year}`}
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {year}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Status */}
      <Accordion type="single" collapsible>
        <AccordionItem value="status" className="border-b">
          <AccordionTrigger className="text-base font-medium">Status</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {["Promo", "Baru", "Terlaris", "Pre-Order"].map((status) => (
                <div key={status} className="flex items-center space-x-2">
                  <Checkbox id={`mobile-status-${status.toLowerCase().replace(/\s+/g, "-")}`} />
                  <label
                    htmlFor={`mobile-status-${status.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {status}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button className="w-full">Terapkan Filter</Button>
    </div>
  )
}

