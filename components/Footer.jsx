import Image from 'next/image'
import React from 'react'
import Logo from '../public/images/logo-footer.svg'
import IconFacebook from '../public/images/icon-facebook.svg'
import IconYoutube from '../public/images/icon-youtube.svg'
import IconTwitter from '../public/images/icon-twitter.svg'
import IconPinterest from '../public/images/icon-pinterest.svg'
import IconInstagram from '../public/images/icon-instagram.svg'

export default function Footer() {
  return (
    <footer className='w-full h-[250px] px-10 bg-[#1E1E26] flex items-center justify-center'>
        <div className='w-full max-w-4xl flex flex-row justify-between'>
            <div className='flex flex-col gap-20'>
                <Image alt='' src={Logo} width={150} height={150}/>
                <div className='flex flex-row justify-between'>
                    <Image alt='' src={IconFacebook} width={20} height={20}/>
                    <Image alt='' src={IconYoutube} width={20} height={20}/>
                    <Image alt='' src={IconTwitter} width={20} height={20}/>
                    <Image alt='' src={IconPinterest} width={20} height={20}/>
                    <Image alt='' src={IconInstagram} width={20} height={20}/>
                </div>
            </div>
            <div className='flex flex-col text-white gap-4 text-sm text-gray-300'>
                <a>Home</a>
                <a>Pricing</a>
                <a>Products</a>
                <a>About Us</a>
            </div>
            <div className='flex flex-col text-white gap-4 text-sm text-gray-300'>
                <a>Careers</a>
                <a>Community</a>
                <a>Privacy Policy</a>
            </div>
            <div className='flex flex-col items-end justify-between'>
                <div className='flex flex-row items-center gap-4'>
                    <input 
                    type="text" 
                    placeholder="Updates in your inbox..."
                    className='b-none focus:outline-none px-4 py-2 rounded-full text-xs'
                    />
                    <buton className='text-white text-xs px-4 py-2 bg-[#F3603C] rounded-full'>Go</buton>
                </div>
                <p className='text-gray-400 text-xs'>Copyright 2023. All Rights Reserved</p>
            </div>
        </div>
    </footer>
  )
}
