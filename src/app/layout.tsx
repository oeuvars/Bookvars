import './globals.css'
import { Inter } from 'next/font/google'
import Chat from '../components/Chat'
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BookStore',
  description: 'Welcome to OeuvarsBooks',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-slate-950'>
      <Providers>
        <body className={inter.className}>
          <Chat />
          {children}
        </body>
      </Providers>

    </html>
  )
}
