'use client'

import React from 'react'
import Image from 'next/image'

const IMAGELINKS: string[] = [
  '/image.jpg',
  '/image-1.jpg',
  '/image-2.jpg',
  '/image-3.jpg',
  '/image-4.jpg',
  '/image-5.jpg',
  '/image-6.jpg',
  '/image-7.jpg',
  '/image-8.jpg',
  '/image-9.jpg',
  '/image-10.jpg',
  '/image-11.jpg'
]

const ImageGallery = () => {
  let IMAGE_PER_ROW = 3
  let i = 0
  let rows: string[][] = []

  for (i; i < IMAGELINKS.length; i += IMAGE_PER_ROW) {
    rows.push(IMAGELINKS.slice(i, i + IMAGE_PER_ROW))
  }

  return (
    <>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className='grid gap-4'>
          {row.map((image, index) => (
            <div key={index}>
              <Image
                className='h-auto max-w-full rounded-lg'
                width='610'
                height='500'
                src={image}
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      ))}
    </>
  )
}

export default ImageGallery
