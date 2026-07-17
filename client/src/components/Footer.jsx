import React from 'react'
import { assets } from '../assets/assets'
import Logo from './Logo'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
        <Logo />
        <p className='flex-1 border-l border-gray-400 dark:border-gray-600 pl-4 text-sm text-gray-500 dark:text-gray-400 max-sm:hidden'>Copyright @pixora.dev | All right reserved.</p>
        <div className='flex gap-2.5'>
            
            <a href="https://twitter.com/Uday26082005" target="_blank" rel="noopener noreferrer">
                <img width={35} src={assets.twitter_icon} alt="Twitter" className="dark:brightness-0 dark:invert" />
            </a>

            <a href="https://instagram.com/_uday_.kumar._" target="_blank" rel="noopener noreferrer">
                <img width={35} src={assets.instagram_icon} alt="Instagram" className="dark:brightness-0 dark:invert" />
            </a>

        </div>
    </div>
  )
}

export default Footer