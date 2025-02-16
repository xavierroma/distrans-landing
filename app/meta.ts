import { Metadata } from "next"

export const siteConfig = {
  name: "Distrans - Inboxes for AI Agents",
  description: "Get unlimited inboxes for your assistants",
  url: "https://distranmail.com",
  ogImage: "/distrans.png",
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
    "Assistant email",
    "transactional email",
    "email inbox as a service",
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
    ],
    apple: "/distrans.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}
