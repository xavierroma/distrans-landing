import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://distranmail.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://distranmail.com/docs',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
  ]
} 