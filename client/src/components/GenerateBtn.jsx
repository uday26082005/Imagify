import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const GenerateBtn = () => {

    const { user, setShowLogin } = useContext(AppContext)

    const navigate = useNavigate()

    const onClickHandler = () => {
        if (user) {
            navigate('/result')
            scrollTo(0,0)
        } else {
            scrollTo(0,0)
            setShowLogin(true)
        }
    }

    return (
        <motion.div
            className='pb-16 text-center'
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            {/* Title */}
            <h1 className='text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 dark:text-white py-6 md:py-16'>See the magic. Try now.</h1>

            <button onClick={onClickHandler} className='inline-flex items-center gap-2 px-12 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black m-auto hover:scale-105 transition-all duration-500 shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(0,0,0,0.6)] dark:shadow-[0_0_15px_rgba(255,255,255,0.3)] dark:hover:shadow-[0_0_25px_rgba(255,255,255,0.8)]'>
                Generate Images <img className='h-6' src={assets.star_group} alt="" />
            </button>

        </motion.div>
    )
}

export default GenerateBtn