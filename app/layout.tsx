import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";
import Libraries from "./Libraries";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dad Jokes Generator",
  description: "Next.js 14, Supabase, and Tailwind Web Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <Libraries />
        {children}
      </body>
    </html>
  );
}
