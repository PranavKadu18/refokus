import React from 'react'
import { TbLetterW } from "react-icons/tb";

const Footer = () => {
  return (
    <div className='max-w-screen-lg m-auto mt-16 p-8 flex justify-between'>
        <div>
            <h1 className='text-9xl font-semibold'>refokus.</h1>
            <div className='flex items-center gap-4 mt-8'>
                <h1 className='text-xs text-zinc-400 capitalize'>privacy policy</h1>
                <h1 className='text-xs text-zinc-400 capitalize'>cookie policy</h1>
                <h1 className='text-xs text-zinc-400 capitalize'>impressum</h1>
                <h1 className='text-xs text-zinc-400 capitalize'>terms</h1>
            </div>
        </div>
        <div className='flex gap-12 text-xs capitalize'>
            <div className='self-start'>
                <h1>Socials</h1>
                <div className='pt-12 select-none'>
                    <p className='text-zinc-400 hover:text-white'>instagram</p>
                    <p className='text-zinc-400 hover:text-white mt-2'>twitter(X?)</p>
                    <p className='text-zinc-400 hover:text-white mt-2'>Linkdin</p>
                </div>
            </div>
            <div className='self-start'>
                <h1>Site map</h1>
                <div className='pt-12 select-none'>
                    <p className='text-zinc-400 hover:text-white'>home</p>
                    <p className='text-zinc-400 hover:text-white mt-2'>work</p>
                    <p className='text-zinc-400 hover:text-white mt-2'>careers</p>
                    <p className='text-zinc-400 hover:text-white mt-2'>contact</p>
                </div>
            </div>
            <div className='self-center w-40'>
                <p>Refocus is pioneering digital agency driven by design and empowered by technology</p>
                <div className='flex w-fit px-3 items-center gap-3 bg-purple-600 py-2 mt-4'>
                    <TbLetterW />
                    <h1>Enterprice Partner</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer