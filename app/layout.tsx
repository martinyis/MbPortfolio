import Navbar from "@/components/NavBar/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
const poppins = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "MB Portfolio",
  description: "This is Portfolio website for Stanislav Martin Babak",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="./favicon.ico" />
      </head>
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
