import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pranjul Saxena - Full Stack Developer | MERN Stack & AI Explorer",
  description: "Portfolio of Pranjul Saxena, a passionate MERN Stack Developer, AI Explorer, and NCC Cadet. Building elegant digital experiences with React, Node.js, and modern web technologies.",
  keywords: ["Pranjul Saxena", "Full Stack Developer", "MERN Stack", "React", "Node.js", "AI Explorer", "Web Development", "Portfolio"],
  authors: [{ name: "Pranjul Saxena", url: "https://github.com/pranjulsaxena" }],
  creator: "Pranjul Saxena",
  publisher: "Pranjul Saxena",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pranjulsaxena.dev",
    title: "Pranjul Saxena - Full Stack Developer",
    description: "Building elegant digital experiences with modern web technologies",
    siteName: "Pranjul Saxena Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranjul Saxena - Full Stack Developer",
    description: "Building elegant digital experiences with modern web technologies",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}