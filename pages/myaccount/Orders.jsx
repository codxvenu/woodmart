import Side_bar from '@/components/account/Side_bar'
import React from 'react'
import Head from '@/components/account/head'
import { workSans } from '../_app'
import Link from 'next/link'
const Orders = () => {
  return (
    <>
      <Head/>
       <div className={`grid grid-cols-[1fr_3fr] ${workSans.className} lg:p-[40px_70px] p-[20_15px]`} style={{backgroundImage : "url(/bg.jpg)"}}>
                 <Side_bar tab={1} />   
    <div className='order w-full p-[10px_30px]'>
      <table className='w-full'>
        <thead>
            <tr>
                <th>Order</th>
                <th>Date</th>
                <th>Status</th>
                <th>Total</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>#2293</td>
                <td>June 11, 2025</td>
                <td>On hold</td>
                <td><span>$2,800.00 </span>for 1 item</td>
                <td><Link href={`/myaccount/view-order/1`}><button className='bg-[#f59a57] text-white rounded-3xl'>View</button>
                </Link></td>
            </tr>
        </tbody>
      </table>
    </div>
    </div>
    </>
  )
}

export default Orders
