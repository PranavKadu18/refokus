import React from 'react'

const Marquee = ({elems}) => {
  return (
    <div className='flex mt-12 gap-12 whitespace-nowrap overflow-x-auto'>
        {elems.map((item,i) => (
            <img className='w-24' src={item} alt="" />
        ))}
        {elems.map((item,i) => (
            <img className='w-24' src={item} alt="" />
        ))}
    </div>
  )
}

export default Marquee
