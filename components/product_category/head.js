import React, { useEffect ,useState , useContext } from 'react'
import { Product } from '@/context/ProductContext'
import { urbanist } from '@/pages/_app'
const head = () => {
  const {product} = useContext(Product);
  return (
    <div className={`${urbanist.className}`}>
        <span style={{background : `url(/${product + "_bg.jpg"})`,backgroundPosition : "center top"}} className='block w-full !bg-cover min-[1200px]:h-[294px] text-[78px] text-white'>
        <span className='min-[1200px]:mx-[60.5px] min-[1200px]:px-[15px] min-[1200px]:py-[100px] p-[15px] flex items-center gap-2 h-full'>
        <i className="ri-arrow-left-long-line text-[30px] min-[1200px]:flex hidden"></i>
        <h1 className='font-bold min-[1200px]:text-[78px] text-[36px] capitalize'>{product}</h1>
        </span>
        </span>
     </div>
  )
}

export default head
