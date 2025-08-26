import type { Metadata } from "next";
import { Inter, Press_Start_2P } from "next/font/google";

import "./globals.css";
import Head from "next/head";
import { cn } from "@/lib/utils";
import SideLinks from "@/components/sideLinks";
import { GlobalWorkerOptions } from 'pdfjs-dist';
import { pdfjs } from 'react-pdf';

// const inter = Press_Start_2P({ weight: "400", subsets:["latin-ext" ] })

const fontSans = Press_Start_2P({
  weight: "400",
  subsets: ["latin-ext"],
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "amarjeetsingh.tech",
  description: "Amar's Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
  // pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background  antialiased  ",
          fontSans.className
        )}
      >
        <div className="crt-container">

        <div className="absolute top-32 left-12 h-[10rem] below-1100:top-6 below-900:top-1 below-635:top-12 below-500:top-2  z-50 ">
          
        <div className="">
        <SideLinks   />
        </div>
        </div>
        {children}
        </div>

      </body>
    </html>
  );
}
