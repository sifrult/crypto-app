import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div style={{ height: "100px", background: "red" }}>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Link href="/">Home</Link>
            <Link href="/Portfolio">Portfolio</Link>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
