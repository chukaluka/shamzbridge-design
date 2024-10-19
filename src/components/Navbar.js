"use client";
import React, { useState } from 'react'
import Link from 'next/link';
import { motion } from "framer-motion"
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {

    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(false)
    }

    const menuVariants = {
        open: {
            x: 0,
            transition: {
                stiffness: 20,
                damping: 15
            }
        },
        closed: {
            x: '-100%',
            transition: {
                stiffness: 20,
                damping: 15
            }
        } 
    }

  return (
    <motion.div
    
    className='text-black pt-3'>

       {/* Desktop Menu */}
       <div className='flex items-center justify-between px-4 py-2 mx-auto max-w-[800px]'>
            {/* Logo Section - Visible on all screen sizes */}
            <div className='text-xl font-bold'>
                <h1 className='text-xs md:text-2xl font-bold pl-6 md:pl-14 mt-20'> SHAMZBRIDGE <span className='text-orange-500'>CONSULT</span></h1>

            </div>


            <div className='hidden md:flex'>
                <ul className='flex flex-row space-x-8 p-4'>
                    <li>
                        <Link href='#about' className='hover:underline transition duration-300'>About</Link>
                    </li>
                    <li>
                        <Link href='#portfolio' className='hover:underline transition duration-300'>Service</Link>
                    </li>
                </ul>
            </div>
        </div>



       {/* Mobile Menu */}
       <div onClick={toggleNav} className='md:hidden absolute top-5 right-5 border rounded text-white/70 border-black p-2 z-50'>
           { nav ? <IoMdClose className='bg-black' size={30} /> : <IoMenuSharp className='bg-black' size={30}/>}
       </div>
       
       <motion.div
           initial={false}
           animate={nav ? 'open' : 'closed'}
           variants={menuVariants}
           
           className='fixed left-0 top-0 w-full z-40 bg-slate-700'
       >
           <ul  className='text-4xl font-semibold my-24 text-center space-y-8'>
               <motion.li
                   whileTap={{scale: 0.9}}
               >
                   <Link  href='#about'>About</Link>
               </motion.li>
               <motion.li
                   whileTap={{scale: 0.9}}
               >
                   <Link  href='#portfolio'>Services</Link>
               </motion.li>
           </ul>
       </motion.div>
       
   </motion.div>
  )
}

export default Navbar