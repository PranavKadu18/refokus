import React from 'react'

const Stripes = () => {

    var stripe = [
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",n:48},
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",n:2},
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",n:11},
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",n:48},
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",n:2},
        {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",n:11},

    ]

  return (
    <div className='w-full h-16 mt-8 flex flex-wrap'>
        {stripe.map((elem,idx) => (
            <div key={idx} className='py-1 px-8 h-12 w-[16.45vw] border border-zinc-700 flex items-center justify-between'>
                <img className='w-[60%] h-[60%]' src={elem.url} alt="ok" />
                <h1>{elem.n}</h1>
            </div>
        ))}
    </div>
  )
}

export default Stripes