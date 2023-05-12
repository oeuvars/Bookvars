import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='absolute inset-0 flex justify-center phone:items-start lg:items-center phone:py-5 lg:pt-0 phone:text-4xl lg:text-7xl phone:font-outfit lg:font-playfair text-center text-amber-200'>Bookvars</main>
  )
}
