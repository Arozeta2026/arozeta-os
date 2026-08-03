import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arozeta OS",
  description: "Financial Operating System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}