import { Search, Filter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function BookCatalog() {
  return (
    <div className="min-h-screen bg-background">
      

      <div className="container px-4 sm:px-6 py-6">
        

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-lg mb-4">Category</h3>
              <div className="space-y-2">
                <Link href="#" className="block text-primary font-medium">
                  Fiction
                </Link>
                <Link href="#" className="block hover:text-primary">
                  Non-Fiction
                </Link>
                <Link href="#" className="block hover:text-primary">
                  Children's Books
                </Link>
                <Link href="#" className="block hover:text-primary">
                  Science & Technology
                </Link>
                <Link href="#" className="block hover:text-primary">
                  Business & Economics
                </Link>
                <Link href="#" className="block hover:text-primary">
                  Self-Help
                </Link>
                <Link href="#" className="block hover:text-primary">
                  Biography
                </Link>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-medium text-lg mb-2">Filter by:</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Genre</h4>
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
                        Novel
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="mystery" />
                      <label htmlFor="mystery" className="text-sm">
                        Mystery
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="scifi" />
                      <label htmlFor="scifi" className="text-sm">
                        Sci-Fi
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="fantasy" checked />
                      <label htmlFor="fantasy" className="text-sm">
                        Fantasy
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="romance" />
                      <label htmlFor="romance" className="text-sm">
                        Romance
                      </label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Author</h4>
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
                      >
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Price</h4>
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
                      >
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <Button className="w-full">Apply</Button>
              <Button variant="outline" size="icon">
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
                >
                  <path d="M3 6h18" />
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                </svg>
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <h1 className="text-3xl font-bold">Fiction</h1>
              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Sort by:</span>
                  <Select defaultValue="popular">
                    <SelectTrigger className="w-[160px]">
                      <SelectValue placeholder="Most Popular" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popular">Most Popular</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button variant="ghost" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="outline" className="rounded-md flex items-center gap-1">
                Fantasy
                <Button variant="ghost" size="icon" className="h-4 w-4 ml-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </Button>
              </Badge>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Book 1 */}
              <div className="group border rounded-lg overflow-hidden">
                <div className="relative">
                  <div className="absolute top-2 left-2 z-10">
                    <Badge className="bg-blue-600">NEW</Badge>
                  </div>
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="The Dragon's Path"
                    width={300}
                    height={400}
                    className="w-full h-[300px] object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">The Dragons Path</h3>
                  <p className="text-sm text-muted-foreground">Marcus Aurelius</p>
                  <div className="mt-4 flex justify-between items-center">
                    <div className="font-bold">$24.99</div>
                  </div>
                </div>
              </div>

              {/* Book 2 */}
              <div className="group border rounded-lg overflow-hidden">
                <div className="relative">
                  <div className="absolute top-2 left-2 z-10">
                    <Badge className="bg-purple-600">BEST SELLER</Badge>
                  </div>
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="Midnight Chronicles"
                    width={300}
                    height={400}
                    className="w-full h-[300px] object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">Midnight Chronicles</h3>
                  <p className="text-sm text-muted-foreground">Sarah J. Maas</p>
                  <div className="mt-4 flex justify-between items-center">
                    <div className="font-bold">$19.99</div>
                  </div>
                </div>
              </div>

              {/* Book 3 */}
              <div className="group border rounded-lg overflow-hidden">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="The Shadow King"
                    width={300}
                    height={400}
                    className="w-full h-[300px] object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">The Shadow King</h3>
                  <p className="text-sm text-muted-foreground">Brandon Sanderson</p>
                  <div className="mt-4 flex justify-between items-center">
                    <div className="font-bold">$22.99</div>
                  </div>
                </div>
              </div>

              {/* Book 4 */}
              <div className="group border rounded-lg overflow-hidden">
                <div className="relative">
                  <div className="absolute top-2 left-2 z-10">
                    <Badge className="bg-red-600">HOT PROMO</Badge>
                  </div>
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="Realm of Shadows"
                    width={300}
                    height={400}
                    className="w-full h-[300px] object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">Realm of Shadows</h3>
                  <p className="text-sm text-muted-foreground">J.K. Rowling</p>
                  <div className="mt-4 flex justify-between items-center">
                    <div className="font-bold">
                      $18.99 <span className="text-sm line-through text-muted-foreground ml-1">$24.99</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Book 5 */}
              <div className="group border rounded-lg overflow-hidden">
                <div className="relative">
                  <div className="absolute top-2 left-2 z-10">
                    <Badge className="bg-blue-600">NEW</Badge>
                  </div>
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="The Lost City"
                    width={300}
                    height={400}
                    className="w-full h-[300px] object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">The Lost City</h3>
                  <p className="text-sm text-muted-foreground">Neil Gaiman</p>
                  <div className="mt-4 flex justify-between items-center">
                    <div className="font-bold">$21.99</div>
                  </div>
                </div>
              </div>

              {/* Book 6 */}
              <div className="group border rounded-lg overflow-hidden">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="Whispers in the Dark"
                    width={300}
                    height={400}
                    className="w-full h-[300px] object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">Whispers in the Dark</h3>
                  <p className="text-sm text-muted-foreground">George R.R. Martin</p>
                  <div className="mt-4 flex justify-between items-center">
                    <div className="font-bold">$23.99</div>
                  </div>
                </div>
              </div>
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
              <Button variant="outline" size="sm" className="w-8 h-8 p-0 bg-primary text-primary-foreground">
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
  )
}

