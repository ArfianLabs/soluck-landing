import type { Metadata } from "next";
import { Changa } from "next/font/google";
import "./globals.css";

const inter = Changa({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SoLuck",
  description: "SoLuck",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + "bg-black"}>{children}</body>
    </html>
  );
}
