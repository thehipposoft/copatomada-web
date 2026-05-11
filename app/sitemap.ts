import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://copatomada.com.ar/',
            lastModified: new Date(),
        },
    ];
}
