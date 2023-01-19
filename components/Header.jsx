import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../public/images/logo.svg'

export default function Header() {

    const aStyle = 'cursor-pointer'

  return (
    <nav className='w-screen max-w-4xl h-[50px] flex flex-row justify-between items-center'>
        <Link href="/">
            <Image alt='' src={Logo} width={150} height={100}/>
        </Link>
        <div className='flex flex-row gap-6 text-sm'>
            <a className={aStyle}>Princing</a>
            <a className={aStyle}>Product</a>
            <a className={aStyle}>About Us</a>
            <a className={aStyle}>Careers</a>
            <a className={aStyle}>Community</a>
        </div>
        <button className='bg-[#F3603C] px-6 py-2 rounded-full text-xs font-medium text-white'>
            Get Started
        </button>
    </nav>
  )
}
