import { Product } from '@/context/ProductContext'
import { urbanist, workSans } from '@/pages/_app'
import React, { useContext } from 'react'

const side_cart = ({setSide}) => {
  const{cart,setCart} = useContext(Product);
  const total = cart.reduce((sum,item)=>sum + item.price*item.quantity ,0);
  return (
    <div className={`grid grid-cols-[1fr_340px] fixed w-screen h-screen top-0 ${workSans.className}`}>
      
      <div className='bg-[rgba(0,0,0,0.7)]' onClick={()=>setSide(false)}></div>
      <div className='bg-white h-screen w-full flex flex-col justify-between'>
        <span>
        <span className='flex justify-between w-full p-[20px_15px] text-[#333333] text-[15px] font-semibold items-center border-b-[1px]  border-b-[rgba(0,0,0,0.105)]'><h1 className={`text-[19.5px] font-bold text-[#242424] ${urbanist.className}`}>Shopping cart</h1>
        <span className='flex items-center gap-2'><i className="ri-close-large-line font-extralight text-[16px]"></i>Close</span>
        </span>
     {cart.length === 0 && 
        <span className='flex flex-col p-[10px_15px] mt-[20px] gap-4 items-center'>
          <img className='w-[310px] h-[100px] object-contain' src="./cart_mini.png" alt="" />
          <h1 className={`${urbanist.className} text-[15px] font-bold text-center mt-[-20px]`}>No products in the cart.</h1>
          <button className='bg-[#f59a57] text-white min-h-[36px] p-[5px_14px] w-fit rounded-4xl text-[12px] font-semibold'>Return to Shop</button>
        </span>
        }
      {cart &&  
      <ul>
        {cart && cart.map((item)=>(

        <li className='grid grid-cols-[1fr_3fr_.2fr] p-[15px] gap-4'>
            <img src={item.img} alt="" />
            <span className='flex flex-col justify-start  gap-2'><h2 className={`text-start text-[15px] ${urbanist.className} font-bold`}>{item.name}</h2>
            <small className='text-start text-[#bbb] flex gap-2 text-[13.5px]'>{item.quantity} x <h3 className='font-semibold text-[rgb(245,154,87)]'>${item.price}.0</h3></small></span>
            <i className="ri-close-line text-[#bbb]" onClick={()=>{setCart(cart.filter((idx)=>(idx.name !== item.name)))}}></i>
            </li>
        ))}
            </ul>} 
      
        </span>
        {cart.length !== 0 && 
        
            <span className='flex flex-col'>
               <span className='flex justify-between w-full p-[20px_15px] text-[#333333] text-[15px] font-semibold items-center border-y-[1px]  border-y-[rgba(0,0,0,0.105)]'><h1 className={`text-[19.5px] font-bold text-[#242424] ${urbanist.className}`}>Subtotal:</h1>
       <h1 className={`text-[19.5px] font-bold text-[#f59a57] ${urbanist.className}`}>${total}.00</h1>
        </span>
        <span className='p-[15px] text-[15px] text-[#777777]'>
        {total < 1300 ?  <h2> Add <span className={`text-[#f59a57] font-bold ${urbanist.className}`}>${1300 - total}.00 </span> to cart and get free shipping!  </h2> : <h2>Your order qualifies for free shipping!</h2> }
          <div className="w-full h-[10px] rounded-4xl mt-4 bg-[rgba(0,0,0,0.06)] " ><div style={{width : `${total > 1300? 100 : (total / 1300)*100}%`}} className=" h-[10px] rounded-4xl mt-4 bg-[rgb(245,154,87)] bg-[length:15px_15px] bg-repeat bg-[linear-gradient(135deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)]"></div>
</div>
          <button className='w-full text-[#242424] bg-[rgb(247,247,247)] min-h-[42px] rounded-4xl my-2 text-[13px] font-medium'>View Cart</button>
        <button className='w-full bg-[rgb(245,154,87)] text-white min-h-[42px] rounded-4xl mb-2 text-[13px] font-medium'>Checkout</button>
        </span>
       
            </span>
        }
       
      </div>
    </div>
  )
}

export default side_cart
