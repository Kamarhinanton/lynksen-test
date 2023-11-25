import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { variants } from '@/components/ui/PageTransitionLayout'

const SlideImage = ({ id, url }: { id: string; url: string }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
    >
      <Image src={url} alt={id} fill={true} objectFit={'cover'} />
    </motion.div>
  )
}

export default SlideImage
