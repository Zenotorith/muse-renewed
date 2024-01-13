'use client'

import Image from 'next/image'
import { useState } from 'react'
import ImageGallery from '@/components/ImageGallery'

const MANSORY_MENU = ['3D Render', 'Illustration', 'Photoshop', 'Sketch']

const Mansory = () => {
  const [checked, setChecked] = useState<string>(MANSORY_MENU[0])

  const checkButton = (menuTtem: string) => {
    setChecked(menuTtem)
  }

  return (
    <section className='w-screen bg-[#23272F] snap-start' id='course'>
      <div className='container mx-auto py-24 md:flex-row flex-col items-center'>
        <h1 className='title-font sm:text-4xl text-center text-3xl mb-8 font-medium text-white'>
          Lorem ipsum dolor sit almet
        </h1>
        <div className='flex items-center justify-center flex-wrap'>
          {MANSORY_MENU.map((menu) => (
            <button
              onClick={() => checkButton(menu)}
              type='button'
              key={menu}
              className={`${
                checked === menu ? 'bg-[#4ED9F8]' : 'bg-[#3D4453]'
              }  text-gray-800 hover:text-gray-800 hover:bg-[#4ED9F8] transition-colors duration-500 focus:outline-none rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3`}
            >
              {menu}
            </button>
          ))}
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 pt-24 pb-24'>
          <ImageGallery />
        </div>
      </div>
    </section>
  )
}

export default Mansory
