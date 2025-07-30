import React, { useContext, useEffect, useState } from 'react'
import { urbanist } from '@/pages/_app'
import { Product } from '@/context/ProductContext'
const billingDetails = () => {
  const {address} = useContext(Product);
  const[addr,setAddr] = useState({})
  useEffect(()=>{
     setAddr(address);
     console.log(address);
     
  },[address])
  return (
    <div className='lg:w-1/2 lg:ml-[25%]'>
      <span className='flex p-5 bg-[rgba(16,16,16,0.05)] rounded-xl max-h-[66px]'>
        <h1 className={`${urbanist.className} text-[#242424] font-bold flex items-center lg:text-2xl text-[20px] gap-3`}> <p className='py-2 px-4  rounded-full bg-[#f59a57] text-white text-[16px]'>1</p> Billing Details</h1>
      </span>
      <form action="" className='w-full mt-5 lg:grid grid-cols-2 flex flex-col  gap-5'>
        <div className='grid gap-1 w-full'>

        <label htmlFor="name">First name  <small className='text-[#E01020]'>*</small></label>
        <input type="text" name="First" value={addr.first} id="" className='border-[1px] border-[rgba(0,0,0,0.1)] p-2 rounded-4xl outline-0 px-4 '/>
        </div>
        <div className='grid gap-1'>

        <label htmlFor="name">Last name <small className='text-[#E01020]'>*</small></label>
        <input type="text" name="Last" value={addr.last} id="" className='w-full border-[1px] border-[rgba(0,0,0,0.1)] p-2 rounded-4xl outline-0 px-4'/>
        </div>
        <div className='grid gap-1'>

        <label htmlFor="name">Phone <small className='text-[#E01020]'>*</small></label>
        <input type="text" name="Phone" value={addr.phone} id="" className='w-full border-[1px] border-[rgba(0,0,0,0.1)] p-2 rounded-4xl outline-0 px-4'/>
        </div>
        <div className='grid gap-1'>

        <label htmlFor="name">Email address  <small className='text-[#E01020]'>*</small></label>
        <input type="text" name="Email" value={addr.email} id="" className='w-full border-[1px] border-[rgba(0,0,0,0.1)] p-2 rounded-4xl outline-0 px-4'/>
        </div>
        <div className='grid gap-1 w-full'>

        <label htmlFor="name">Country / Region <small className='text-[#E01020]'>*</small></label>
        <input type="text" name="Country" value={addr.country} id="" className=' border-[1px] border-[rgba(0,0,0,0.1)] p-2 rounded-4xl outline-0 px-4'/>
        </div>
        <div className='grid gap-1'>

        <label htmlFor="name">Town / City <small className='text-[#E01020]'>*</small></label>
        <input type="text" name="Town" value={addr.town} id="" className='w-full border-[1px] border-[rgba(0,0,0,0.1)] p-2 rounded-4xl outline-0 px-4'/>
        </div>
        <div className='grid gap-1'>

        <label htmlFor="name">Street address <small className='text-[#E01020]'>*</small></label>
        <input type="text" name="Street" value={addr.street} id="" className='w-full border-[1px] border-[rgba(0,0,0,0.1)] p-2 rounded-4xl outline-0 px-4'/>
        </div>
        <div className='grid gap-1'>

        <label htmlFor="name">PIN Code <small className='text-[#E01020]'>*</small></label>
        <input type="text" name="PIN" value={addr.pin} id="" className='w-full border-[1px] border-[rgba(0,0,0,0.1)] p-2 rounded-4xl outline-0 px-4'/>
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
