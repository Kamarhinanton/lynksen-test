import React, { FC } from 'react'
import { useFetchAllBreedsQuery } from '@/api/getBreeds'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './BreedsSwiper.module.scss'

const BreedsSwiper: FC = () => {
  const { data } = useFetchAllBreedsQuery({})
  const getRandomCat = () => {
    console.log('hello')
  }

  return (
    <Swiper
      className={styles['breedsSwiper']}
      slidesPerView={'auto'}
      spaceBetween={30}
      loop={true}
      speed={2000}
    >
      {data &&
        data.map(
          (slide) =>
            slide.image &&
            slide.description &&
            slide.id &&
            slide.name && (
              <SwiperSlide
                key={slide.id}
                className={styles['breedsSwiper__slide']}
              >
                <p
                  onClick={getRandomCat}
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
                  <Image
                    src={slide.image.url}
                    alt={slide.description}
                    fill={true}
                    objectFit={'cover'}
                  />
                </Link>
              </SwiperSlide>
            ),
        )}
    </Swiper>
  )
}

export default BreedsSwiper
