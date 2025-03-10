/* eslint-disable @next/next/no-img-element */
import BookCard from "@/components/BookCard";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const data = [
  {
    id: 1,
    title: "A Cup of Coffee",
    author: "Dee Lestari",
    price: 77000,
    coverImage: "https://picsum.photos/1920/720",
    slug: "a-cup-of-coffee",
  },
  {
    id: 2,
    title: "Madilog",
    author: "Tan Malaka",
    coverImage:
      "https://cdn.gramedia.com/uploads/picture_meta/2024/1/8/m5b3gwzj4fpaxwq7lk4b9s.jpg",
    slug: "sebuah-seni-untuk-bersikap-bodo-amat",
  },
];

export default function BookCatalog() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 sm:px-6 py-6">
        <div className="flex text-sm mb-6">
          <Link href="/" className="text-blue-600 hover:underline">
            Beranda
          </Link>
          <span className="mx-2">/</span>
          <Link href="/katalog" className="text-blue-600 hover:underline">
            Katalog
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="space-y-6">
            <Separator />

            <div>
              <h3 className="font-medium text-lg mb-2">Filter by:</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">KATEGORI</h4>
                    <Button variant="ghost" size="icon" className="h-5 w-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="rotate-180"
                      >
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                    </Button>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="novel" />
                      <label htmlFor="novel" className="text-sm">
                        Mata Pelajaran
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="novel" />
                      <label htmlFor="novel" className="text-sm">
                        Biografi
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="novel" />
                      <label htmlFor="novel" className="text-sm">
                        Fiqih
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="novel" />
                      <label htmlFor="novel" className="text-sm">
                        Sejarah
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <Button className="w-full">FILTER</Button>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3 flex flex-col w-full items-center justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Book 1 */}

              {data.map((book, index) => (
                <BookCard key={index} book={book} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-8">
              <Button variant="outline" size="sm">
                Previous
              </Button>
              <Button variant="outline" size="sm" className="w-8 h-8 p-0">
                1
              </Button>
              <Button variant="outline" size="sm" className="w-8 h-8 p-0">
                2
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-8 h-8 p-0 bg-primary text-primary-foreground"
              >
                3
              </Button>
              <Button variant="outline" size="sm" className="w-8 h-8 p-0">
                4
              </Button>
              <Button variant="outline" size="sm" className="w-8 h-8 p-0">
                5
              </Button>
              <span>...</span>
              <Button variant="outline" size="sm" className="w-8 h-8 p-0">
                20
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
