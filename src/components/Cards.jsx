import React from 'react'
import Card from './Card'

const Cards = () => {

    const data = [
        {t1:"up next : culture",t2:"who we are",body:"",footer:"explore what drives our team",btn:"contact",p:"lorem safkjs asfhka sajfhak s aj",start:false,para:true},
        {t1:"get in touch",t2:"lets get to it togeather",body:"start a project",footer:"contact us",btn:"contact",p:"lorem asdf a asf jahf ae fadjfh",start:true,para:false}
    ];

  return (
    <div className='max-w-screen-lg min-h-[40vh] flex gap-1 p-3 mx-auto mt-40 rounded-xl'>
        <Card data={data[0]} w={"w-[28%]"} />
        <Card data={data[1]} w={"w-[72%]"} />
    </div>
  )
}

export default Cards
