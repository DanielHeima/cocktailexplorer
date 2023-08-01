import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cocktail Explorer',
  description: 'Tickle your fancy!'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Navbar />
          <div className="content">
          {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
