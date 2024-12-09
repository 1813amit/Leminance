import React from 'react'
import { NavLink, useNavigate } from 'react-router'

const ProductCard = (props) => {
    const {id, name,price,image,slug} = props.data;
    const navigate = useNavigate();
    const handleClick =()=>{
        navigate(`/${slug}`)
    }
  return (
      <div className='bg-slate-100 p-5 rounded-xl shadow-sm'>
        <dev onClick={handleClick} to={"#"}>
            <img src={image} alt="" className='w-full h-80 cursor-pointer  object-cover object-top drop-shadow-[0_80px_30px_#0007' />
        </dev>
        <h3 className='text-2xl py-3 text-center font-medium'>{name}</h3>
      </div>
  )
}

export default ProductCard
