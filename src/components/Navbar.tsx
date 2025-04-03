"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import GetCompany from "@/data/GetCompany";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [company, setCompany] = useState<CompanyType | null>(null);

  const fetchCompany = async () => {
    const data = await GetCompany();
    setCompany(data);
  };

  useEffect(()=>{
    fetchCompany();
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="px-5 sticky top-0 z-50 w-full border-b bg-[#0e2a38] text-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 justify-between w-full">
          <Link href="/" className="flex items-center gap-2">
            <img src={`${process.env.NEXT_PUBLIC_API_URL}/api/v1/img/${company?.Logo}`} alt="Logo" className="w-8 h-8 rounded-full" />
            <span className="text-xl font-bold">{company?.Name}</span>
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
                  <Link href="/tentang" legacyBehavior passHref>
                    <NavigationMenuLink>Tentang</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
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
            
            {/* Mobile Dropdown for Layanan */}
            
            
            <Link 
              href="/tentang" 
              className="block py-2 text-white hover:text-gray-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tentang
            </Link>
            <Link 
              href="/contact" 
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