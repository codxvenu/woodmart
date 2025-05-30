import React, { useEffect } from 'react'

import Head from '@/components/product/head'
import Content from '@/components/product/content'
import Data from '@/components/product/data'
import About_brand from '@/components/product/about_brand'
import Review from '@/components/product/review'
import Cards from '@/components/product/cards'
import Loading from '@/components/other/loading'
const product = () => {
  const [loading, setLoading] = React.useState(true);
  useEffect(()=>{
    setLoading(true);
    const timer = setTimeout(()=>{
      setLoading(false);
      clearTimeout(timer);
    },500)
    
  },[])
  return (
    <>
    {loading && <Loading/>}
    <div className='min-h-screen'  style={{backgroundImage : "url(/bg.jpg)"}}>
    {!loading && <>
    
      <Head/>
      <Content/>
    
        <Data/>

        {/* <About_brand/> */}
        <Review/>
        <Cards/>
    </>
    
}
    </div>
    </>
  )
}

export default product
