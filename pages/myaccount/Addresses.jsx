import Side_bar from '@/components/account/Side_bar'
import { urbanist, workSans } from '@/pages/_app'
import React from 'react'
import Head from '@/components/account/head'
const addresses = () => {
  return (
    <>
    <Head/>
     <div className={`grid grid-cols-[1fr_3fr] ${workSans.className} lg:p-[40px_70px] p-[20_15px]`} style={{backgroundImage : "url(/bg.jpg)"}}>
              <Side_bar tab={3} />
              <div className='px-8'>
                <p className='mb-[30px] text-[#777777] text-[16.5px]'>
                    The following addresses will be used on the checkout page by default.
                </p>
                <div className={`${workSans.className} text-[16.5px] flex `}>
                    <span className='block w-1/2'>
                        <h1 className={`${urbanist.className} mb-[20px] text-[#242424] text-[22px] font-bold`}>
                            Billing address
                        </h1>
                        <p className={` text-[#333333] mb-[20px]`}><i className="ri-edit-box-line"></i> Edit Billing address</p>
                        <ol className='flex flex-col items-start text-[#777777] italic'>
                            <li>venu sharma</li>
                            <li>st 3</li>
                            <li>ludh 141001</li>
                            <li>India</li>
                        </ol>
                    </span>
                     <span className='block w-1/2'>
                        <h1 className={`${urbanist.className} mb-[20px] text-[#242424] text-[22px] font-bold`}>
                            Shipping address
                        </h1>
                        <p className={` text-[#333333] mb-[20px]`}><i className="ri-edit-box-line"></i> Edit Billing address</p>
                        <ul className='flex flex-col items-start text-[#777777] italic'>
                            <li>venu sharma</li>
                            <li>st 3</li>
                            <li>ludh 141001</li>
                            <li>India</li>
                        </ul>
                    </span>
                                    </div>
              </div>
    </div>
    </>
  )
}

export default addresses
