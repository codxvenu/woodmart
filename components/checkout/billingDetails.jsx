import React, { useContext, useEffect, useState } from 'react'
import { urbanist } from '@/pages/_app'
import { Product } from '@/context/ProductContext'

const BillingDetails = () => {
  const { address } = useContext(Product)
  const [addr, setAddr] = useState({
      first : "",
      last : "",
      email : "",
      phone : "",
      street : "",
      state : "",
      country : "",
      pin : "",
      town : "",
      company : "",
  })

  useEffect(() => {
    setAddr(address)
    console.log(address)
  }, [address])

  const handleChange = (e) => {
    const { name, value } = e.target
    setAddr((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className='lg:w-1/2 lg:ml-[25%]'>
      <span className='flex p-5 bg-[rgba(16,16,16,0.05)] rounded-xl max-h-[66px]'>
        <h1 className={`${urbanist.className} text-[#242424] font-bold flex items-center lg:text-2xl text-[20px] gap-3`}>
          <p className='py-2 px-4 rounded-full bg-[#f59a57] text-white text-[16px]'>1</p> Billing Details
        </h1>
      </span>
      <form className='w-full mt-5 lg:grid grid-cols-2 flex flex-col gap-5'>
        <div className='grid gap-1 w-full'>
          <label>First name <small className='text-[#E01020]'>*</small></label>
          <input type="text" name="first" value={addr?.first || ''} onChange={handleChange} className='border p-2 rounded-4xl px-4' />
        </div>
        <div className='grid gap-1'>
          <label>Last name <small className='text-[#E01020]'>*</small></label>
          <input type="text" name="last" value={addr?.last || ''} onChange={handleChange} className='border p-2 rounded-4xl px-4' />
        </div>
        <div className='grid gap-1'>
          <label>Phone <small className='text-[#E01020]'>*</small></label>
          <input type="text" name="phone" value={addr?.phone || ''} onChange={handleChange} className='border p-2 rounded-4xl px-4' />
        </div>
        <div className='grid gap-1'>
          <label>Email address <small className='text-[#E01020]'>*</small></label>
          <input type="email" name="email" value={addr?.email || ''} onChange={handleChange} className='border p-2 rounded-4xl px-4' />
        </div>
        <div className='grid gap-1'>
          <label>Country / Region <small className='text-[#E01020]'>*</small></label>
          <input type="text" name="country" value={addr?.country || ''} onChange={handleChange} className='border p-2 rounded-4xl px-4' />
        </div>
        <div className='grid gap-1'>
          <label>Town / City <small className='text-[#E01020]'>*</small></label>
          <input type="text" name="town" value={addr?.town || ''} onChange={handleChange} className='border p-2 rounded-4xl px-4' />
        </div>
        <div className='grid gap-1'>
          <label>Street address <small className='text-[#E01020]'>*</small></label>
          <input type="text" name="street" value={addr?.street || ''} onChange={handleChange} className='border p-2 rounded-4xl px-4' />
        </div>
        <div className='grid gap-1'>
          <label>PIN Code <small className='text-[#E01020]'>*</small></label>
          <input type="text" name="pin" value={addr?.pin || ''} onChange={handleChange} className='border p-2 rounded-4xl px-4' />
        </div>
        <div className='grid gap-1 col-span-2'>
          <label>Order notes <small className='text-[#E01020]'>(optional)</small></label>
          <textarea
            name="notes"
            placeholder='Notes about your order, e.g. special notes for delivery.'
            onChange={handleChange}
            className='border min-h-[190px] p-[15px] text-[#777777] rounded-[20px]'
            value={addr?.notes || ''}
          />
        </div>
      </form>
    </div>
  )
}

export default BillingDetails
