import React from 'react'
import { urbanist } from '@/pages/_app'
const Side_bar = () => {
  return (
      <div className={`${urbanist.className}`}>
                        <span style={{background : "url(/shop_bg.jpg)",backgroundPosition : "center top"}} className='block w-full !bg-cover min-[1200px]:h-[294px] text-[78px] text-white'>
                        <span className='min-[1200px]:mx-[60.5px] min-[1200px]:px-[15px] min-[1200px]:py-[100px] p-[15px] flex items-center gap-2 h-full max-[768px]:backdrop-blur-[5px]'>
                        <h1 className='font-bold min-[1200px]:text-[78px] text-[36px]'>My account</h1>
                        </span>
                        </span>
    </div>
  )
}

export default Side_bar
