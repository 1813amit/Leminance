import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
    
  return (
    <div className='w-full py-10 bg-gray-800'>
      <div className='text border-t-2 border-b-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap' >
        <motion.h1 className='text-[20vw] font-bold p uppercase -mb-8 -mt-8 '>LAMINANCE KITCHEN</motion.h1>
        {/* <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:5}} className='text-[20vw] font-bold  uppercase '>LAMINANCE KITCHEN</motion.h1> */}
        
      </div>
    </div>
  )
}

export default Marquee
