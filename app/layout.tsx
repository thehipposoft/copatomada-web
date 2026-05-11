import './globals.css'
import Script from 'next/script';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "./theme-provider";
import { ThemeContextProvider } from './context/theme';

const inter = Inter({ subsets: ['latin'] })

const siteUrl = 'https://copatomada.com.ar';
const siteName = 'Copa Tomada';
const defaultDescription =
  'Somos un negocio de ventas de bebidas en Nueva Cordoba. Pedi lo que quieras y te lo llevamos.';
const socialImage = '/assets/logoheader.png';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#000000',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  applicationName: siteName,
  referrer: 'origin-when-cross-origin',
  keywords: [
    'copa tomada',
    'bebidas nueva cordoba',
    'delivery de bebidas',
    'trago y cerveza',
    'nueva cordoba',
    'cordoba',
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: socialImage,
    shortcut: socialImage,
    apple: socialImage,
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: siteUrl,
    siteName,
    title: siteName,
    description: defaultDescription,
    images: [
      {
        url: socialImage,
        alt: 'Logo de Copa Tomada',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: defaultDescription,
    images: [socialImage],
  },
  category: 'food',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-AR">
        <head>
          <script type="application/ld+json"
              dangerouslySetInnerHTML={{
                  __html: `{
                      "@context": "https://schema.org",
                      "@type": "Organization",
                      "name": "Copa Tomada",
                      "url": "https://copatomada.com.ar/",
                      "logo": "https://copatomada.com.ar/assets/logoheader.png",
                      "contactPoint": {
                          "@type": "ContactPoint",
                          "telephone": "+54 351 260-3614",
                          "contactType": "customer service",
                          "areaServed": "AR",
                          "availableLanguage": "es"
                      },
                      "sameAs": [
                          "https://www.facebook.com/copatomada",
                          "https://www.instagram.com/copatomada/",
                          "https://twitter.com/CopaTomada"
                      ]
                  }`,
              }}
          />
      </head>
      <body
        className={`${inter.className} bg-slate-50 dark:bg-[#0d1117]`}
      >
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-B1NV5N5JSV"
        />
        <Script
          id="gtag-init"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-B1NV5N5JSV', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThemeContextProvider>
            {children}
          </ThemeContextProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
