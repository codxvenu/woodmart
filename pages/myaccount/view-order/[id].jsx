import React from 'react'
import Side_bar from '@/components/account/Side_bar'
import Head from '@/components/account/head'
import { urbanist, workSans } from '@/pages/_app'
const viewOrder = () => {
  return (
    < >
    <Head/>
     <div className={`grid grid-cols-[1fr_3fr] ${workSans.className} lg:p-[40px_70px] p-[20_15px]`} style={{backgroundImage : "url(/bg.jpg)"}}>
          <Side_bar/>
          <div className='p-[10px_30px] w-full block'>

          
      <span className='mb-[30px] text-[16.5px] block'>
        Order <span className='text-[#333333] font-semibold'>#2293</span> was placed on <span className='text-[#333333] font-semibold'>June 11, 2025</span> and is currently <span className='text-[#333333] font-semibold'>On hold</span>
      </span>
      <h1 className={`${urbanist.className} text-2xl mb-[20px] font-bold`}>Order details</h1>
      <table className='vorder w-full mb-[30px]'>
        <tfoot>

        <tr>
          <th>Product</th>
          <td>Total</td>
        </tr>
        <tr>
          <th>Curve × 1</th>
          <td className='text-[#f59a57] font-semibold'>$2,800.00</td>
        </tr>
        <tr>
          <th>Subtotal:	</th>
          <td className='text-[#f59a57] font-semibold'>$2,800.00</td>
        </tr>
        <tr>
          <th>Shipping:	</th>
          <td>Local pickup</td>
        </tr>
        <tr>
          <th>Payment method:	</th>
          <td>Direct bank transfer</td>
        </tr>
        <tr>
          <th>Total:	</th>
          <td className='text-[#f59a57] font-semibold'>$2,800.00</td>
        </tr>
        </tfoot>
      </table>
      <span className='w-fit block text-start text-[16.5px] text-[#777777] italic'>
        <h1 className={`${urbanist.className} text-[24px] font-bold text-[#242424] not-italic mb-[30px]`}>Billing Address</h1>
        <ul className='flex flex-col items-start'>
          <li>
            Venu Sharma
          </li>
          <li>
            st 3
          </li>
          <li> 
            ludh 141001
          </li>
          <li> 
            India
          </li>
          <li> 
            8194989323
          </li>
          <li> 
            vasulallu09@gmail.com
          </li>
        </ul>
      </span>
      </div>
    </div>
    </>
  )
}

export default viewOrder
