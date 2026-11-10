import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Suvodeep Mishra | Systems Engineer & Full-Stack Developer",
  description:
    "Portfolio of Suvodeep Mishra — Focused on high-performance backends, native CLI tools, distributed systems, and modern web applications.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
  },
  keywords: [
    "Suvodeep Mishra",
    "Systems Engineer",
    "Full-Stack Developer",
    "Rust",
    "C++",
    "Next.js",
    "Distributed Systems",
    "Sandpro",
    "Cortex",
    "NextPlan",
  ],
  authors: [{ name: "Suvodeep Mishra" }],
  creator: "Suvodeep Mishra",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://suvodeep.dev",
    title: "Suvodeep Mishra | Systems Engineer & Full-Stack Developer",
    description:
      "Focused on high-performance backends, native CLI tools, distributed systems, and modern web applications.",
    siteName: "Suvodeep Mishra Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suvodeep Mishra | Systems Engineer & Full-Stack Developer",
    description:
      "Focused on high-performance backends, native CLI tools, distributed systems, and modern web applications.",
    creator: "@SuvodeepMishra",
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
    <html
      lang="en"
      className={`light scroll-smooth ${geistSans.variable} ${geistMono.variable}`}
    >
      <body
        className={`${geistSans.className} antialiased bg-white text-zinc-900 min-h-screen selection:bg-zinc-200 selection:text-zinc-900`}
      >
        {children}
      </body>
    </html>
  );
}
