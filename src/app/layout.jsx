import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BookingSports',
  description: 'Busca tu cancha, encarganos la reserva',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <Navbar />

        <main>
          {children}
          <Footer />
        </main>
       
      </body>
    </html>
  )
}
