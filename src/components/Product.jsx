import React from 'react'
import Button from './Button'

const Product = ({info}) => {
  return (
    <div className='max-w-screen-lg min-h-40 mx-auto p-4 flex items-center justify-between'>
        <h1 className='capitalize font-regular text-4xl'>{info.title}</h1>
        <div className='h-fit w-1/3'>
            <p className='mb-4 text-md'>{info.description}</p>
            <div className='flex gap-3'>
                {info.project && <Button name={"Case Study"} />}
                {info.live && <Button name={"Live Project"} />}
            </div>
        </div>
    </div>
  )
}

export default Product