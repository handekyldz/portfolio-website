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
    default: "hnd. — portfolio",
    template: "%s | hnd.",
  },
  description:
    "Multidisciplinary designer working across product, brand and visual design.",
  keywords: [
    "portfolio",
    "designer",
    "product design",
    "brand design",
    "UX design",
    "UI design",
  ],
  metadataBase: new URL("https://hnd.design"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hnd.design",
    title: "hnd. — portfolio",
    description: "Multidisciplinary designer working across product, brand and visual design.",
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
