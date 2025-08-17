import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://081x.hobin.dev'),
  title: "08.19",
  description: "Hooray!",
  icons: {
    icon: "/meta/favicon.png",
    shortcut: "/meta/favicon.png",
    apple: "/meta/favicon.png",
  },
  openGraph: {
    title: "08.19",
    description: "Hooray!",
    images: [
      {
        url: "/meta/cover.png",
        width: 1200,
        height: 630,
        alt: "08.19",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "08.19",
    description: "Hooray!",
    images: ["/meta/cover.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
