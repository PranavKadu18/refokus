import React, { useState } from 'react'
import { useMotionValueEvent, useScroll } from "framer-motion"

const Work = () => {

    const [images,setimages] = useState([
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",top:"50%",left:"50%",isActive:false},
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",top:"56%",left:"44%",isActive:false},
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",top:"44%",left:"56%",isActive:false},
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",top:"66%",left:"50%",isActive:false},
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",top:"40%",left:"40%",isActive:false},
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",top:"70%",left:"60%",isActive:false}
    ])

    const { scrollYProgress } = useScroll()

    scrollYProgress.on("change",(data) => {
        
        switch(Math.floor(data*100)){
            case 0: 
                scrolanime([]);
                break;

            case 1:
                scrolanime([0]);
                break;

            case 3:
                scrolanime([0,1]);
                break;

            case 5:
                scrolanime([0,1,2]);
                break;

            case 7:
                scrolanime([0,1,2,3]);
                break;

            case 9:
                scrolanime([0,1,2,3,4]);
                break;

            case 11:
                scrolanime([0,1,2,3,4,5]);
                break;
        }
    })

    const scrolanime = (arr) => {
        setimages((prev) => (
            prev.map((item,i) => (
                arr.indexOf(i) == -1 ? {...item,isActive:false} : {...item,isActive:true}
            ))
        ))
    }

    


  return (
    <div className='w-full relative mt-12'>
        <h1 className='max-w-screen-xl text-center font-semibold tracking-tight select-none text-[30vw] leading-none'>work</h1>
        <div className='absolute top-20 w-[65vw] min-h-60 mx-60'>
            {images.map((elem,idx) => (
                elem.isActive && <img key={idx} src={elem.url} style={{top:elem.top,left:elem.left}} className='w-52 h-52 absolute translate-x-[-50%] translate-y-[-50%] rounded-md' alt="" />
            ))}
        </div>
    </div>
  )
}

export default Work