import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.hotelluxuriagrand.com'
  
  const staticPages = [
    '',
    '/about',
    '/book',
    '/contact',
    '/dining',
    '/events',
    '/gallery',
    '/offers',
    '/rooms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const legalPages = [
    'privacy',
    'terms',
    'cancellation-policy',
    'refund-policy',
  ].map((slug) => ({
    url: `${baseUrl}/legal/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.5,
  }))

  return [...staticPages, ...legalPages]
}
