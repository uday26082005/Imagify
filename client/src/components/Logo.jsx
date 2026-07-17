import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <div className="flex items-center gap-1 sm:gap-2 group cursor-pointer">
            <img src="/favicon.png" alt="Pixora Logo" className="w-8 h-8 sm:w-11 sm:h-11 group-hover:scale-105 transition-transform duration-500 ease-in-out drop-shadow-md" />
            <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#2563eb] dark:text-[#5a9dff]">
                Pixora
            </span>
        </div>
    )
}

export default Logo
