import React from 'react'
import { products } from '../../Product'

const Button = ({menuItem , filterItems ,setItems}) => {
  return (
    <div className='flex justify-center mb-4'>
      {
        menuItem.map(val =>(
            <button className='bg-black text-white p-1 px-2 mx-5 btn font-bold rounded'
            onClick={()=>filterItems(val)}>
                {val}
            </button>
        ))
      }
      <button className='bg-black text-white p-1 px-2 mx-5 btn font-bold rounded'
            onClick={()=>setItems(products)}>
                All
            </button>
    </div>
  )
}

export default Button
