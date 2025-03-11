/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import FeaturedCategories from "./FeaturedCategories";
import HeaderCarousel from "./HeaderCarousel";

function Header() {
  return (
    <div>
      <HeaderCarousel />
      <div className="relative bg-white overflow-hidden">
        {/* Decorative dots pattern */}
        <div className="absolute left-0 top-12 opacity-10">
          <div className="grid grid-cols-6 gap-1">
            {[...Array(24)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 bg-emerald-600 rounded-full"
              ></div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="relative w-full md:w-1/2 mb-8 md:mb-0">
              <div className="relative">
                <div className="relative z-10 bg-emerald-100 rounded-lg overflow-hidden">
                  <img
                    src="https://digitalmadrasah.id/assets/images/siswi.png"
                    alt=""
                    className="object-cover w-full max-w-xl"
                  />
                </div>
              </div>
            </div>

            {/* Right side with text content */}
            <div className="w-full md:w-1/2 md:pl-12">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Tentang Penerbit Alfa Media Insani
              </h1>
              <div className="w-24 h-1 bg-primary mb-6 rounded-full"></div>
              <div className="space-y-4 text-gray-600 ">
                <p>
                  Alfa Media Insani adalah penerbitan buku ajar, buku referensi,
                  buku monograf, buku umum, jurnal penelitian ilmiah hingga
                  proceeding dalam bentuk cetak maupun E-Book. Dalam
                  meningkatkan mutu produksi, Penerbit Alfa Media Insani
                  membangun kerjasama intensif dan komunikatif guna pembangunan
                  sumberdaya manusia yang berkualitas, kompeten, dan
                  profesional.
                </p>
                <p>
                  Menghadirkan kemudahan proses belajar mengajar di madrasah
                  dengan memanfaatkan teknologi informasi terkini untuk mencetak
                  generasi terbaik demi menyongsong Indonesia emas
                </p>
              </div>

              <div className="mt-6">
                <Link
                  href="/tentang"
                  className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 text-white font-medium rounded-md hover:bg-emerald-700 transition-colors"
                >
                  TENTANG KAMI
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FeaturedCategories />
    </div>
  );
}

export default Header;
