import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from "next/head";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Atlas Autoware',
  description: 'The premier high school-led self-driving car team',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
              <Head>
                   <link rel="icon" href="/logo.png" />
               </Head>
    <body className={inter.className}>
        <div className="min-h-screen bg-white text-black">
          {children}
        </div>
      </body>
    </html>
  )
}

