import type React from "react"
import type { Metadata } from "next"
import { Jost } from "next/font/google"
import "./globals.css"

const jost = Jost({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Ghar Banaune Company - No. 1 home construction company",
  description:
    "We help families build their homes better, faster and safer.",
  keywords:
    "ghar banaune, ghar banaune sahit, ghar banaune tarika, 2D design, 3D design, naksa pass, construction company in butwal, construction company in tilottama, Nepal home construction, residential construction Nepal, home builders Nepal, new home construction, custom homes Nepal, Butwal home construction, interior design, best construction company in nepal",
  authors: [{ name: "Ghar Banaune Company" }],
  creator: "Ghar Banaune Company",
  publisher: "Ghar Banaune Company",
  metadataBase: new URL("https://www.gharbanaunecompany.com.np"),
  alternates: {
    canonical: "https://www.gharbanaunecompany.com.np",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Ghar Banaune Company - No. 1 home construction company",
    description:
      "We help families build their homes better, faster and safer.",
    url: "https://www.gharbanaunecompany.com.np",
    siteName: "Ghar Banaune Company",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghar Banaune Company - No. 1 home construction company",
    description: "We help families build their homes better, faster and safer.",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={jost.className}>{children}</body>
    </html>
  )
}
