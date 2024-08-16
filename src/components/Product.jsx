import React from 'react'
import Button from './Button'

const Product = ({info,mover,idx}) => {
  return (
    <div onMouseOver={()=>mover(idx)} className='w-full h-[15rem] mx-auto py-4'>
        <div className={`h-[10rem] px-40 w-full flex items-center justify-between ${info.color} transition-all duration-500 ease-linear`}>
          <h1 className='capitalize font-regular text-4xl'>{info.title}</h1>
          <div className='h-fit w-1/3'>
              <p className='mb-4 text-md'>{info.description}</p>
              <div className='flex gap-3'>
                  {info.project && <Button name={"Case Study"} />}
                  {info.live && <Button name={"Live Project"} />}
              </div>
          </div>
        </div>
    </div>
  )
}

export default Product