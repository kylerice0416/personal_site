import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { VisualEditing } from 'next-sanity/visual-editing'
import { draftMode } from 'next/headers'
import { SanityLive } from '@/sanity/lib/live'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Ai Chien | Translation & Localization',
  description: 'Chinese ↔ English translation that preserves tone, culture, and intent. Specializing in museum translation, game localization, and editorial adaptation.',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const isDraftMode = (await draftMode()).isEnabled

  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <SanityLive />
        {isDraftMode && <VisualEditing />}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
