import {React , useContext, useState} from 'react'
import { urbanist } from '@/pages/_app'
import { Product } from '@/context/ProductContext';
import { orders,DeleteCart } from '@/Services/api';
import { useRouter } from 'next/router';
const payDetails = () => {
  const router = useRouter();
    const [show, setShow] = useState("direct");
    const {cart,setCart} = useContext(Product);
    const [load,setLoad] = useState(false)
    async function handleOrder(item) {
      setLoad(true);
      const [data,response] = await orders(item);
      if(!response.ok){
        alert("Order Failed");
        console.log(data.error);
        setLoad(false)
      }else{
        alert("Order Added");
        console.log(data.message);
        setCart([])
        handleDeleteCart()
        router.push("/myaccount/Orders");
      }
    }
    async function handleDeleteCart(item) {
      const [data,response] = await DeleteCart(item);
      if(!response.ok){
        console.log(data.error);
      }else{
        console.log(data.message);
      }
    }
    
  return (
    <>
      {load && 
      <span className=" h-[50vh] flex items-start justify-center pt-28">
        <svg aria-hidden="true" className="w-[30px] h-[30px] text-transparent animate-spin animate-duration-[.45s] rounded-full border-1 border-[transparent] border-l-[#242424]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
      </span>}
   {!load && 
   
    <div className='lg:w-1/2 lg:ml-[25%]'>
      
       <span className='flex p-5 bg-[rgba(16,16,16,0.05)] rounded-xl max-h-[66px] mt-10 mb-4'>
                    <h1 className={`${urbanist.className} text-[#242424] font-bold flex items-center text-2xl gap-3`}> <p className='py-2 px-4  rounded-full bg-[#f59a57] text-white text-[16px]'>1</p> Your Order</h1>
                  </span>
                  <ul className="flex flex-col gap-3 border-b-[1px] border-[rgba(0,0,0,0.105)] pb-6 ">
                    <li className='flex flex-col items-start text-start gap-4'>
                        <label htmlFor="direct" className='flex gap-3'><input type="radio" name="direct" id="" checked={show === "direct"} onChange={(e)=>{e.target.checked? setShow("direct") : setShow("")}} />Direct bank transfer</label>
                        <span className={`${show === "direct" ? "block" : "hidden"} transition-all duration-300 ease-in-out bg-[rgba(16,16,16,0.03)] text-[#777777] p-3.5 rounded-xl text-start text-[15px]`}>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</span>
                    </li>
                    <li className='flex flex-col items-start text-start gap-4'>
                        <label htmlFor="direct" className='flex gap-3'><input type="radio" name="direct" id="" onChange={(e)=>{e.target.checked? setShow("check") : setShow("")}} />Check payments</label>
                        <span className={`${show === "check" ? "block" : "hidden"} transition-all duration-300 ease-in-out bg-[rgba(16,16,16,0.03)] text-[#777777] p-3.5 rounded-xl text-start text-[15px]`}>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</span>
                    </li>
                    <li className='flex flex-col items-start text-start gap-4'>
                        <label htmlFor="direct" className='flex gap-3'><input type="radio" name="direct" id="" onChange={(e)=>{e.target.checked? setShow("cash") : setShow("")}} />Cash on delivery</label>
                        <span className={`${show === "cash" ? "block" : "hidden"} transition-all duration-150 ease-in-out bg-[rgba(16,16,16,0.03)] text-[#777777] p-3.5 rounded-xl text-start text-[15px] w-full`}>Pay with cash upon delivery.</span>
                    </li>
                  </ul>
                  <button className="text-white bg-[#f59a57] w-full min-h-[42px] rounded-3xl mt-6 mb-4" onClick={()=>{handleOrder(cart)}}> Place order</button>
    </div>
   }
     </>
  )
}

export default payDetails
