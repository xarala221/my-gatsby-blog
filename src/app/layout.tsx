import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ousseynou Diop - CEO de Xarala | Catalyseur de la Renaissance Numérique Africaine',
  description: 'Leader visionnaire dans la technologie éducative et le développement des talents, transformant le paysage numérique africain.',
  keywords: ['Xarala', 'EdTech', 'Afrique', 'Digital Transformation', 'Education', 'Leadership'],
  authors: [{ name: 'Ousseynou Diop' }],
  openGraph: {
    title: 'Ousseynou Diop - CEO de Xarala',
    description: 'Catalyseur de la Renaissance Numérique Africaine',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
