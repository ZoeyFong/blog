import 'css/tailwind.css'
import 'pliny/search/algolia.css'

import { Roboto_Mono } from 'next/font/google'
import { SearchProvider, SearchConfig } from 'pliny/search'
import { Analytics } from '@vercel/analytics/react'
import Header from '@/components/Header'
import SectionContainer from '@/components/SectionContainer'
import Footer from '@/components/Footer'
import siteMetadata from '@/data/siteMetadata'
import { ThemeProviders } from './theme-providers'
import { Metadata } from 'next'
import Mdx from './Mdx'

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang={siteMetadata.language}
      className={`${roboto_mono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <link rel="icon" sizes="32x32" href="/static/favicons/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
      <body
        className={
          'bg-beige-100 min-h-screen bg-[#fafafa] font-mono text-[#000000] dark:bg-[#27272a] dark:text-[#FFFFFF]'
        }
      >
        <ThemeProviders>
          <Header />
          <SectionContainer>
            <div className="h-screen">
              <SearchProvider searchConfig={siteMetadata.search as SearchConfig}>
                <main className="prose prose-sm m-auto mt-8 min-h-[65%] min-w-full font-mono text-black sm:prose lg:prose-lg xl:prose-xl dark:text-white">
                  <Mdx>{children}</Mdx>
                </main>
              </SearchProvider>
              <Footer />
            </div>
          </SectionContainer>
        </ThemeProviders>
        <Analytics />
      </body>
    </html>
  )
}
