import Side_bar from '@/components/account/Side_bar'
import { workSans } from '@/pages/_app'
import React from 'react'
import Head from '@/components/account/head'
const Dashboard = () => {
  return (
    <>
    <Head/>
     <div className={`grid grid-cols-[1fr_3fr] ${workSans.className} lg:p-[40px_70px] p-[20_15px]`} style={{backgroundImage : "url(/bg.jpg)"}}>
              <Side_bar tab={0} />
    <div className={`px-8 text-[#777777] ${workSans.className}`}>
      <span className='grid gap-[30px]'><h1>Hello venu (not venu? <span className='text-[#333333] font-medium'>Log out</span> )</h1>
        <h2>From your account dashboard you can view your <span className='text-[#333333] font-medium'>
           recent orders </span> , manage your <span className='text-[#333333] font-medium'>shipping and billing addresses</span> , and <span className='text-[#333333] font-medium'>edit your password and account details.</span></h2>
      </span>
      <ul className='dash mt-[30px] cursor-pointer'>
        <li>
            <i className="ri-file-check-line"></i>
            Orders
        </li>
        <li>
            <i class="ri-download-2-line"></i>
            Downloads
        </li>
        <li>
            <i class="ri-map-pin-line"></i>
            Addresses
        </li>
        <li>
           <i class="ri-account-circle-line"></i>
            Account details
        </li>
        <li>
            <i class="ri-heart-line"></i>
            Wishlist
        </li>
        <li>
            <i class="ri-logout-box-r-line"></i>
            Logout
        </li>
      </ul>
    </div>
    </div>
    </>
  )
}

export default Dashboard
