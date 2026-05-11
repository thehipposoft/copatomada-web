import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://copatomada.com.ar/sitemap.xml',
    host: 'https://copatomada.com.ar',
  };
}
