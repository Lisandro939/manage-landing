import Image from 'next/image'
import React from 'react'
import Illustration from '../public/images/illustration-intro.svg'

export default function FirstSection() {
  return (
    <div className='flex flex-row max-w-4xl gap-6'>
        <div className='flex flex-col gap-6 w-1/2 justify-center items-start'>
            <h1 className='text-5xl text-[#253056] font-semibold'>
                Bring everyone together yo build better products.
            </h1>
            <p className='pr-[100px] text-justify text-sm text-gray-400 leading-5'>
                Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
            </p>
            <button className='bg-[#F3603C] px-6 py-2 rounded-full text-xs font-medium text-white'>
            Get Started
            </button>
        </div>
        <div className='w-1/2'>
            <Image alt='' src={Illustration} width={600} height={600}/>
        </div>
    </div>
  )
}
