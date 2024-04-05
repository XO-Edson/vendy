import type { Metadata } from "next";
import "./globals.scss";
import Navbar from "@/app/view/nav/Navbar";
import React from "react";

export const metadata: Metadata = {
  title: "Vendy MarketPlace",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="h-full">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
