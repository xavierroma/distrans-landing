import { Metadata } from "next"

export const siteConfig = {
  name: "Distrans - Inboxes for AI Agents",
  description: "Empowering AI Agents with Email Inboxes.",
  url: "https://distranmail.com",
  ogImage: "/og.jpg",
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "AI email",
    "AI agent inbox",
    "email API",
    "AI communication",
    "developer tools",
    "email infrastructure",
  ],
  authors: [
    {
      name: "Distrans",
      url: siteConfig.url,
    },
  ],
  creator: "Distrans",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "32x32",
      },
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}
