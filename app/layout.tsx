import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RepairTouch",
  description: "Professional IT Repair and Technology Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased relative`}>
        <Navbar />
        {children}
        <Footer />
      </body>

      <script
        async
        type="text/javascript"
        src="https://tenor.com/embed.js"
      />
    </html>
  );
}