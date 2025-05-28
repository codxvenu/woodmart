import React from 'react'
import { urbanist } from '@/pages/_app'
const billingDetails = () => {
  return (
    <div className='lg:w-1/2 lg:ml-[25%]'>
      <span className='flex p-5 bg-[rgba(16,16,16,0.05)] rounded-xl max-h-[66px]'>
        <h1 className={`${urbanist.className} text-[#242424] font-bold flex items-center lg:text-2xl text-[20px] gap-3`}> <p className='py-2 px-4  rounded-full bg-[#f59a57] text-white text-[16px]'>1</p> Billing Details</h1>
      </span>
      <form action="" className='w-full mt-5 lg:grid grid-cols-2 flex flex-col  gap-5'>
        <div className='grid gap-1 w-full'>

        <label htmlFor="name">Name <small className='text-[#E01020]'>*</small></label>
        <input type="text" name="name" id="" className=' border-[1px] border-[rgba(0,0,0,0.1)] p-2 rounded-4xl'/>
        </div>
        <div className='grid gap-1'>

        <label htmlFor="name">Name <small className='text-[#E01020]'>*</small></label>
        <input type="text" name="name" id="" className='w-full border-[1px] border-[rgba(0,0,0,0.1)] p-2 rounded-4xl'/>
        </div>
        <div className='grid gap-1'>

        <label htmlFor="name">Name <small className='text-[#E01020]'>*</small></label>
        <input type="text" name="name" id="" className='w-full border-[1px] border-[rgba(0,0,0,0.1)] p-2 rounded-4xl'/>
        </div>
        <div className='grid gap-1'>

        <label htmlFor="name">Name <small className='text-[#E01020]'>*</small></label>
        <input type="text" name="name" id="" className='w-full border-[1px] border-[rgba(0,0,0,0.1)] p-2 rounded-4xl'/>
        </div>
        <div className='grid gap-1 w-full'>

        <label htmlFor="name">Name <small className='text-[#E01020]'>*</small></label>
        <input type="text" name="name" id="" className=' border-[1px] border-[rgba(0,0,0,0.1)] p-2 rounded-4xl'/>
        </div>
        <div className='grid gap-1'>

        <label htmlFor="name">Name <small className='text-[#E01020]'>*</small></label>
        <input type="text" name="name" id="" className='w-full border-[1px] border-[rgba(0,0,0,0.1)] p-2 rounded-4xl'/>
        </div>
        <div className='grid gap-1'>

        <label htmlFor="name">Name <small className='text-[#E01020]'>*</small></label>
        <input type="text" name="name" id="" className='w-full border-[1px] border-[rgba(0,0,0,0.1)] p-2 rounded-4xl'/>
        </div>
        <div className='grid gap-1'>

        <label htmlFor="name">Name <small className='text-[#E01020]'>*</small></label>
        <input type="text" name="name" id="" className='w-full border-[1px] border-[rgba(0,0,0,0.1)] p-2 rounded-4xl'/>
        </div>
        <div className='grid gap-1 col-span-2'>

        <label htmlFor="name">Order notes <small className='text-[#E01020]'>(optional)</small></label>
        <textarea type="text" name="name" id="" placeholder='Notes about your order, e.g. special notes for delivery.' className='w-full border-[1px] border-[rgba(0,0,0,0.1)] min-h-[190px] p-[15px] text-[#777777] rounded-[20px]'/>
        </div>

        
      </form>
    </div>
  )
}

export default billingDetails
