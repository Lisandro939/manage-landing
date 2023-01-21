'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, {useState} from 'react'
import Logo from '../public/images/logo.svg'
import Hamburguer from '../public/images/icon-hamburger.svg'
import Close from '../public/images/icon-close.svg'

export default function Header() {

    const [buttonStyle, setButtonStyle ] = useState('')
    const [buttonCloseStyle, setButtonCloseStyle ] = useState('hidden')
    const [boxStyle, setBoxStyle] = useState(' sm:hidden')
    const aStyle = 'cursor-pointer hover:text-gray-400'

  return (
    <nav className='w-screen max-w-4xl h-[50px] flex flex-row justify-between items-center sm:px-4'>
        <Link href="/">
            <Image alt='' src={Logo} width={150} height={100}/>
        </Link>
        <div className='flex flex-row gap-6 text-sm sm:hidden'>
            <a className={aStyle}>Princing</a>
            <a className={aStyle}>Product</a>
            <a className={aStyle}>About Us</a>
            <a className={aStyle}>Careers</a>
            <a className={aStyle}>Community</a>
        </div>
        <button className='bg-[#F3603C] px-6 py-2 rounded-full text-xs font-medium text-white hover:opacity-50 sm:hidden'>
            Get Started
        </button>
        <button 
        onClick={() => {
            setButtonStyle('sm:hidden')
            setButtonCloseStyle('sm:inline-block')
            setBoxStyle(' sm:inline-block')
        }}
        className={'hidden sm:inline-block ' + buttonStyle}
        >
            <Image alt='' src={Hamburguer} width={30} height={30}/>
        </button>
        <button 
        onClick={() => {
            setButtonStyle('sm:inline-block')
            setButtonCloseStyle('sm:hidden')
            setBoxStyle(' sm:hidden')
        }}
        className={'2xl:hidden ' + buttonCloseStyle}
        >
            <Image alt='' src={Close} width={30} height={30}/>
        </button>
        <div id="box" className={'2xl:hidden sm:absolute sm:flex sm:flex-col items-center gap-4 py-6 top-0 left-0 right-0 w-[90%] h-[fit-content] mx-auto mt-[100px] bg-white sm:rounded-lg' + boxStyle}>
            <a className={aStyle}>Princing</a>
            <a className={aStyle}>Product</a>
            <a className={aStyle}>About Us</a>
            <a className={aStyle}>Careers</a>
            <a className={aStyle}>Community</a>
        </div>
    </nav>
  )
}
