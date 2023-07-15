'use client'
import Image from 'next/image'

import Navbar from '../components/Navigations/Navbar'
import Footer from '../components/Navigations/Footer'

import Hero from '@/components/Home/Hero'
import Introduction from '@/components/Home/Introduction'
import Testimonial from '@/components/Home/Testimonial'
import Mansory from '@/components/Home/Mansory'
import Contact from '@/components/Home/Contact'

export default function App() {
  return (
    <main className='h-screen w-screen snap-y snap-mandatory overflow-x-hidden'>
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
