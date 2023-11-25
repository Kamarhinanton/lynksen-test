import React from 'react'
import Image from 'next/image'

const SlideImage = ({ id, url }: { id: string; url: string }) => {
  return <Image src={url} alt={id} fill={true} objectFit={'cover'} />
}

export default SlideImage
