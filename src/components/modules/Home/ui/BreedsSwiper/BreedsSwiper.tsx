import React, { FC, useEffect, useState } from 'react'
import { Swiper } from 'swiper/react'

import styles from './BreedsSwiper.module.scss'
import SlideImage from '@/components/modules/Home/ui/SlideImage/SlideImage'
import { SwiperSlide } from 'swiper/react'
import Link from 'next/link'
import axios from 'axios'

type Breed = {
  id: string
  name: string
  image: { url?: string; id?: string }
  description: string
}

const BreedsSwiper: FC = () => {
  const [catImages, setCatImages] = useState<Breed[]>()

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const response = await axios.get(
          'https://api.thecatapi.com/v1/breeds',
          {
            headers: {
              'x-api-key':
                'live_kvYToYQi3Fg4lw3i3CCCmS5u20NMfTb907xImwuT0FEzd4GLiGzda7JdSkyClgku',
            },
          },
        )
        const breedImages = response.data
          .filter(({ image }: Breed) => image)
          .map(({ id, name, image, description }: Breed) => {
            const imageUrl = image?.url
            const imageId = image?.id

            return {
              id,
              name,
              image: {
                url: imageUrl,
                id: imageId,
              },
              description,
            }
          })
        setCatImages(breedImages)
      } catch (error) {
        console.error('Error fetching cat images:', error)
      }
    }
    fetchCatImages()
  }, [])

  const getRandomImage = async (id: string) => {
    try {
      const response = await axios.get(
        `https://api.thecatapi.com/v1/images/search`,
        {
          params: {
            breed_ids: id,
            limit: 1,
          },
          headers: {
            'x-api-key':
              'live_kvYToYQi3Fg4lw3i3CCCmS5u20NMfTb907xImwuT0FEzd4GLiGzda7JdSkyClgku',
          },
        },
      )

      const randomImage = response.data[0]?.url

      setCatImages(
        (prevCatImages) =>
          prevCatImages?.map((breed) =>
            breed.id === id ? { ...breed, image: { url: randomImage } } : breed,
          ),
      )
    } catch (error) {
      console.error('Error fetching random image:', error)
    }
  }

  return (
    <Swiper
      className={styles['breedsSwiper']}
      slidesPerView={'auto'}
      spaceBetween={30}
      loop={true}
      speed={2000}
    >
      {catImages &&
        catImages.map((slide) => (
          <SwiperSlide key={slide.id} className={styles['breedsSwiper__slide']}>
            <p
              onClick={() => getRandomImage(slide.id)}
              className={styles['breedsSwiper__slide_description']}
            >
              Get random cat
            </p>
            <Link
              scroll={false}
              href={{
                pathname: `breeds/${slide.id}`,
              }}
            >
              {slide.image.url && (
                <SlideImage id={slide.id} url={slide.image.url} />
              )}
            </Link>
          </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default BreedsSwiper
