'use client'
import { useState, useEffect } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

import { SlideButtons } from './SlideButtons'
import { TemplateImage } from './template-image/TemplateImage'

interface Slide {
  id: string
  url: string
}

export const ImageCarrousel = ({
  autoSlide = false,
  autoSlideInterval = 8000,
  slides
}: {
  autoSlide?: boolean
  autoSlideInterval?: number
  slides: Slide[]
}): JSX.Element => {
  const [curr, setCurr] = useState(0)

  const prev = (): void => {
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  }

  const next = (): void => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))
  }

  useEffect(() => {
    let slideInterval: NodeJS.Timeout | undefined
    if (autoSlide) {
      slideInterval = setInterval(() => {
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))
      }, autoSlideInterval)
    }
    return () => {
      clearInterval(slideInterval)
    }
  }, [autoSlide, autoSlideInterval, slides.length])

  return (
    <>
      <div className='relative bg-primary overflow-hidden max-w-4xl'>
        <div
          className='flex transition-transform ease-out duration-500'
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides.map((slide) => (
            <TemplateImage
              className='w-full min-w-full h-[500px] object-cover object-left'
              key={slide.id}
              src={`${slide.url}`}
              alt={slide.url}
              width={880}
              height={500}
            />
          ))}
        </div>

        {
          slides.length > 1 && (
            <div className='absolute inset-0 items-center justify-between px-4 '>
              <button
                onClick={prev}
                className='px-2 py-2 bg-blue-600/50 text-white rounded-none cursor-pointer transition duration-200 ease-out hover:border-blue-600 hover:border hover:bg-blue-700 hover:text-white absolute top-1/2 left-3 transform -translate-y-1/2'
              >
                <IoIosArrowBack size={24} />
              </button>
              <button
                onClick={next}
                className='px-2 py-2 bg-blue-600/50 text-white rounded-none cursor-pointer transition duration-200 ease-out hover:border-black hover:border hover:bg-blue-700 hover:text-white absolute top-1/2 right-3 transform -translate-y-1/2'
              >
                <IoIosArrowForward size={24} />
              </button>
            </div>
          )
        }

        {
          slides.length > 1 && (
            <SlideButtons
              slides={slides}
              curr={curr}
              setCurr={setCurr}
            />
          )
        }
      </div>
    </>
  )
}
