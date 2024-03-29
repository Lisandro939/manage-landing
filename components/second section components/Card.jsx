import React from 'react'

export default function Card({number, title, text}) {
  return (
    <div className='flex flex-row gap-6 sm:flex-col sm:px-4 sm:gap-4'>
        <div className='hidden sm:inline-block sm:flex sm:flex-row sm:items-center gap-4'>
          <label className='bg-[#F3603C] px-6 py-2 rounded-full text-xs font-semibold text-white h-[fit-content]'>{number}</label>
          <h3 className='text-sm text-[#253056] font-semibold'>{title}</h3>
        </div>
        <p className='hidden sm:inline-block text-start text-sm text-gray-400 leading-5'>{text}</p>
        <label className='bg-[#F3603C] px-6 py-2 rounded-full text-xs font-semibold text-white h-[fit-content] sm:hidden'>{number}</label>
        <div className='flex flex-col gap-4 pt-2 sm:hidden'>
            <h3 className='text-sm text-[#253056] font-semibold'>{title}</h3>
            <p className='text-start text-sm text-gray-400 leading-5'>{text}</p>
        </div>
    </div>
  )
}
