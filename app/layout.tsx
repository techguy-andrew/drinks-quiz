import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/header';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Privateer Drinks Menu',
  description: 'Test your knowledge of Privateer\'s signature cocktails and drink recipes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="min-h-screen bg-background">
          {children}
        </div>
      </body>
    </html>
  )
}