import "@/styles/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Providers from "./providers";

import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Arozeta OS",
  description: "Financial Operating System",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="h-full">
      <body
        className={`${inter.variable} font-sans bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-screen text-slate-100`}
      >
        <Providers>
          <div className="min-h-screen flex">
            <Sidebar />

            <div className="flex flex-1 flex-col min-h-screen">
              <Header />

              <main className="flex-1 w-full p-6 lg:p-8">
                {children}
              </main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}