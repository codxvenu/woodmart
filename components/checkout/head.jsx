import { urbanist, workSans } from '@/pages/_app'
import React from 'react'

const head = () => {
  return (
    <div className='flex flex-col items-center  '>
      <img className="w-[210px] h-[40px] lg:max-w-[210px] max-w-[179px]" src="./10007.svg" decoding="async"/>
    <span className={`${workSans.className} flex gap-2 text-[#242424] font-[500] lg:p-3 text-[14.7px] max-[768px]:my-2`}>Returning customer?<h3 className='text-[#f59a57] underline decoration-1 decoration-[#f59a57]'>Click here to login</h3></span>
    <span className={`${workSans.className} flex max-[768px]:flex-col items-center gap-2 text-[#242424] font-bold p-3`}><h2>Have a coupon?</h2><h3 className='text-[#f59a57] underline decoration-1 decoration-[#f59a57]'>Click here to enter your code</h3></span>
    </div>
  )
}

export default head
