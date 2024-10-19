"use client";
import React from 'react'
import { motion } from 'framer-motion'


export default function Footer() {
  return (
    <motion.div
    initial={{opacity: 0, y: 75}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.5, delay: 0.25}} 
    className='mt-12 text-white/70 max-w-[370px] md:max-w-[1550px] bg-slate-800 py-8 w-full mx-auto border-t border-gray-700 pt-4 flex justify-between items-center'>
      
      <h1 className='text-xs md:text-2xl font-bold pl-6 md:pl-14'> SHAMZBRIDGE <span className='text-orange-500'>CONSULT</span></h1>
        
    </motion.div>
  )
}
