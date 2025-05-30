import React,{ useContext, useEffect,useState } from 'react'
import Loading from '@/components/other/loading'
import Head from '@/components/product_category/head'
import Filter_bar from '@/components/product_category/filter_bar'
import Data_listing from '@/components/product_category/data_listing'
import Err404 from '@/components/other/404'
import { urbanist } from '@/pages/_app'
import { Product } from '@/context/ProductContext';

const product_category = () => {
  const {product,setProduct} = useContext(Product);
  const[loading, setLoading] = useState(true);

 useEffect(() => {
    // Trigger spinner on products change
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false); // Hide after short delay (simulate fetch/render time)
    }, 500); // Adjust time as needed

    return () => clearTimeout(timer); // Clean up
  }, [product]);
  return (
    <>
    
    <div className={`min-h-screen ${product !== `null` && product ? "block" : "hidden"}`} style={{backgroundImage : "url(/bg.jpg)"}}>
   
   {loading && (
  <Loading/>
)}
{!loading && 
 <>
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
           </>
}
   </div>
   <span className={` ${product !== `null` && product ? "hidden" : "block"}`}>
    <Err404/>
   </span>
     
 
    </>
  )
}

export default product_category
