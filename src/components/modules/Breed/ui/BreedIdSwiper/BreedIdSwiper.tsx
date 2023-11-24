import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import styles from './BreedIdSwiper.module.scss'
import Image from 'next/image'
import { useFetchCatsByBreedIdQuery } from '@/api/getBreeds'

const BreedIdSwiper = ({ breedId }: { breedId: string }) => {
  const { data } = useFetchCatsByBreedIdQuery({ breedId })

  return (
    <Swiper
      className={styles['breedIdSwiper']}
      slidesPerView={1}
      spaceBetween={30}
      speed={2000}
    >
      {data &&
        data.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className={styles['breedIdSwiper__slide']}
          >
            <Image
              src={slide.url}
              alt={'picture'}
              fill={true}
              objectFit={'cover'}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default BreedIdSwiper
