"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";
import illustration1 from '../assets/illustration1.svg';

export default function Hero() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -75 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className='text-black max-w-[400px] md:max-w-[900px] mx-auto mt-16 md:mt-0'
    >
      <div className='flex flex-col-reverse md:flex-row w-full items-center space-y-4 md:space-y-0 md:space-x-4'>
        {/* Text Section */}
        <div className='flex-1 p-4'>
          <h1 className='text-2xl'>
            Build an Organization of high repute<br/>
            Immerse yourself in marketable, on-demand, transferrable skillsets for self-sustenance
          </h1>
          <motion.button
            whileTap={{ scale: 0.9, rotate: "2.5deg" }}
            className='rounded mt-2 text-white cursor-pointer p-3 bg-blue-600 hover:bg-slate-600 transition duration-300'
          >
            <Link href='#'>Let's Begin</Link>
          </motion.button>
        </div>

        {/* Image Section */}
        <div className='relative flex-1'>
          <Image
            src={illustration1} 
            alt="Illustration" 
            className="w-full h-auto object-contain mt-8 md:mt-16" 
          />
        </div>
      </div>
    </motion.div>
  );
}
