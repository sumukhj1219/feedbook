import Image from 'next/image'
import React from 'react'

const NoImage = () => {
  return (
    <div className='flex flex-col items-center justify-center mx-auto '>
      <Image
      src={'/box.png'}
      width={200}
      height={200}
      alt='No messages'
      className=' grayscale'
      />
      <span className='font-extrabold text-3xl'>No messages yet.</span>
    </div>
  )
}

export default NoImage
