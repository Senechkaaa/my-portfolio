import Image from 'next/image'
import React from 'react'
import logo from '../../../public/sigmaLogo.svg'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='bg-gray-950 h-20 w-full flex items-center justify-between mt-40'>
            <div className='ml-12'>
                <Image className='logo' src={logo} alt="logo" width={90} height={240} />
            </div>
            <div className='flex mr-12 items-center'>
                <Link href='https://github.com/Senechkaaa'>
                   <Image className='logo mr-3 mb-1' src='/img/github_logo_2.png' alt="github_logo" width={70} height={70} />
                </Link>
                <Link href='https://t.me/+ABKIrPxmAaM5ZDky'>
                   <Image className='logo' src='/img/telegram_logo_2.png' alt="telegram_logo" width={54} height={54} />
                </Link>
            </div>
        </footer>
    )
}

export default Footer
