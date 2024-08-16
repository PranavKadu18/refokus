import { motion } from 'framer-motion';
import React from 'react'
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Card = ({data,w}) => {
  return (
    <motion.div whileHover={{backgroundColor:"#7443ff"}} className={`${w} flex flex-col justify-between p-4 rounded-xl bg-zinc-700`}>
        <motion.div whileHover={{scale:0.96}} className='w-full h-full flex flex-col justify-between'>
          <div>
              <div className='w-full flex justify-between items-center'>
                  <h1 className='text-sm capitalize'>{data.t1}</h1>
                  <MdOutlineArrowRightAlt/>
              </div>
              <h1 className='text-2xl w-36 mt-4 capitalize'>{data.t2}</h1>
          </div>
          <div>
              <h1 className='mt-16 w-fit text-7xl capitalize font-semibold'>{data.body}</h1>
              {data.start && <button className='mt-4 px-4 py-1 rounded-full border capitalize text-sm border-zinc-50'>{data.btn}</button>}
              {data.para && <p className='text-xs text-zinc-300'>{data.p}</p>}
          </div>
        </motion.div>
    </motion.div>
  )
}

export default Card