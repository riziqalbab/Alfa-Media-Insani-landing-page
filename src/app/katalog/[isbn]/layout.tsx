import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BUKU | DIGITAL MADRASAH",
  description: "Akses di mana pun, kapan pun, Baca buku yuk!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
