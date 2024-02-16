import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./(ui)/_components/_navbar";
import Footbar from "./(ui)/_components/_footbar";
import Navbar2 from "./(ui)/_components/_navbar2";
import Navbar3 from "./(ui)/_components/_navbar3";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jaaguar Media Solution",
  description:
    "Jaaguar Media Solution, Mumbai, Pune, Goa, Gujarat, Ahemdabad, Surat, Kolhapur, Nagpur, Delghi, Jaipur, Thane, outdoor marketing, outdoor assets, billboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar3 />
        {/* <Navbar2 /> */}
        {children}
        <Footbar />
      </body>
    </html>
  );
}
