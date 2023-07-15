'use client'

import Image from 'next/image'
import { useState } from 'react'

import image from '@/assets/gallery/masonry/image.jpg'
import image2 from '@/assets/gallery/masonry/image-1.jpg'
import image3 from '@/assets/gallery/masonry/image-2.jpg'
import image4 from '@/assets/gallery/masonry/image-3.jpg'
import image5 from '@/assets/gallery/masonry/image-4.jpg'
import image6 from '@/assets/gallery/masonry/image-5.jpg'
import image7 from '@/assets/gallery/masonry/image-6.jpg'
import image8 from '@/assets/gallery/masonry/image-7.jpg'
import image9 from '@/assets/gallery/masonry/image-8.jpg'
import image10 from '@/assets/gallery/masonry/image-9.jpg'
import image11 from '@/assets/gallery/masonry/image-10.jpg'
import image12 from '@/assets/gallery/masonry/image-11.jpg'

const Mansory = () => {
  const [checked, isChecked] = useState<boolean>(false)

  return (
    <section className='w-screen bg-[#23272F] snap-start' id='course'>
      <div className='container mx-auto py-28 md:flex-row flex-col items-center'>
        <h1 className='title-font sm:text-4xl text-center text-3xl mb-8 font-medium text-white'>
          Lorem ipsum dolor sit almet
        </h1>
        <div className='flex items-center justify-center flex-wrap'>
          <button
            type='button'
            className='bg-[#4ED9F8] text-gray-800 hover:text-gray-800 hover:bg-[#4ED9F8] transition-colors duration-500 focus:outline-none rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3'
          >
            3D Render
          </button>
          <button
            type='button'
            className='bg-[#3D4453] text-white hover:text-gray-800 hover:bg-[#4ED9F8] transition-colors duration-500 focus:outline-none rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3'
          >
            Illustration
          </button>
          <button
            type='button'
            className='bg-[#3D4453] text-white hover:text-gray-800 hover:bg-[#4ED9F8] transition-colors duration-500 focus:outline-none rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3'
          >
            Photoshop
          </button>
          <button
            type='button'
            className='bg-[#3D4453] text-white hover:text-gray-800 hover:bg-[#4ED9F8] transition-colors duration-500 focus:outline-none rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3'
          >
            Sketch
          </button>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 pt-24 pb-24'>
          <div className='grid gap-4'>
            <div>
              <Image className='h-auto max-w-full rounded-lg' src={image} alt='' />
            </div>
            <div>
              <Image className='h-auto max-w-full rounded-lg' src={image2} alt='' />
            </div>
            <div>
              <Image className='h-auto max-w-full rounded-lg' src={image3} alt='' />
            </div>
          </div>
          <div className='grid gap-4'>
            <div>
              <Image className='h-auto max-w-full rounded-lg' src={image4} alt='' />
            </div>
            <div>
              <Image className='h-auto max-w-full rounded-lg' src={image5} alt='' />
            </div>
            <div>
              <Image className='h-auto max-w-full rounded-lg' src={image6} alt='' />
            </div>
          </div>
          <div className='grid gap-4'>
            <div>
              <Image className='h-auto max-w-full rounded-lg' src={image7} alt='' />
            </div>
            <div>
              <Image className='h-auto max-w-full rounded-lg' src={image8} alt='' />
            </div>
            <div>
              <Image className='h-auto max-w-full rounded-lg' src={image9} alt='' />
            </div>
          </div>
          <div className='grid gap-4'>
            <div>
              <Image className='h-auto max-w-full rounded-lg' src={image10} alt='' />
            </div>
            <div>
              <Image className='h-auto max-w-full rounded-lg' src={image11} alt='' />
            </div>
            <div>
              <Image className='h-auto max-w-full rounded-lg' src={image12} alt='' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mansory
