import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Hotel Luxuria Grand Silchar',
    short_name: 'Luxuria Grand',
    description: "Experience Silchar's most refined sanctuary. Premium suites, signature dining, and unforgettable events at Hotel Luxuria Grand.",
    start_url: '/',
    display: 'standalone',
    background_color: '#0B0B0C',
    theme_color: '#C9A96E',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/og_image.webp',
        sizes: '1200x630',
        type: 'image/webp',
      }
    ],
  }
}
