import { Canvas } from '@react-three/fiber'
import React from 'react'
import "./Loder.css"
import { OrbitControls } from '@react-three/drei'
import { motion } from 'framer-motion'

import Cycl from './Cycl'
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing'

const Loder = () => {

  
  return (
    <div className='absolute h-screen w-full bg-zinc-900'>
    {/* Canvas Section */}
    <Canvas camera={{ fov: 55 }} className=''>
      <OrbitControls />
      <ambientLight />
      <Cycl />
      <EffectComposer>
        <Bloom
          intensity={7.0}
          luminanceThreshold={0.9}
          luminanceSmoothing={0.025}
          mipmapBlur
        />
        <ToneMapping adaptive />
      </EffectComposer>
    </Canvas>

    {/* Animated Text Section */}
    {/* <motion.h1
      initial={{ x: '100%' }}
      animate={{ x: '-100%' }}
      transition={{ ease: 'linear', repeat: Infinity, duration: 20 }}
      className='absolute top-[80%] left-0  text-[4vw] font-bold  text-gray-300  uppercase text-center whitespace-nowrap overflow-hidden'
    >
      Welcome To The LAMINANCE KITCHEN Welcome To The LAMINANCE KITCHEN Welcome To The LAMINANCE KITCHEN
    </motion.h1> */}
  </div>

  )
}

export default Loder



// <div className='text border-t-2 border-b-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap bg-black'>
// <motion.h1
//   initial={{ x: 0 }}
//   animate={{ x: "-100%" }}
//   transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
//   className='text-[10vw] font-bold uppercase text-white'
// >
//   Welcome To The LAMINANCE KITCHEN
// </motion.h1>
// </div>

// {/* New h1 Below Canvas */}
// <div className='flex justify-center items-center bg-zinc-900 py-6'>
// <h1 className='text-4xl font-bold text-white'>
//   Experience the Art of Culinary Excellence
// </h1>
// </div>