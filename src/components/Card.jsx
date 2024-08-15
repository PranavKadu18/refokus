import React from 'react'
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Card = ({data}) => {
  return (
    <div className={`w-${data.w} flex flex-col justify-between p-4 rounded-xl bg-zinc-700 hover:bg-violet-600`}>
        <div>
            <div className='w-full flex justify-between items-center'>
                <h1 className='text-sm capitalize'>{data.t1}</h1>
                <MdOutlineArrowRightAlt/>
            </div>
            <h1 className='text-2xl w-36 mt-4 capitalize'>{data.t2}</h1>
        </div>
        <div>
            <h1 className='mt-16 text-7xl capitalize font-semibold'>{data.body}</h1>
            {data.start && <button className='mt-4 px-4 py-1 rounded-full border capitalize text-sm border-zinc-50'>{data.btn}</button>}
            {data.para && <p className='text-xs text-zinc-300'>{data.p}</p>}
        </div>
    </div>
  )
}

export default Card