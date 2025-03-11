import type { ReactNode } from "react"
import Link from "next/link"

interface CategoryCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function CategoryCard({ icon, title, description }: CategoryCardProps) {
  return (
    <Link href={`/katalog`}>
      <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg border hover:shadow-md transition-shadow">
        <div className="mb-4">{icon}</div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </Link>
  )
}

