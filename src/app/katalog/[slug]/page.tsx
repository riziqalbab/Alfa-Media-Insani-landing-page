/* eslint-disable @next/next/no-img-element */
// BookDetailPage.jsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {  MessageSquare } from "lucide-react";
import Link from "next/link";
// import Image from "next/image";

export default function BookDetailPage() {
  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl">
      {/* Breadcrumb */}
      <div className="flex text-sm mb-6">
        <Link href="/" className="text-blue-600 hover:underline">
          Beranda
        </Link>
        <span className="mx-2">/</span>
        <Link href="/katalog" className="text-blue-600 hover:underline">
          Katalog
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-600">
          Panduan Guru: Belajar dan Bermain Berbasis Buku (Edisi Revisi)
        </span>
      </div>

      {/* Main Book Detail Card */}
      <Card className="mb-8 bg-sky-50 relative overflow-hidden">
        <CardContent className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Book Cover */}
            <div className="flex-shrink-0 w-full md:w-64">
              <div className="bg-white p-2 rounded-md shadow-md">
                <img
                  src="https://cdn.gramedia.com/uploads/picture_meta/2024/1/8/m5b3gwzj4fpaxwq7lk4b9s.jpg"
                  alt="Cover Buku Panduan Guru"
                  width={250}
                  height={350}
                  className="w-full h-auto rounded"
                />
              </div>
            </div>

            {/* Book Info */}
            <div className="flex-1">
              <div className="inline-block px-3 py-1 text-sm font-medium text-red-600 bg-white rounded-full border border-red-500 mb-4">
                KATEGORI
              </div>

              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                MADILOG
              </h1>
              {/* Synopsis */}
              <div className="prose max-w-none mb-8">
                <p>
                  Buku Panduan Guru: Belajar dan Bermain Berbasis Buku (Edisi
                  Revisi) ini disusun sebagai panduan praktis bagi para guru
                  dalam menerapkan metodologi pembelajaran yang menyenangkan dan
                  efektif. Pendekatan berbasis buku yang dipaparkan dalam
                  panduan ini membantu guru menciptakan pengalaman belajar yang
                  interaktif dan bermakna bagi siswa.
                </p>
                <p>
                  Panduan ini mencakup berbagai strategi dan aktivitas yang
                  dapat diimplementasikan di kelas untuk meningkatkan literasi,
                  kreativitas, dan kecintaan siswa terhadap membaca. Edisi
                  revisi ini telah disesuaikan dengan Kurikulum Merdeka dan
                  diperkaya dengan contoh-contoh praktis yang relevan dengan
                  konteks pendidikan Indonesia.
                </p>
              </div>

              {/* Book Details */}
              <div>
                <h2 className="text-lg font-bold mb-4 text-gray-800">
                  DETAIL BUKU
                </h2>
                <Separator className="mb-4" />

                <dl className="grid grid-cols-1 md:grid-cols-3 gap-y-4 text-sm">
                  <dt className="font-semibold text-gray-700 col-span-1">
                    Penerbit
                  </dt>
                  <dd className="text-gray-800 col-span-2">Pusat Perbukuan</dd>

                  <dt className="font-semibold text-gray-700 col-span-1">
                    ISBN
                  </dt>
                  <dd className="text-gray-800 col-span-2">
                    978-623-118-100-8
                  </dd>

                  <dt className="font-semibold text-gray-700 col-span-1">
                    Edisi
                  </dt>
                  <dd className="text-gray-800 col-span-2">Revisi</dd>

                  <dt className="font-semibold text-gray-700 col-span-1">
                    Penulis
                  </dt>
                  <dd className="text-gray-800 col-span-2">
                    Arleen Amidjaja, Anna Farida Kurniasari, Ni Ekawati
                  </dd>

                </dl>
              </div>
            </div>
          </div>

          {/* Decorative elements - dots */}
          <div className="absolute top-4 right-4 opacity-30">
            <svg width="100" height="100" viewBox="0 0 100 100">
              <circle cx="20" cy="20" r="5" fill="#3a87ad" />
              <circle cx="40" cy="10" r="4" fill="#3a87ad" />
              <circle cx="60" cy="15" r="6" fill="#3a87ad" />
              <circle cx="30" cy="30" r="3" fill="#3a87ad" />
              <circle cx="50" cy="25" r="5" fill="#3a87ad" />
              <circle cx="70" cy="30" r="4" fill="#3a87ad" />
              <circle cx="20" cy="45" r="3" fill="#3a87ad" />
              <circle cx="40" cy="40" r="5" fill="#3a87ad" />
              <circle cx="60" cy="50" r="4" fill="#3a87ad" />
            </svg>
          </div>
        </CardContent>
      </Card>

      {/* Reviews Section */}
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Ulasan Pembaca</h2>
      <Card className="mb-8 bg-gray-50">
        <CardContent className="p-6 md:p-8 relative">
          <Button
            variant="outline"
            className="absolute right-6 top-6 text-blue-600 border-blue-600 hover:bg-blue-50"
          >
            Tulis ulasanmu di sini
          </Button>

          <div className="flex items-center text-gray-600">
            <div className="flex-shrink-0 bg-blue-600 text-white rounded-full p-2 mr-3">
              <MessageSquare className="h-5 w-5" />
            </div>
            <span>Belum ada ulasan dari pembaca</span>
          </div>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Rekomendasi buku lainnya
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"></div>
    </div>
  );
}
