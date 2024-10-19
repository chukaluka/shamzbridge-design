"use client";
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';
import shape1 from '../assets/shape1.svg'

export default function Services() {
  return (
    <motion.div 
    initial={{opacity: 0, y: 75}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.5, delay: 0.25}}
    className='text-black max-w-[300px] md:max-w-[900px] mx-auto pt-20 mt-24 mb-28 flex justify-center'>

        <div className='flex flex-col justify-center items-center'>
            <div className='text-center font-bold text-3xl md:text-5xl pb-5'>
                <h1 className=''>Services</h1>
                <Image src={shape1} />
            </div>

            <div class="flex flex-col md:flex-wrap justify-between">
                <div class="max-w-[270px] md:max-w-[400px] p-4 m-5 text-center rounded border shadow bg-white">
                    <h1 className='font-bold text-base md:text-xl text-slate-600/70'>Programs/Projects Management</h1>
                    <h1>Partner with us for seamless project execution.</h1>
                </div>
                <div class="max-w-[270px] md:max-w-[400px] p-4 m-5 text-center rounded border shadow bg-white">
                    <h1 className='font-bold text-base md:text-xl text-slate-600/70'>Capacity Building</h1>
                    <h1>Nurture talent and skills with our capacity building services.</h1>
                </div>
                <div class="max-w-[270px] md:max-w-[400px] p-4 m-5 text-center rounded border shadow bg-white">
                    <h1 className='font-bold text-base md:text-xl text-slate-600/70'>Consultancy Services</h1>
                    <h1>Elevate your strategy with our consultancy services.</h1>
                </div>
                <div class="max-w-[270px] md:max-w-[400px] p-4 m-5 text-center rounded border shadow bg-white">
                    <h1 className='font-bold text-base md:text-xl text-slate-600/70'>Event Host/Management</h1>
                    <h1>Let us handle the details while you enjoy the moment.</h1>
                </div>
                <div class="max-w-[270px] md:max-w-[400px] p-4 m-5 text-center rounded border shadow bg-white">
                    <h1 className='font-bold text-base md:text-xl text-slate-600/70'>Community Development</h1>
                    <h1>Championing development where it matters most.</h1>
                </div>
                <div class="max-w-[270px] md:max-w-[400px] p-4 m-5 text-center rounded border shadow bg-white">
                    <h1 className='font-bold text-base md:text-xl text-slate-600/70'>Content Development</h1>
                    <h1>Unleash your creativity and transform ideas into impactful stories</h1>
                </div>
            </div>

        </div>

    </motion.div>
  )
}
