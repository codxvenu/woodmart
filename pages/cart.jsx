import React, { useContext } from 'react'
import Cart from '@/components/shopping_cart/cart'
import { Product } from '@/context/ProductContext'
import { urbanist } from './_app'
import Link from 'next/link'

const cart = () => {
  const{cart,setProduct} = useContext(Product)
  return (
    <>
    
    
    <div className='min-[1200px]:p-[40px_72px] p-[20px_15px] ' style={{backgroundImage : "url(/bg.jpg)"}}>
           {cart.length === 0 && 
           <>
 <div className={`${urbanist.className} m-[-40px_-72px]`}>
              <span style={{background : "url(./shop_bg.jpg)",backgroundPosition : "center top"}} className='block w-full !bg-cover min-[1200px]:h-[294px] text-[78px] text-white'>
              <span className='min-[1200px]:mx-[60.5px] min-[1200px]:px-[15px] min-[1200px]:py-[100px] p-[15px] flex items-center gap-2 h-full max-[768px]:backdrop-blur-[5px]'>
              <h1 className='font-bold min-[1200px]:text-[78px] text-[36px] capitalize'>Cart</h1>
              </span>
              </span>
           </div>
                <div className='m-[-40px_-72px]'>
                        <span className='flex flex-col justify-center items-center mt-[5vw]'>
                        <i className="ri-shopping-cart-line text-[rgba(0,0,0,0.07)] text-[180px]"></i>
                        <h1 className={`text-[48px] text-[#242424] font-bold leading-[1.2] mb-[15px] ${urbanist.className}`}>This cart is empty</h1>
                        <p className='text-[16.5px] max-w-[535px] text-center text-[#777777]'>You don't have any products in the cart yet. You will find a lot of interesting products on our "Shop" page.</p>
                       <Link href="/product">
                       <button className='text-white bg-[#f59a57] rounded-3xl px-[28px] py-[10px] max-h-[42px] cursor-pointer  my-[25px_5vw]' onClick={()=>{ setProduct("shop") } }>Return to Shop</button>
                       </Link>
                       
                        </span>
                    </div>
           </>
                } 
           {cart.length !== 0 &&      
      <Cart/>
           }
    </div>
    
    </>
  )
}

export default cart
