import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bibek Ram - Biomedical Intelligence Systems',
  description: 'Cinematic portfolio showcasing biomedical device engineering, regulatory intelligence, and AI-driven healthcare innovation',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0a0a1a" />
      </head>
      <body className="dark">
        {children}
      </body>
    </html>
  )
}
