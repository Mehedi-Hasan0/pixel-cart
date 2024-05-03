import type { Metadata } from "next";
import { Bai_Jamjuree, VT323 } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/header/Header";

const bai = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-bai-jam-juree",
});

const pixel = VT323({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pixel",
});

export const metadata: Metadata = {
  title: "Pixel cart",
  description: "Pixel Cart an e-commerce web app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bai.variable} ${pixel.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
