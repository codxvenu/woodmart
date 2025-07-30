import React, { useContext } from 'react'
import { urbanist } from '@/pages/_app';
import Link from 'next/link';
import { Product } from '@/context/ProductContext';

const categories = () => {
    const data = [
        {
          "img": "10063.jpg",
          "pname": "Tables",
          "pquantity": "10"
        },
        {
          "img": "./10064.jpg",
          "pname": "Sofas",
          "pquantity": "10"
        },
        {
          "img": "./10062.jpg",
          "pname": "Chairs",
          "pquantity": "10"
        },
        {
          "img": "./10065.jpg",
          "pname": "Armchairs",
          "pquantity": "10"
        },
        {
          "img": "./10067.jpg",
          "pname": "Storages",
          "pquantity": "2"
        },
        {
          "img": "./10070.jpg",
          "pname": "Toys",
          "pquantity": "0"
        },
        {
          "img": "./10068.jpg",
          "pname": "Textiles",
          "pquantity": "0"
        },
        {
          "img": "./10069.jpg",
          "pname": "Lighting",
          "pquantity": "0"
        },
        {
          "img": "./10071.jpg",
          "pname": "Decor",
          "pquantity": "0"
        },
        {
          "img": "./10066.jpg",
          "pname": "Beds",
          "pquantity": "0"
        }
      ];
      const{setProduct} = useContext(Product)
  return (
    <div className={`max-w-full h-[100%] p-[40px_5px] lg:p-[70px_72px] relative z-10  ${urbanist.className}`}>
    <span >

  <h1 className='text-[22px]  lg:text-[32px] font-bold'>Our categories</h1>
    <small className='text-[#767676] text-[14px] lg:text-[16px]'>Lots of new products and product collections</small>
   
    </span>
   <div className="categories grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 justify-items-center  lg:grid-cols-5 mt-[40px] sm:gap-[10px] lg:gap-[20px] max-[576px]:gap-4">
   {data.map((product, index) => (
    <Link key={index} href={`/product_category/${product.pname}`} onClick={()=>setProduct(product.pname)} className='block w-full'>
  <span
    
    className="z-1 h-[100%] w-[100%] sm:bg-black aspect-square flex flex-col justify-center items-center rounded-full gap-4 group relative overflow-hidden bg-cover bg-center transition-transform duration-500"
    style={{ backgroundImage: `url(${product.img})` }}
  >
    <div className='w-full h-full absolute bg-black/50 transition-opacity duration-300 lg:opacity-0 z-[1] group-hover:opacity-[.5]'></div>
    {/* Zoom-out background effect */}
    <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-90 z-0" style={{ backgroundImage: `url(${product.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>

    {/* Foreground content */}
    <div className="relative z-10 flex flex-col items-center gap-3 max-[640px]:gap-[4px]">
      <h1 className="px-[18px] py-[4px] font-semibold text-[18px] lg:text-[20px] bg-white rounded-[24px] translate-y-[50%] max-[640px]:translate-y-0 group-hover:translate-y-0 transition-all duration-300 ease-in">
        {product.pname}
      </h1>
      <h2 className="text-[15px]  sm:opacity-[100] text-white lg:opacity-0 group-hover:opacity-100 font-[500] transition-opacity duration-300">
        {product.pquantity} products
      </h2>
    </div>
  </span>
  </Link>
))}

   </div>
 </div>
  )
}

export default categories
