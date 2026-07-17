import React, { useContext, useEffect } from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import Logo from './Logo'

const Navbar = () => {

    const { setShowLogin, user, credit, logout, theme, toggleTheme } = useContext(AppContext)

    const navigate = useNavigate()

    return (
        <div className='flex items-center justify-between py-4'>

            <Link to='/'><Logo /></Link>

            <div className='flex items-center gap-4 sm:gap-6'>
                <button 
                  onClick={toggleTheme} 
                  className='flex items-center p-1 rounded-full border border-gray-200 dark:border-zinc-700/50 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md shadow-sm hover:shadow-md transition-all'
                >
                    <div className={`p-1.5 sm:p-2 rounded-full transition-all duration-300 ${theme === 'light' ? 'bg-white shadow-sm' : 'opacity-40 grayscale hover:opacity-100'}`}>
                        <span className="block text-sm sm:text-base leading-none">☀️</span>
                    </div>
                    <div className={`p-1.5 sm:p-2 rounded-full transition-all duration-300 ${theme === 'dark' ? 'bg-zinc-700 shadow-sm' : 'opacity-40 grayscale hover:opacity-100'}`}>
                        <span className="block text-sm sm:text-base leading-none">🌙</span>
                    </div>
                </button>
                <div>
                    {
                        user
                            ? <div className='flex items-center gap-2 sm:gap-3'>
                                <button onClick={() => navigate('/buy')} className='flex items-center gap-2 bg-blue-100 dark:bg-blue-950 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700'>
                                    <img className='w-5' src={assets.credit_star} alt="" />
                                    <p className='text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300'>Credits left : {credit}</p>
                                </button>
                                <p className='text-gray-600 dark:text-gray-300 max-sm:hidden pl-4'>Hi, {user.name}</p>
                                <div className='relative group'>
                                    <img className='w-10 drop-shadow' src={assets.profile_icon} alt="" />
                                    <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12'>
                                        <ul className='list-none m-0 p-2 bg-white dark:bg-neutral-900 dark:border-neutral-700 rounded-md border text-sm'>
                                            <li onClick={logout} className='py-1 px-2 cursor-pointer pr-10 dark:text-white'>Logout</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            : <div className='flex items-center gap-2 sm:gap-5'>
                                <p onClick={() => navigate('/buy')} className='cursor-pointer dark:text-gray-300'>Pricing</p>
                                <button onClick={() => setShowLogin(true)} className='bg-zinc-800 text-white dark:bg-gray-200 dark:text-gray-900 px-7 py-2 sm:px-10 sm:py-2 text-sm rounded-full'>
                                    Login
                                </button>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar