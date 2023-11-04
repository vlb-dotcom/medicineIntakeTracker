import type { Metadata } from 'next'
import './globals.css'
import { Footer, Navbar } from '@/components'

export const metadata: Metadata = {
  title: 'Medicine Intake Tracker',
  description: 'Track Your Medicine Intake With Ease',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
      <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Navbar />
            {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
