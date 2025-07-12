import { Product } from '@/context/ProductContext'
import Link from 'next/link';
import React, { useContext } from 'react'

const head = () => {
  const {items,product} = useContext(Product);
  console.log(items,product,"data");
  
  return (
    <div className=' flex justify-between items-center text-[#242424] text-[15px] min-[1200px]:p-[10px_72px] p-[20px_5px] bg-white cursor-pointer'>
        <span><small className='text-[#767676] text-[15px] '>Home / <Link href={`/product_category/${product}`}>{product}</Link></small>  / {items.name}</span>
        <span className='text-[20px] font-light flex items-center gap-1  '><i className="ri-arrow-left-s-line"></i><i className="ri-dashboard-line"></i><i className="ri-arrow-right-s-line"></i></span>


    </div>
  )
}

export default head
