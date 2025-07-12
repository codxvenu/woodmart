import React from 'react'
import { urbanist } from '@/pages/_app'
import { useRouter } from 'next/router'
import Link from 'next/link';
const err404 = () => {
      const router = useRouter();
  return (
    <div>
       <div className='relative w-full py-[40px] max-[768px]:px-[20px] h-[70vh] flex flex-col justify-center'> 
    <div className='relative'>
      
    <span className='block absolute top-1/2 left-1/2 text-[#f1f1f1] translate-x-[-50%] translate-y-[-50%] lg:text-[20em] text-[10em] leading-[1] font-bold z-10'>404</span>
    <h1 className='p-[1.5em_0] font-extrabold text-center uppercase lg:text-[4.2vw] text-[32px] text-[#f59a57] z-20 relative'>Not Found</h1>
    </div>
    <span className='flex gap-8 flex-col lg:mt-8 items-center text-center'><h1 className={`${urbanist.className} lg:text-[28px] text-[18px]  font-bold`}>This is somewhat embarrasing,isn't it?</h1>
      <h2 className='text-[16.5px] text-[#777777]'>It looks like nothing was found at this location. Maybe try Going
         <Link href="/"></Link>
         <a className={` ${urbanist.className} text-[#f59a57] font-bold underline cursor-pointer`}>Home</a>
         
         </h2>
    </span>
   </div>
    </div>
  )
}

export default err404
