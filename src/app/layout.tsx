import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "@/styles/globals.css";
import { twMerge } from "tailwind-merge";
import { Analytics } from "@vercel/analytics/react"
import { useBoundStore } from "@/store/store";


const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Bilal Ezzaaraoui's portfolio",
  description: "Hi, I'm Bilal Ezzaaraoui, a software engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Analytics/>
      <html lang="en" className="scroll-smooth">
        <body
          className={twMerge(
            inter.variable,
            calistoga.variable,
            "bg-gray-900 text-white antialiased font-sans",
          )}
          suppressHydrationWarning
        >
          {children}
        </body>
      </html>
    </>
  );
}