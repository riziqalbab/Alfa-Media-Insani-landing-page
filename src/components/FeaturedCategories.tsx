import { ArrowRight, Atom } from "lucide-react"
import Link from "next/link"

export default function FeaturedCategories() {
  const categories = [
    {
      name: "Sains",
      icon: <Atom className="h-6 w-6 text-purple-700" />,
      color: "bg-purple-50",
      link: "#",
    },
    {
      name: "Sains",
      icon: <Atom className="h-6 w-6 text-purple-700" />,
      color: "bg-purple-50",
      link: "#",
    },
    {
      name: "Sains",
      icon: <Atom className="h-6 w-6 text-purple-700" />,
      color: "bg-purple-50",
      link: "#",
    },
    {
      name: "Sains",
      icon: <Atom className="h-6 w-6 text-purple-700" />,
      color: "bg-purple-50",
      link: "#",
    },
  ]

  return (
    <section className="w-full py-8 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-medium">KATEGORI UNGGULAN</h2>
          <Link href="#" className="text-sm text-gray-500 flex items-center hover:text-gray-700 transition-colors">
            Semua Kategori <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>

        <div className="flex flex-wrap gap-4 items-center justify-center">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.link}
              className={`${category.color} rounded-lg p-4 flex flex-col w-50 items-center text-center transition-transform hover:scale-105`}
            >
              <div className="mb-3">{category.icon}</div>
              <h3 className="text-sm font-medium mb-1">{category.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

