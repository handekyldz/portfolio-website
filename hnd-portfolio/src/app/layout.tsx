import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Lora } from "next/font/google";
import { CursorProvider } from "@/components/ui/CustomCursor";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

// Temporary serif stand-in until licensed Tiempos Text .woff2 is placed in public/fonts/
const lora = Lora({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Hande Kurtulus Yildiz — Multidisciplinary Designer",
    template: "%s | Hande Kurtulus Yildiz",
  },
  description:
    "Portfolio of Hande Kurtulus Yildiz — a multidisciplinary designer shaping products, brands and experiences. Specializing in product design, brand identity, and visual design for SaaS and e-commerce.",
  keywords: [
    "portfolio",
    "designer",
    "product design",
    "brand design",
    "UX design",
    "UI design",
  ],
  authors: [{ name: "Hande Kurtulus Yildiz" }],
  metadataBase: new URL("https://hnd.design"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hnd.design",
    title: "Hande Kurtulus Yildiz — Multidisciplinary Designer",
    description: "Portfolio showcasing product, brand and visual design work.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${lora.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <CursorProvider>{children}</CursorProvider>
      </body>
    </html>
  );
}
