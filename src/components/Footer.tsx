import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Youtube } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#0e2a38] text-white flex items-center justify-center">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold">Alfa Media</span>
            </Link>
            <p className="text-gray-300 mb-4">
              Penerbit buku ajar, buku referensi, buku monograf, buku umum,
              jurnal penelitian ilmiah hingga proceeding dalam bentuk cetak
              maupun E-Book.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Produk</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/buku-mi"
                  className="text-gray-300 hover:text-white"
                >
                  Buku MI
                </Link>
              </li>
              <li>
                <Link
                  href="/buku-mts"
                  className="text-gray-300 hover:text-white"
                >
                  Buku MTs
                </Link>
              </li>
              <li>
                <Link
                  href="/buku-ma"
                  className="text-gray-300 hover:text-white"
                >
                  Buku MA
                </Link>
              </li>
              <li>
                <Link
                  href="/buku-ptai"
                  className="text-gray-300 hover:text-white"
                >
                  Buku PTAI
                </Link>
              </li>
              <li>
                <Link href="/jurnal" className="text-gray-300 hover:text-white">
                  Jurnal Ilmiah
                </Link>
              </li>
              <li>
                <Link href="/sastra" className="text-gray-300 hover:text-white">
                  Sastra
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} Alfa Media Insani. Hak Cipta
            Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
