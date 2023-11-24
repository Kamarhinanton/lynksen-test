import React, { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import styles from './BreedsSwiper.module.scss'
import { useFetchAllBreedsQuery } from '@/api/getBreeds'
import Image from 'next/image'
import Link from 'next/link'

const BreedsSwiper: FC = () => {
  const { data } = useFetchAllBreedsQuery({})

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
