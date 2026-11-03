import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Archivo, Inter } from 'next/font/google'
import { AnnouncementBar } from '@/components/store/announcement-bar'
import { CartProvider } from '@/components/store/cart-context'
import { SiteFooter } from '@/components/store/site-footer'
import { SiteHeader } from '@/components/store/site-header'
import { storeConfig } from '@/lib/store-config'
import './globals.css'

const archivo = Archivo({ subsets: ['latin'], variable: '--font-archivo', weight: ['500', '600', '700'] })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: {
    default: `${storeConfig.name} | Loja Oficial`,
    template: `%s | ${storeConfig.name}`,
  },
  description: storeConfig.tagline,
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#002d18',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${archivo.variable} ${inter.variable}`}>
      <body className="antialiased">
        <CartProvider>
          <AnnouncementBar />
          <SiteHeader />
          {children}
          <SiteFooter />
        </CartProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
