import Image from 'next/image'
import React from 'react'

export default function OpinionCard({image, name, opinion}) {
  return (
    <div className='h-full flex flex-col items-center justify-center gap-4'>
        <Image alt='' src={image} width={50} height={50}/>
        <label className='text-xs font-semibold text-[#253056]'>{name}</label>
        <p className='text-xs text-center text-gray-400 sm:px-4'>{opinion}</p>
    </div>
  )
}
