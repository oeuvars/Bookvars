import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='absolute inset-0 flex justify-center items-center phone:text-4xl lg:pb-0 phone:pb-72 lg:text-7xl font-playfair text-center opacity-80 text-amber-200'>Sinjari&apos;s Chatbot</main>
  )
}
