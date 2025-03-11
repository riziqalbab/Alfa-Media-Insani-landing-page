/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowRight, CheckCircle, Target, Award } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
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
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Siapa Kami
              </h2>
              <p className="text-muted-foreground md:text-lg">
                Alfa Media Insani adalah penerbitan buku ajar, buku referensi,
                buku monograf, buku umum, jurnal penelitian ilmiah hingga
                proceeding dalam bentuk cetak maupun E-Book. Dalam meningkatkan
                mutu produksi, Penerbit Alfa Media Insani membangun kerjasama
                intensif dan komunikatif guna pembangunan sumberdaya manusia
                yang berkualitas, kompeten, dan profesional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild>
                  <Link href="/contact">
                    Hubungi Kami <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted flex items-center justify-center">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Vision */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <Target className="h-4 w-4" />
                <span>Visi Kami</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Visi
              </h2>
              <p className="text-muted-foreground md:text-lg">
                Menghadirkan kemudahan proses belajar mengajar di madrasah
                dengan memanfaatkan teknologi informasi terkini untuk mencetak
                generasi terbaik demi menyongsong Indonesia emas
              </p>
            </div>

            {/* Mission */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <Award className="h-4 w-4" />
                <span>Misi Kami</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Misi
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>
                    Menjadi pusat kegiatan literasi, evaluasi, dan inovasi
                    secara digital Menjadi pusat informasi dan konsultasi
                    kegiatan pendidikan di lingkungan madrasah pada khususnya
                    dan pendidikan nasional pada umumnya Menjadi mitra yang baik
                    bagi madrasah dan lembaga pendidikan lainnya di Indonesia
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
    </div>
  );
}
