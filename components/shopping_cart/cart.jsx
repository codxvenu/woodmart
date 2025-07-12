import { urbanist, workSans } from '@/pages/_app';
import {React ,useContext,useState} from 'react'
import Cards from './cards';
import { Product } from '@/context/ProductContext';
import { useRouter } from 'next/router';
import Link from 'next/link';
const cart = () => {
    const {cart,setCart} = useContext(Product);
    const total = cart.reduce((sum,idx)=>sum + idx.price * idx.quantity , 0);
    function handleQuantity(item,quantity){
      const updatedquantity = cart.map((i)=>{
        if(item.name === i.name){
          return {...item,quantity:quantity}
        }else{
          return item
        }
      
      })
      setCart(updatedquantity);
    }
  return (
    <div className={`grid grid-cols-[3fr_1.5fr] gap-6 cart ${workSans.className}`}>
      <div className="flex flex-col gap-5">
        <span className='flex flex-col gap-2 rounded-[8px] p-[20px] bg-white text-[#777777]'>
             {total < 1300 ?  <h2> Add <span className={`text-[#f59a57] font-bold ${urbanist.className}`}>${1300 - total}.00 </span> to cart and get free shipping!  </h2> : <h2>Your order qualifies for free shipping!</h2> }
                      <div className="w-full h-[10px] rounded-4xl mt-4 bg-[rgba(0,0,0,0.06)] " ><div style={{width : `${total > 1300? 100 : (total / 1300)*100}%`}} className=" h-[10px] rounded-4xl  bg-[rgb(245,154,87)] bg-[length:15px_15px] bg-repeat bg-[linear-gradient(135deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)]"></div>
            </div> 
             </span>
        <span className="block bg-white rounded-2xl p-5">
            <table>
                <thead>
                  <tr className={`${urbanist.className}`}>
                     
                <th></th>
                <th></th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                </tr>
                </thead>
                <tbody>
                  {cart.map((item)=>(

                    <tr>
                    <td onClick={()=>setCart(cart.filter((idx)=>idx.name !== item.name))}><i className="ri-close-line"></i></td>
                    <td><img className="max-w-[80px]" src={item.img} alt="" /></td>
                    <td>{item.name}</td>
                    <td>${item.price}.00</td>
                    <td> 
                      <span className="flex items-center lg:w-[20%] text-[#777777]">
            <button className="px-2 py-2 border-[1px] border-[rgba(0,0,0,0.1)] rounded-l-4xl cursor-pointer hover:bg-[rgb(245,154,87)] hover:text-white transition-colors ease-in-out duration-75" onClick={()=>{item.quantity > 1? handleQuantity(item,item.quantity -1 ) : alert("cant order less than 1 product") }}>
              -
            </button>
            <h3 className="border-[1px] border-[rgba(0,0,0,0.1)] border-x-0 px-2 py-2">
              {item.quantity}
            </h3>
            <button className="px-2 py-2 border-[1px] border-[rgba(0,0,0,0.1)] rounded-r-4xl cursor-pointer hover:bg-[rgb(245,154,87)] hover:text-white transition-colors ease-in-out duration-75" onClick={()=>{item.quantity < 20 ? handleQuantity(item,item.quantity + 1 ) : alert("cant order more than 20 product")}}>
              +
            </button>
          </span></td>
                    <td>${item.price * item.quantity}.00</td>  
                    </tr>
                  ))}
                </tbody>
            </table>
            <span className="flex gap-3 mt-8"> 
                <input type="text" name="code" id="" placeholder='Coupon code' className="pl-[15px] border-[rgba(0,0,0,0.1)] border-[1px] py-2.5 px-6 text-[14px] rounded-4xl outline-0 text-[#767676]"/>
                <button className='bg-[#f59a57] text-white px-4 py-2.5 rounded-4xl text-[13px] font-medium cursor-pointer'>Apply coupon</button>
            </span>
        </span>
        <ul className="flex gap-6 cursor-pointer">
        <li className="grid grid-cols-[.1fr_1fr] gap-4 text-[15px] text-[#777777] bg-white w-fit rounded-xl p-5 !text-start">
            <span className="w-[32px] h-[32px] inline-block">
              <img src="/wd-furniture-phone-1.svg" alt="" />
              </span>
          <span className="flex flex-col">
            <h1 className={`${urbanist.className} text-[#242424] font-bold`}>Have questions?</h1>
            <h2>Our experts are here to help! <small className="text-[#3366ff] underline decoration-1 italic text-[15px]">Call us</small></h2>
          </span>
          </li>
           <li className="grid grid-cols-[.1fr_1fr] gap-4 text-[15px] text-[#777777] bg-white w-fit rounded-xl p-5 !text-start">
            <span className="w-[32px] h-[32px] inline-block">
              <img src="/wd-furniture-sequre.svg" alt="" />
              </span>
          <span className="flex flex-col">
            <h1 className={`${urbanist.className} text-[#242424] font-bold`}>Secure shopping</h1>
            <h2>All transactions are protected by SSL. <small className="text-[#3366ff] underline decoration-1 italic text-[15px]">Call us</small></h2>
          </span>
          </li>
           <li className="grid grid-cols-[.1fr_1fr] gap-4 text-[15px] text-[#777777] bg-white w-fit rounded-xl p-5 !text-start">
            <span className="w-[32px] h-[32px] inline-block">
              <img src="/wd-furniture-privacy.svg" alt="" />
              </span>
          <span className="flex flex-col">
            <h1 className={`${urbanist.className} text-[#242424] font-bold`}>Privacy protection</h1>
            <h2>Your privacy is always our top priority.<small className="text-[#3366ff] underline decoration-1 italic text-[15px]">Call us</small></h2>
          </span>
          </li>
          </ul>
      </div>
      <div className="flex flex-col gap-5">
          <div className="bg-white p-5 rounded-2xl">
            <h1 className={`${urbanist.className} text-[22px] text-[#242424] font-bold`}>Cart Totals</h1>
            <span className="border-b-[1px] border-[rgba(0,0,0,0.1)] flex justify-between p-[15px_0] mt-3">
              <h2 className={`${urbanist.className} text-[#242424] font-semibold`}>Subtotal</h2>
              <small className="text-[#777777] text-[15px]">${total}.00</small>
            </span>
            <span className="border-b-[1px] border-[rgba(0,0,0,0.1)] flex justify-between items-center text-[15px] p-[15px_0] ">
              <h2 className={`${urbanist.className} text-[#242424] font-semibold`}>Shipping</h2>
             <span className="grid gap-2 text-end">
              <h2>Free shipping</h2>
              <h2 className="text-[#777777]">Shipping to AL.</h2>
              <small className="text-[#f59a57] text-[15px] font-medium cursor-pointer">Change address</small>
             </span>
            </span>
            <span className=" flex justify-between p-[15px_0] ">
              <h2 className={`${urbanist.className} text-[#242424] font-semibold`}>Total</h2>
              <small className="text-[#f59a57] text-[19.5px] font-semibold">${total}.00</small>
            </span>
            <Link href="/checkout">
            <button className="bg-[#f59a57] w-full min-h-[42px] my-3 rounded-4xl text-white cursor-pointer">Proceed to checkout</button>
            </Link>
          </div>
          <div className="bg-white p-[20px_25px] rounded-2xl grid gap-3 text-[#777777] text-[14px]">
            <h1 className={`${urbanist.className} text-[18px] text-[#242424] font-bold`}>Payment methods:</h1>
            <img src="/payment-methods.jpg.webp" alt="" />
            <h1 className={`${urbanist.className} text-[18px] text-[#242424] font-bold mt-3 -mb-2`}>Delivery information :</h1>
            <p>Although we don’t think you’ll ever want one, we’ll gladly provide a refund if it’s requested within 14 days of purchase.</p>
            <h1 className={`${urbanist.className} text-[18px] text-[#242424] font-bold mt-3 -mb-2`}>14 Days Money Back Guarantee:</h1>
            <p>Although we don’t think you’ll ever want one, we’ll gladly provide a refund if it’s requested within 14 days of purchase.</p>
          
          </div>
        
      </div>
      <div className="col-span-2 min-[1200px]:m-[-40px_-72px] m-[-20px_-15px]">

        <Cards/>
      </div>
    </div>
  )
}

export default cart
