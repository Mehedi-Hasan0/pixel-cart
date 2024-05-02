import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";

const bai = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-bai-jam-juree",
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
      <body className={bai.variable}>{children}</body>
    </html>
  );
}
