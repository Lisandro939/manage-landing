import React from 'react'

export default function InitProduct() {
  return (
    <div className='w-screen h-[200px] flex items-center justify-center bg-[#F3603C]'>
        <div className='w-full max-w-4xl flex flex-row gap-32 justify-between items-center'>
            <div className='flex flex-col'>
                <h2 className='text-4xl text-white font-semibold'>
                    Simplify how your team
                </h2>
                <h2 className='text-4xl text-white font-semibold'>
                    works today.
                </h2>
            </div>
            <button className='bg-white px-6 py-2 rounded-full text-xs font-semibold text-[#F3603C]'>
                Get Started
            </button>
        </div>
    </div>
  )
}
