import type { Metadata } from "next";
import { Inter, Press_Start_2P } from "next/font/google";

import "./globals.css";
import Head from "next/head";
import { cn } from "@/lib/utils";
import SideLinks from "@/components/sideLinks";

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


  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background  antialiased  ",
          fontSans.className
        )}
      >
        <div className="crt-container">

        <div className="absolute top-52 left-12 h-[10rem]  z-50 ">
          
        <SideLinks   />
        </div>
        {children}
        </div>

      </body>
    </html>
  );
}
