import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Atlas Autoware',
    template: '%s | Atlas Autoware',
  },
  description:
    'The premier high school-led self-driving car team — the first and only high school team competing in F1 Tenth.',
  keywords: ['autonomous vehicles', 'self-driving car', 'robotics', 'AI', 'TJHSST', 'F1 Tenth'],
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect for faster font loading in production */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#030305] text-slate-100 antialiased">
        {children}
      </body>
    </html>
  )
}
