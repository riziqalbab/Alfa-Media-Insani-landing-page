/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Users, Target, Award } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <img
                src="https://digitalmadrasah.id/assets/images/rapat.png"
                width={600}
                height={400}
                alt="Kantor perusahaan kami"
                className="w-full mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Siapa Kami</h2>
              <p className="text-muted-foreground md:text-lg">
                Kami adalah perusahaan yang berdedikasi untuk memberikan solusi inovatif dan berkualitas tinggi kepada
                klien kami. Didirikan pada tahun 2015, kami telah tumbuh menjadi tim yang terdiri dari para profesional
                berbakat dan berpengalaman di bidangnya masing-masing.
              </p>
              <p className="text-muted-foreground md:text-lg">
                Dengan pengalaman lebih dari 8 tahun, kami telah berhasil menyelesaikan ratusan proyek dan membantu
                banyak perusahaan untuk mencapai tujuan bisnis mereka. Kami percaya bahwa kesuksesan klien adalah
                kesuksesan kami juga.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild>
                  <Link href="/contact">
                    Hubungi Kami <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/projects">Lihat Proyek Kami</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Vision */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <Target className="h-4 w-4" />
                <span>Visi Kami</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Visi</h2>
              <p className="text-muted-foreground md:text-lg">
                Menjadi perusahaan terkemuka yang diakui secara global dalam memberikan solusi inovatif dan
                berkelanjutan, serta menjadi mitra tepercaya bagi klien kami dalam mencapai kesuksesan bisnis mereka.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>Menjadi pemimpin industri dalam inovasi dan kualitas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>Menciptakan dampak positif bagi masyarakat dan lingkungan</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>Mengembangkan solusi yang berkelanjutan dan bermanfaat</span>
                </li>
              </ul>
            </div>

            {/* Mission */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <Award className="h-4 w-4" />
                <span>Misi Kami</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Misi</h2>
              <p className="text-muted-foreground md:text-lg">
                Kami berkomitmen untuk memberikan solusi terbaik dengan standar kualitas tertinggi, membangun hubungan
                jangka panjang dengan klien, dan terus berinovasi untuk memenuhi kebutuhan yang terus berkembang di
                pasar global.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>Memberikan layanan dan produk berkualitas tinggi</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>Membangun hubungan jangka panjang dengan klien berdasarkan kepercayaan</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>Mengembangkan tim yang terampil dan berdedikasi</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>Menerapkan praktik bisnis yang etis dan berkelanjutan</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-lg bg-muted px-3 py-1 text-sm font-medium">
                <Users className="h-4 w-4" />
                <span>Tim Kami</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Bertemu dengan Tim Kami</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                Tim kami terdiri dari para profesional berbakat yang berdedikasi untuk memberikan hasil terbaik.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center space-y-4">
              <Image
                src="/placeholder.svg?height=200&width=200"
                width={200}
                height={200}
                alt="Foto CEO"
                className="rounded-full aspect-square object-cover"
              />
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Budi Santoso</h3>
                <p className="text-sm text-muted-foreground">CEO & Founder</p>
              </div>
            </div>
            {/* Team Member 2 */}
            <div className="flex flex-col items-center space-y-4">
              <Image
                src="/placeholder.svg?height=200&width=200"
                width={200}
                height={200}
                alt="Foto CTO"
                className="rounded-full aspect-square object-cover"
              />
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Siti Rahayu</h3>
                <p className="text-sm text-muted-foreground">CTO</p>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="flex flex-col items-center space-y-4">
              <Image
                src="/placeholder.svg?height=200&width=200"
                width={200}
                height={200}
                alt="Foto COO"
                className="rounded-full aspect-square object-cover"
              />
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Ahmad Wijaya</h3>
                <p className="text-sm text-muted-foreground">COO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Siap Bekerja Sama dengan Kami?</h2>
              <p className="mx-auto max-w-[700px] md:text-lg">
                Hubungi kami sekarang untuk mendiskusikan bagaimana kami dapat membantu bisnis Anda.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" size="lg" asChild>
                <Link href="/contact">
                  Hubungi Kami <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

