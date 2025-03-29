import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Youtube } from "lucide-react";
import GetCompany from "@/data/GetCompany";

async function Footer() {

  const company: CompanyType = await GetCompany();

  return (
    <footer className="bg-[#0e2a38] text-white flex items-center justify-center">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold">Alfa Media</span>
            </Link>
            <p className="text-gray-300 mb-4">
              {company.About}
            </p>
            
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Produk</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/katalog"
                  className="text-gray-300 hover:text-white"
                >
                  Katalog
                </Link>
              </li>
              
            </ul>
          </div>

          {/* Tambahkan bagian identitas */}
          <div>
            <h3 className="text-lg font-bold mb-4">Kontak Kami</h3>
            <ul className="space-y-2">
              <li>
                <p className="text-gray-300">Nomor Telepon: {company.Phone}</p>
              </li>
              <li>
                <p className="text-gray-300">
                  Website:{" "}
                  <Link
                    href={company.Website}
                    className="text-gray-300 hover:text-white"
                  >
                    {company.Website}
                  </Link>
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} {company.Name}. Hak Cipta
            Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;