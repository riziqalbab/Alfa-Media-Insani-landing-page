import Image from "next/image"

interface TestimonialCardProps {
  content: string
  name: string
  role: string
  imageSrc: string
}

export function TestimonialCard({ content, name, role, imageSrc }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg border shadow-sm">
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <svg className="h-6 w-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <p className="text-gray-600 flex-grow mb-6">{content}</p>
        <div className="flex items-center mt-auto">
          <div className="mr-4">
            <Image src={imageSrc || "/placeholder.svg"} alt={name} width={50} height={50} className="rounded-full" />
          </div>
          <div>
            <h4 className="font-semibold">{name}</h4>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

