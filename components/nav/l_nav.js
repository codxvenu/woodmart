import {React , useState, useEffect, useContext} from 'react'
import { useRouter } from 'next/router';
import { Product } from '@/context/ProductContext';
const l_nav = () => {
  const router = useRouter();
  const {product, setProduct} = useContext(Product);
  const handleClick = (product) => {
    if(product){
      setProduct(product);
      router.push("/product_category");
    }
  };
  return (
    <div className='lg:flex hidden px-20 py-2 justify-between items-center bg-[rgba(251,250,247,1)]'>
        <ul className="flex text-[14px] l gap-6 cursor-pointer">
                <li className="flex gap-[7px]  font-medium" onClick={()=>{handleClick("Chairs"); }}>
                 <img src="./Chair.svg" alt="" />
                
                  <h1>Chairs</h1>
                </li>
                <li className="flex gap-[7px]  font-medium" onClick={()=>{handleClick("Tables")}}>
                 <img src="table.svg" alt="" />
                  <h1>Tables</h1>
                </li>
                <li className="flex gap-[7px]  font-medium" onClick={()=>{handleClick("Sofas")}}>
                  <img src="/sofas.svg" alt="" />
                  <h1>Sofas</h1>
                </li>
                <li className="flex gap-[7px]  font-medium" onClick={()=>{handleClick("Armchairs")}}>
                  <img src="/armchair.svg" alt="" />
                  <h1>Armchairs</h1>
                </li>
                <li className="flex gap-[7px]  font-medium" onClick={()=>{handleClick("Beds")}}>
                <img src="/bed.svg" alt="" />
                  <h1>Beds</h1>
                </li>
                <li className="flex gap-[7px]  font-medium" onClick={()=>{handleClick("Storage")}}>
                  <img src="/storage.svg" alt="" />
                  <h1>storage</h1>
                </li>
                <li className="flex gap-[7px]  font-medium" onClick={()=>{handleClick("Textile")}}>
                <img src="/textile.svg" alt="" />
                  <h1>textiles</h1>
                </li>
                <li className="flex gap-[7px]  font-medium" onClick={()=>{handleClick("Lighting")}}>
                 <img src="/lighting.svg" alt="" />
                  <h1>lighting</h1>
                </li>
                <li className="flex gap-[7px]  font-medium" onClick={()=>{handleClick("Toys")}}>
               <img src="/toy.svg" alt="" />
                  <h1>Toys</h1>
                </li>
                <li className="flex gap-[7px]  font-medium" onClick={()=>{handleClick("Decor")}}>
              <img src="/decor.svg" alt="" />
                  <h1>Decor</h1>
                </li>
              </ul>
              <span className='p-[5px_10px] bg-[#e0eaf0] rounded-4xl  text-[#333333] max-[1200px]:hidden'><small className='text-[11px] font-[600]'>Free shipping for all orders of $1.300</small></span>
    </div>
  )
}

export default l_nav
