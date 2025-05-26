import React from 'react'
import Head from '@/components/product_category/head'
import Filter_bar from '@/components/product_category/filter_bar'
import Data_listing from '@/components/product_category/data_listing'
import Card from '@/components/product_category/card'
import { urbanist } from '@/pages/_app'

const product_category = () => {
  return (
    <div style={{backgroundImage : "url(/bg.jpg)"}}>
    
    <Head/>
 
      <div
           className={`${urbanist.className} min-[1200px]:p-[70px_72px] p-[20px_5px] min-[1200px]:grid grid-cols-[1fr_4fr] `}
         >
          <span className='max-[1200px]:hidden'>

        <Filter_bar/>
          </span>
        <span>

        <Data_listing/>
        {/* <Card/> */}
        </span>
    </div>
       </div>
  )
}

export default product_category
