"use client";

import { useState } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="px-5 sticky top-0 z-50 w-full border-b bg-[#0e2a38] text-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 justify-between w-full">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">Alfa Media</span>
          </Link>

          {/* Hamburger button for mobile */}
          <button 
            className="md:hidden flex flex-col justify-center items-center"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white mb-1.5 transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white mb-1.5 transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink>Beranda</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-[#0e2a38]">Buku</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li>
                        <Link href="/buku-mi" legacyBehavior passHref>
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">
                              Buku MI
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Buku-buku untuk Madrasah Ibtidaiyah
                            </p>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="/buku-mts" legacyBehavior passHref>
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">
                              Buku MTs
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Buku-buku untuk Madrasah Tsanawiyah
                            </p>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="/buku-ma" legacyBehavior passHref>
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">
                              Buku MA
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Buku-buku untuk Madrasah Aliyah
                            </p>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="/buku-ptai" legacyBehavior passHref>
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">
                              Buku PTAI
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Buku-buku untuk Perguruan Tinggi Agama Islam
                            </p>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-[#0e2a38]">Layanan</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li>
                        <Link href="/terbitkan-buku" legacyBehavior passHref>
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">
                              Menerbitkan Buku
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Layanan penerbitan buku untuk penulis
                            </p>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="/konversi-buku" legacyBehavior passHref>
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">
                              Konversi Buku
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Layanan mengubah artikel ilmiah menjadi buku
                            </p>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="/pengadaan-buku" legacyBehavior passHref>
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">
                              Pengadaan Buku
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Layanan pengadaan buku untuk perpustakaan
                            </p>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="/kerjasama" legacyBehavior passHref>
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">
                              Kerjasama Institusi
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Layanan kerjasama dengan institusi pendidikan
                            </p>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/tentang" legacyBehavior passHref>
                    <NavigationMenuLink>Tentang</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/kontak" legacyBehavior passHref>
                    <NavigationMenuLink>Kontak</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-4 py-2 space-y-2 bg-[#0e2a38] border-t border-gray-700">
            <Link 
              href="/" 
              className="block py-2 text-white hover:text-gray-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Beranda
            </Link>
            
            {/* Mobile Dropdown for Buku */}
            <div className="py-2">
              <div className="flex justify-between items-center text-white hover:text-gray-300">
                <span>Buku</span>
              </div>
              <div className="pl-4 mt-2 space-y-2">
                <Link 
                  href="/buku-mi" 
                  className="block py-1 text-white hover:text-gray-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Buku MI
                </Link>
                <Link 
                  href="/buku-mts" 
                  className="block py-1 text-white hover:text-gray-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Buku MTs
                </Link>
                <Link 
                  href="/buku-ma" 
                  className="block py-1 text-white hover:text-gray-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Buku MA
                </Link>
                <Link 
                  href="/buku-ptai" 
                  className="block py-1 text-white hover:text-gray-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Buku PTAI
                </Link>
              </div>
            </div>
            
            {/* Mobile Dropdown for Layanan */}
            <div className="py-2">
              <div className="flex justify-between items-center text-white hover:text-gray-300">
                <span>Layanan</span>
              </div>
              <div className="pl-4 mt-2 space-y-2">
                <Link 
                  href="/terbitkan-buku" 
                  className="block py-1 text-white hover:text-gray-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Menerbitkan Buku
                </Link>
                <Link 
                  href="/konversi-buku" 
                  className="block py-1 text-white hover:text-gray-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Konversi Buku
                </Link>
                <Link 
                  href="/pengadaan-buku" 
                  className="block py-1 text-white hover:text-gray-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pengadaan Buku
                </Link>
                <Link 
                  href="/kerjasama" 
                  className="block py-1 text-white hover:text-gray-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Kerjasama Institusi
                </Link>
              </div>
            </div>
            
            <Link 
              href="/tentang" 
              className="block py-2 text-white hover:text-gray-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tentang
            </Link>
            <Link 
              href="/kontak" 
              className="block py-2 text-white hover:text-gray-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kontak
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}