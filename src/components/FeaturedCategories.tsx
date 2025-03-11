import {BookOpen, BookText, GraduationCap, Library, Users } from "lucide-react"
import { CategoryCard } from "./CategoryCard"
import { GeometricPattern } from "./ui/GeometricPattern"

export default function FeaturedCategories() {
  

  return (
    <section className="py-16 bg-gray-50 w-full flex items-center justify-center relative">
      
      <GeometricPattern variant="dots" className="inset-0 text-primary" />
 
        <div className="container z-30">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Jelajahi Kategori</h2>
            <div className="w-24 h-1 bg-primary mb-6"></div>
            <p className="text-gray-600 max-w-2xl">
              Alfa Media Insani menyediakan berbagai kategori buku untuk kebutuhan pendidikan dan pengembangan diri
              Anda.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <CategoryCard
              icon={<BookOpen className="h-8 w-8 text-primary" />}
              title="Buku MI"
              description="Buku-buku untuk Madrasah Ibtidaiyah dengan kurikulum terbaru"
            />
            <CategoryCard
              icon={<BookText className="h-8 w-8 text-primary" />}
              title="Buku MTs"
              description="Buku-buku untuk Madrasah Tsanawiyah dengan kurikulum terbaru"
            />
            <CategoryCard
              icon={<GraduationCap className="h-8 w-8 text-primary" />}
              title="Buku MA"
              description="Buku-buku untuk Madrasah Aliyah dengan kurikulum terbaru"
            />
            <CategoryCard
              icon={<Library className="h-8 w-8 text-primary" />}
              title="Buku Perguruan Tinggi"
              description="Buku-buku untuk Perguruan Tinggi Agama Islam"
            />
            <CategoryCard
              icon={<BookText className="h-8 w-8 text-primary" />}
              title="Jurnal Ilmiah"
              description="Jurnal-jurnal ilmiah untuk penelitian dan referensi akademik"
            />
            <CategoryCard
              icon={<BookOpen className="h-8 w-8 text-primary" />}
              title="Sastra"
              description="Buku-buku sastra untuk pengembangan literasi dan apresiasi seni"
            />
            <CategoryCard
              icon={<Users className="h-8 w-8 text-primary" />}
              title="Forum Komunitas"
              description="Bergabunglah dengan komunitas pendidikan untuk berbagi pengetahuan"
            />
            <CategoryCard
              icon={<BookText className="h-8 w-8 text-primary" />}
              title="Resensi"
              description="Resensi buku-buku terbaru dari Penerbit Alfa Media Insani"
            />
          </div>
        </div>
      </section>
  )
}

