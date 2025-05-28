import React from 'react'
import Head from '@/components/product/head'
import Content from '@/components/product/content'
import Data from '@/components/product/data'
import About_brand from '@/components/product/about_brand'
import Review from '@/components/product/review'
import Cards from '@/components/product/cards'
const product = () => {
  return (
    <div   style={{backgroundImage : "url(/bg.jpg)"}}>
      <Head/>
      <Content/>
    
        <Data/>

        {/* <About_brand/> */}
        <Review/>
        <Cards/>
    
    </div>
  )
}

export default product
