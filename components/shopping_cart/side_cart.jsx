import { urbanist, workSans } from '@/pages/_app'
import React from 'react'

const side_cart = () => {
  return (
    <div className={`grid grid-cols-[1fr_340px] fixed w-screen h-screen top-0 ${workSans.className}`}>
      <div className='bg-[rgba(0,0,0,0.7)]'></div>
      <div className='bg-white h-screen w-full flex flex-col justify-between'>
        <span>
        <span className='flex justify-between w-full p-[20px_15px] text-[#333333] text-[15px] font-semibold items-center border-b-[1px]  border-b-[rgba(0,0,0,0.105)]'><h1 className={`text-[19.5px] font-bold text-[#242424] ${urbanist.className}`}>Shopping cart</h1>
        <span className='flex items-center gap-2'><i class="ri-close-large-line font-extralight text-[16px]"></i>Close</span>
        </span>
        <ul><li className='grid grid-cols-[1fr_3fr_.2fr] p-[15px] gap-4'>
            <img src="https://woodmart.xtemos.com/furniture2/wp-content/uploads/sites/11/2023/04/wd-furniture-tables-prod-13-1.jpg" alt="" />
            <span className='flex flex-col justify-start  gap-2'><h2 className={`text-start text-[15px] ${urbanist.className} font-bold`}>Giro LR</h2>
            <small className='text-start text-[#bbb] flex gap-2 text-[13.5px]'>26 x <h3 className='font-semibold text-[rgb(245,154,87)]'>$449.0</h3></small></span>
            <i class="ri-close-line text-[#bbb]"></i>
            </li></ul>

        </span>
            <span className='flex flex-col'>
               <span className='flex justify-between w-full p-[20px_15px] text-[#333333] text-[15px] font-semibold items-center border-y-[1px]  border-y-[rgba(0,0,0,0.105)]'><h1 className={`text-[19.5px] font-bold text-[#242424] ${urbanist.className}`}>Subtotal:</h1>
       <h1 className={`text-[19.5px] font-bold text-[#f59a57] ${urbanist.className}`}>$12,123.00</h1>
        </span>
        <span className='p-[15px] text-[#777777]'>
          <h2>Your order qualifies for free shipping!</h2>
          <div className="w-full h-[10px] rounded-4xl mt-4 bg-[rgb(245,154,87)] bg-[length:15px_15px] bg-repeat bg-[linear-gradient(135deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)]"></div>
<button className='w-full text-[#242424] bg-[rgb(247,247,247)] min-h-[42px] rounded-4xl my-2 text-[13px] font-medium'>View Cart</button>
        <button className='w-full bg-[rgb(245,154,87)] text-white min-h-[42px] rounded-4xl mb-2 text-[13px] font-medium'>Checkout</button>
        </span>
       
            </span>
      </div>
    </div>
  )
}

export default side_cart
