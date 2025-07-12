import { urbanist,workSans } from '@/pages/_app'
import React from 'react'

const about_brand = () => {
  return (
    <div className={`${workSans.className} min-[1200px]:p-[50px_72px] p-[20px_5px] text-[15px]`}>
      <span className='p-[20px] rounded-2xl bg-white block'>

     
      <h1 className={`${urbanist.className} text-[22px] text-[#242424] font-bold mb-4`}>About brand</h1>
      <div className='grid grid-cols-2 '>
        <img className='rounded-2xl w-[650px] h-[430px] object-cover' src="https://woodmart.xtemos.com/furniture2/wp-content/uploads/sites/11/2023/04/about-brand-3.jpg.webp" alt="" />
        <div className='flex flex-col gap-9 p-2'>
        <span className=' text-2xl flex justify-between w-[95%]'><h1 className={`${urbanist.className} text-[26px] text-[#242424] font-bold`}>KETTAL</h1> <small className='text-[15px] font-medium text-[#333333] flex items-center gap-2 sub'><a>Share:</a> <a href="" className=''>
          <i className="ri-facebook-fill"></i>
          </a>
          <a href="">

            <i className="ri-twitter-x-line"></i>
          </a>
          <a href="">

            <i className="ri-pinterest-fill"></i>
          </a>
          <a href="">

            <i className="ri-linkedin-fill"></i>
          </a>  <button className="bg-[rgb(245,154,87)] p-[5px_20px] text-[13px] rounded-[20px] text-white min-h-[42px]">
           Contact us
          </button></small></span>
          <h2 className='text-[#777777] text-[16px] mt-[-30px]'>Sacramento / USA</h2>
          <p className='text-[#777777]'>The company reinterprets tradition by calling upon international designers to work with them and developing new technologies and materials to guarantee innovative and surprising results. Passion is the engine that drives the brand.</p>
         <ul className='grid grid-cols-4 items-center justify-center bicons'>
            <li><span>
<img src="/wd-slide-icon-chair-1.svg" alt="" />
            </span>
                <h1>Chairs</h1>
         </li>
            <li><span><img src="/wd-furniture-tables-primary.svg" alt="" /></span><h1>Chairs</h1>
         </li>
            <li><span><img src="/wd-furniture-armchairs-primary.svg" alt="" /></span><h1>Chairs</h1>
         </li>
            <li><span><img src="/wd-furniture-storage-primary.svg" alt="" /></span><h1>Chairs</h1>
         </li>
         </ul>
          <p className='text-[#777777]'>Nordic design inspires HAY's taste for clean lines, simple geometric shapes, and quality materials like wood, metal, and textiles. Anyway, you still use Lorem Ipsum and rightly so, as it will always have a place in the web workers toolbox.
            </p>
        </div>
      </div>
       </span>
    </div>
  )
}

export default about_brand
