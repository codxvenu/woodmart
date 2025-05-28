import React from 'react'
import Head from '@/components/checkout/head'
import Billing from '@/components/checkout/billingDetails'
import Order from '@/components/checkout/order'
import PayDetails from '@/components/checkout/payDetails'
const checkout = () => {
  return (
    <div className='min-[1200px]:p-[40px_72px] p-[10px_15px] relative z-[1000] mt-[-56px] bg-white'>
      <Head/>
      <Billing/>
      <Order/>
      <PayDetails/>

    </div>
  )
}

export default checkout
