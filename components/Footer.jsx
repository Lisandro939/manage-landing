import Image from 'next/image'
import React from 'react'
import Logo from '../public/images/logo-footer.svg'
import IconFacebook from '../public/images/icon-facebook.svg'
import IconYoutube from '../public/images/icon-youtube.svg'
import IconTwitter from '../public/images/icon-twitter.svg'
import IconPinterest from '../public/images/icon-pinterest.svg'
import IconInstagram from '../public/images/icon-instagram.svg'

export default function Footer() {

    const aStyle = "hover:text-[#F3603C] cursor-pointer"

  return (
    <footer className='w-full h-[250px] px-10 bg-[#1E1E26] flex items-center justify-center sm:h-full sm:pb-10'>
        <div className='w-full max-w-4xl flex flex-row justify-between sm:flex-col-reverse sm:gap-6'>
            <div className='flex flex-col gap-20 sm:flex-col-reverse sm:items-center sm:gap-10'>
                <p className='hidden sm:inline-block text-gray-400 text-xs'>Copyright 2023. All Rights Reserved</p>
                <Image alt='' src={Logo} width={150} height={150}/>
                <div className='sm:hidden flex flex-row justify-between sm:gap-6'>
                    <Image alt='' src={IconFacebook} width={20} height={20}/>
                    <Image alt='' src={IconYoutube} width={20} height={20}/>
                    <Image alt='' src={IconTwitter} width={20} height={20}/>
                    <Image alt='' src={IconPinterest} width={20} height={20}/>
                    <Image alt='' src={IconInstagram} width={20} height={20}/>
                </div>
                <div className='hidden sm:inline-block sm:flex sm:flex-row justify-between sm:gap-6'>
                    <Image alt='' src={IconFacebook} width={40} height={40}/>
                    <Image alt='' src={IconYoutube} width={40} height={40}/>
                    <Image alt='' src={IconTwitter} width={40} height={40}/>
                    <Image alt='' src={IconPinterest} width={40} height={40}/>
                    <Image alt='' src={IconInstagram} width={40} height={40}/>
                </div>
            </div>
            <div className='flex flex-col text-white gap-4 text-sm text-gray-300 sm:hidden'>
                <a className={aStyle}>Home</a>
                <a className={aStyle}>Pricing</a>
                <a className={aStyle}>Products</a>
                <a className={aStyle}>About Us</a>
            </div>
            <div className='flex flex-col text-white gap-4 text-sm text-gray-300 sm:hidden'>
                <a className={aStyle}>Careers</a>
                <a className={aStyle}>Community</a>
                <a className={aStyle}>Privacy Policy</a>
            </div>
            <div className='hidden sm:inline-block sm:flex sm:flex-row sm:justify-between'>
                <div className='flex flex-col text-white gap-4 text-sm text-gray-300'>
                    <a className={aStyle}>Home</a>
                    <a className={aStyle}>Pricing</a>
                    <a className={aStyle}>Products</a>
                    <a className={aStyle}>About Us</a>
                </div>
                <div className='flex flex-col text-white gap-4 text-sm text-gray-300'>
                    <a className={aStyle}>Careers</a>
                    <a className={aStyle}>Community</a>
                    <a className={aStyle}>Privacy Policy</a>
                </div>
            </div>
            <div className='flex flex-col items-end justify-between sm:items-center sm:py-6'>
                <div className='flex flex-row items-center gap-4 sm:justify-center'>
                    <input 
                    type="text" 
                    placeholder="Updates in your inbox..."
                    className='b-none focus:outline-none px-4 py-2 rounded-full text-xs'
                    />
                    <buton className='text-white text-xs px-4 py-2 bg-[#F3603C] rounded-full cursor-pointer hover:opacity-50'>Go</buton>
                </div>
                <p className='text-gray-400 text-xs sm:hidden'>Copyright 2023. All Rights Reserved</p>
            </div>
        </div>
    </footer>
  )
}
