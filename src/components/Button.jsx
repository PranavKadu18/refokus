import React from 'react'
import { PiArrowBendDownRightLight } from "react-icons/pi";

const Button = ({name}) => {
  return (
    <button className='flex items-center px-4 py-1 rounded-full bg-white text-black gap-2'>
        <h1 className='text-xs'>{name}</h1>
        <PiArrowBendDownRightLight className='w-4 h-4 font-bold' />
    </button>
  )
}

export default Button