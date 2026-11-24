
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tree Shop",
  description: "Tree Shop e-commerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <Navbar />

        {children}

        <footer className="border-t bg-white py-6 text-center text-gray-600">
          © 2026 Tree Shop. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
