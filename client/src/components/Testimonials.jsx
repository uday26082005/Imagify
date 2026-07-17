import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Testimonials = () => {
    return (
        <motion.div
            className="flex flex-col items-center justify-center my-20 py-12"
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <h1 className="text-3xl sm:text-4xl font-semibold mb-2 dark:text-white">Customer testimonials</h1>
            <p className="text-gray-500 dark:text-gray-400 mb-12">What Our Users Are Saying</p>
            <div className="flex flex-wrap gap-6">
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className="glass-effect p-12 rounded-xl w-80 m-auto cursor-pointer hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] transition-all duration-500">
                        <div className="flex flex-col items-center">
                            <img src={testimonial.image} alt='' className="rounded-full w-14" />
                            <h2 className="text-xl font-semibold mt-3 dark:text-white">{testimonial.name}</h2>
                            <p className="text-gray-500 dark:text-gray-400 mb-4">{testimonial.role}</p>
                            <div className="flex mb-4">
                                {Array(testimonial.stars).fill('').map((item, index) => (
                                    <img key={index} src={assets.rating_star} alt='' />
                                ))}
                            </div>
                            <p className="text-center text-sm text-gray-600 dark:text-gray-300">{testimonial.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default Testimonials