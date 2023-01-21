import React from 'react'

export default function InitProduct() {
  return (
    <div className='w-screen h-[200px] flex items-center justify-center bg-[#F3603C] sm:py-20 sm:h-full'>
        <div className='w-full max-w-4xl flex flex-row gap-32 justify-between items-center sm:flex-col sm:gap-4'>
            <div className='flex flex-col sm:hidden'>
                <h2 className='text-4xl text-white font-semibold'>
                    Simplify how your team
                </h2>
                <h2 className='text-4xl text-white font-semibold'>
                    works today.
                </h2>
            </div>
            <h2 className='hidden sm:inline-block text-4xl text-white font-semibold text-center px-10'>
                Simplify how your team works today.
            </h2>
            <button className='bg-white px-6 py-2 rounded-full text-xs font-semibold text-[#F3603C] hover:opacity-50'>
                Get Started
            </button>
        </div>
    </div>
  )
}
