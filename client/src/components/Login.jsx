import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { motion } from 'framer-motion'

const Login = () => {

    const [state, setState] = useState('Login')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { backendUrl, setShowLogin, setToken, setUser } = useContext(AppContext)

    const onSubmitHandler = async (e) => {
        e.preventDefault()

        try {

            if (state === 'Login') {

                const { data } = await axios.post(backendUrl + '/api/user/login', { email, password })

                if (data.success) {
                    setToken(data.token)
                    setUser(data.user)
                    localStorage.setItem('token', data.token)
                    setShowLogin(false)
                } else {
                    toast.error(data.message)
                }

            } else {

                const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password })

                if (data.success) {
                    setToken(data.token)
                    setUser(data.user)
                    localStorage.setItem('token', data.token)
                    setShowLogin(false)
                } else {
                    toast.error(data.message)
                }

            }



        } catch (error) {
            toast.error(error.message)
        }
    }



    useEffect(() => {
        // Disable scrolling on body when the login is open
        document.body.style.overflow = 'hidden';

        // Cleanup function to re-enable scrolling
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div className='fixed top-0 left-0 right-0 bottom-0 z-[100] backdrop-blur-md bg-black/40 flex justify-center items-center'>
            <motion.form onSubmit={onSubmitHandler} className='relative bg-white/30 dark:bg-zinc-900/50 backdrop-blur-3xl border border-white/60 dark:border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.3)] p-10 rounded-2xl text-slate-700 dark:text-gray-300'
                initial={{ opacity: 0.2, y: 50 }}
                transition={{ duration: 0.3 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >

                <h1 className='text-center text-2xl text-neutral-700 dark:text-white font-medium'>{state}</h1>

                <p className='text-sm dark:text-gray-300'>Welcome back! Please sign in to continue</p>

                {state !== 'Login' && <div className='bg-white/40 dark:bg-black/30 border border-white/50 dark:border-white/10 backdrop-blur-md px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
                    <img src={assets.name_icon} alt="" />
                    <input onChange={e => setName(e.target.value)} value={name} className='outline-none text-sm bg-transparent dark:text-white placeholder-gray-600 dark:placeholder-gray-400' type="text" placeholder='Full Name' required />
                </div>}

                <div className='bg-white/40 dark:bg-black/30 border border-white/50 dark:border-white/10 backdrop-blur-md px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
                    <img src={assets.email_icon} alt="" />
                    <input onChange={e => setEmail(e.target.value)} value={email} className='outline-none text-sm bg-transparent dark:text-white placeholder-gray-600 dark:placeholder-gray-400' type="email" placeholder='Email id' required />
                </div>

                <div className='bg-white/40 dark:bg-black/30 border border-white/50 dark:border-white/10 backdrop-blur-md px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
                    <img src={assets.lock_icon} alt="" />
                    <input onChange={e => setPassword(e.target.value)} value={password} className='outline-none text-sm bg-transparent dark:text-white placeholder-gray-600 dark:placeholder-gray-400' type="password" placeholder='Password' required />
                </div>

                <p className='text-sm text-zinc-900 dark:text-white my-4 cursor-pointer hover:underline font-medium transition-all'>Forgot password?</p>

                <button className='bg-zinc-900 dark:bg-white text-white dark:text-black w-full py-2 rounded-full font-medium hover:scale-105 transition-all duration-300'>{state === 'Login' ? 'Login' : 'Create account'}</button>

                {state === "Login"
                    ? <p className='mt-5 text-center'>Don't have an account? <span onClick={() => setState('Sign Up')} className='text-zinc-900 dark:text-white cursor-pointer font-medium hover:underline'>Sign up</span></p>
                    : <p className='mt-5 text-center'>Already have an account?  <span onClick={() => setState('Login')} className='text-zinc-900 dark:text-white cursor-pointer font-medium hover:underline'>Login</span></p>
                }
                
                <img onClick={() => setShowLogin(false)} className=' absolute top-5 right-5 cursor-pointer' src={assets.cross_icon} alt="" />
            </motion.form>
        </div>
    )
}

export default Login