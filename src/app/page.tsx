'use client'
import Image from 'next/image'

import Navbar from '@/app/Navbar'
import Footer from '@/app/Footer'

import Hero from '@/app/Hero'
import Introduction from '@/app/Introduction'
import Testimonial from '@/app/Testimonial'
import Mansory from '@/app/Mansory'
import Contact from '@/app/Contact'

export default function App() {
  return (
    <main className='h-screen w-screen snap-y snap-proximity overflow-x-hidden scroll-smooth'>
      <Navbar />
      <Hero />
      <Introduction />
      <Testimonial />
      <Mansory />
      <Contact />
      <Footer />
    </main>
  )
}
