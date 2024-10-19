"use client";
import React from 'react'
import Image from 'next/image';
import shape1 from '../assets/shape1.svg'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.div 
    initial={{opacity: 0, y: 75}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.5, delay: 0.25}}
    className='text-black bg-slate-50/100  mx-auto pt-20 mt-32 mb-28 flex justify-center pb-20'>

        <div className='flex flex-col justify- max-w-[300px] md:max-w-[1500px] items-center'>
            <div className='text-center font-bold text-3xl md:text-5xl pb-5'>
                <h1 className=''>About</h1>
                <Image src={shape1} />
            </div>

            <div className='max-w-[400px] md:max-w-[600px] text-sm md:text-xl'>
                <h1>Redefining industry standards through consultation, our innovative approach integrates cutting-edge technology with expert insights, driving transformative change and setting new benchmarks for excellence</h1>
            </div>

            <div className='flex items-center space-x-4 mt-16 flex-col md:flex-row max-w-[270px] md:max-w-[800px]'>
                <div className='relative flex-1 flex rounded border shadow bg-white p-10 mb-5'>
                    <div className='flex flex-col text-center'>
                        <h1 className='font-bold text-base md:text-xl'>Vision</h1>
                        <h1 className='text-sm md:text-lg'>
                            To become a premier organization dedicated to enhancing both personal and professional capacities of individuals and businesses, fostering efficiency, heightened productivity, and innovation.
                        </h1>
                    </div>
                </div>
                <div className='flex-1'>
                    <div className='flex flex-col text-center rounded border shadow bg-white p-10'>
                        <h1 className='font-bold text-base md:text-xl'>Mission</h1>
                        <h1 className='text-sm md:text-lg'>
                            Our mission is to cultivate an empowering atmosphere for skill acquisition and capacity enhancement that heralds a holistic growth and development for individuals and organizations.
                        </h1>
                    </div>
                </div>
            </div>

        </div>

    </motion.div>
  )
}
