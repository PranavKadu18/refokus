import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'

const Products = () => {

    const data = [
        {title:"arqitel",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe commodi distinctio voluptatum sint praesentium cum, vel minus! Fugiat, hic.",live:false,project:true,color:"hover:bg-[#5355EE]"},
        {title:"YIR",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe commodi distinctio vol.",live:false,project:true,color:"hover:bg-[#382865]"},
        {title:"TTR 2022",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe commodi distinctio voluptatum sint praesentium cum, vel minus! Fugiat, hic hf hfhg ghkj ghfhg .",live:true,project:true,color:"hover:bg-[#4A576B]"},
        {title:"yahoo!",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe commodi distinctio voluptatum sint praesentium cum, ve.",live:false,project:true,color:"hover:bg-[#7E1FFF]"},
    ]

    const [pos,setpos] = useState(0);

    const mover = (idx) => {
      setpos(idx * 15) //0,15,30,45 
    }

  return (
    <div className='mt-12 pt-7 w-full relative'>
        {data.map((elem,i) => (
            <Product key={i} mover={mover} idx={i} info={elem} />
        ))}
        <div className='absolute top-0 w-full h-[60rem] pointer-events-none'>
            <motion.div initial={{y:0,x:"-50%"}} animate={{y:pos + "rem",x:"-50%"}} transition={{ease:[0.76, 0, 0.24, 1],duration:0.5}} className='frame absolute w-1/3 h-[15rem] left-[44%] rounded-xl overflow-hidden'> 
                <motion.div animate={{y:-pos + "rem"}} transition={{ease:[0.76, 0, 0.24, 1],duration:0.5}} className='w-full h-full'>
                  <video autoPlay muted loop className='w-full h-full rounded-xl' src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/arqitel-169.webm"></video>
                </motion.div>
                <motion.div animate={{y:-pos + "rem"}} transition={{ease:[0.76, 0, 0.24, 1],duration:0.5}} className='w-full h-full'>
                  <video autoPlay muted loop className='w-full h-full rounded-xl' src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/yir2021-169.webm"></video>
                </motion.div>
                <motion.div animate={{y:-pos + "rem"}} transition={{ease:[0.76, 0, 0.24, 1],duration:0.5}} className='w-full h-full'>
                  <video autoPlay muted loop className='w-full h-full rounded-xl' src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/cula-169.webm"></video>
                </motion.div>
                <motion.div animate={{y:-pos + "rem"}} transition={{ease:[0.76, 0, 0.24, 1],duration:0.5}} className='w-full h-full'>
                  <video autoPlay muted loop className='w-full h-full rounded-xl' src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/yahoo-169.webm"></video>
                </motion.div>
            </motion.div>
        </div>
    </div>
  )
}

export default Products




