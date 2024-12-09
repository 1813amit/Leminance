import { useTexture } from '@react-three/drei'
import React, { useRef } from 'react'
import * as three from "three"
import img from "../Loder/imgs.png"
import { useFrame } from '@react-three/fiber'

const Cycl = () => {

    let tex = useTexture(img)
    let cyl =useRef(null)

    useFrame((state,delta)=>{
      cyl.current.rotation.y += delta
    })

  return (
    
      <group rotation={[0,3,0.4]}>
        <mesh ref={cyl}>
        <cylinderGeometry args={[ 2, 2, 2 , 100,100 , true ]} />
        <meshStandardMaterial map={tex} transparent side={three.DoubleSide} />
      </mesh>
      </group>
    
  )
}

export default Cycl
