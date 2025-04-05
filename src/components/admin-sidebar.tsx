import { Book, IdCard, Image, List, LogOut } from "lucide-react"
import axios from "axios"
import { useRouter } from "next/router"
import { useState } from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import Link from "next/link"
import { redirect } from "next/navigation"

// Menu items. 
const items = [
  {
    title: "Buku",
    url: "/admin/",
    icon: Book,
  },
  {
    title: "Kategori",
    url: "/admin/kategori",
    icon: List,
  },
  {
    title: "Image Slider",
    url: "/admin/image-slider",
    icon: Image,
  },
  {
    title: "Company",
    url: "/admin/company",
    icon: IdCard,
  },
]

export function AdminSidebar() {
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false)

  const handleLogoutClick = () => {
    setShowLogoutConfirmation(true)
  }

  const handleLogout = async () => {
    try {
      // Replace with your external API URL
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/logout`, {}, {
        withCredentials: true,
      }).then(() => {
        window.location.href = "/admin/login"
      })
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  return (
    <>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>ALFA MEDIA ADMIN</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}

                {/* Logout button */}
                <SidebarMenuItem>
                  <SidebarMenuButton onClick={handleLogoutClick}>
                    <LogOut />
                    <span>Logout</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      {/* Logout Confirmation Dialog */}
      <AlertDialog open={showLogoutConfirmation} onOpenChange={setShowLogoutConfirmation}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Konfirmasi Logout</AlertDialogTitle>
            <AlertDialogDescription>
              Apakah Anda yakin ingin keluar dari sistem?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Batal</AlertDialogCancel>
            <AlertDialogAction onClick={handleLogout}>Logout</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}