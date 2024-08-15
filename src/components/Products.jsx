import React from 'react'
import Product from './Product'

const Products = () => {

    const data = [
        {title:"arqitel",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe commodi distinctio voluptatum sint praesentium cum, vel minus! Fugiat, hic.",live:false,project:true},
        {title:"YIR",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe commodi distinctio vol.",live:false,project:true},
        {title:"TTR 2022",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe commodi distinctio voluptatum sint praesentium cum, vel minus! Fugiat, hic hf hfhg ghkj ghfhg .",live:true,project:true},
        {title:"yahoo!",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe commodi distinctio voluptatum sint praesentium cum, ve.",live:false,project:true},
    ]

  return (
    <div className='mt-12 w-full'>
        {data.map((elem,i) => (
            <Product key={i} info={elem} />
        ))}
    </div>
  )
}

export default Products

