import { motion } from 'framer-motion'
import React from 'react'

const Marquee = ({elems,direction}) => {
  return (
    <div className='flex mt-12 whitespace-nowrap overflow-hidden'>
        <motion.div initial={direction == "left" ? {x:0} : {x:"-100%"}} animate={direction == "left" ? {x:"-100%"} : {x:0}} transition={{ease:"linear",duration:20,repeat: Infinity}} className='inline-block flex flex-shrink-0 pl-12 gap-12'>
          {elems.map((item,i) => (
              <img key={i} className='w-24' src={item} alt="" />
          ))}
        </motion.div>
        <motion.div initial={direction == "left" ? {x:0} : {x:"-100%"}} animate={direction == "left" ? {x:"-100%"} : {x:0}} transition={{ease:"linear",duration:20,repeat: Infinity}} className='inline-block flex flex-shrink-0 pl-12 gap-12'>
          {elems.map((item,i) => (
              <img key={i} className='w-24' src={item} alt="" />
          ))}
        </motion.div>
    </div>
  )
}

export default Marquee
