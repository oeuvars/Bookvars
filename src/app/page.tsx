import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='absolute inset-0 flex justify-center items-center phone:text-4xl lg:text-7xl font-playfair text-center opacity-80 text-amber-200'>Bookvars</main>
  )
}
