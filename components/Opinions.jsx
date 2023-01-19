import React from 'react'
import Carrousell from './opinions components/Carrousell'

export default function Opinions() {
  return (
    <div className='w-screen flex flex-col items-center justify-center'>
        <h2 className='text-4xl text-[#253056] font-semibold'>
            What they´ve said
        </h2>
        <Carrousell />
        <button className='bg-[#F3603C] px-6 py-2 rounded-full text-xs font-medium text-white'>
            Get Started
        </button>
    </div>
  )
}
