import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ItemsProvider } from "@/context/items-context";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "FaithGuard - Temple Lost & Found",
  description: "Community-Driven Lost & Found System for Temples",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <ItemsProvider>
          {children}
        </ItemsProvider>
      </body>
    </html>
  );
}
