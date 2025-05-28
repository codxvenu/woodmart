import {React , useState} from 'react'
import { urbanist } from '@/pages/_app'
const payDetails = () => {
    const [show, setShow] = useState("direct");

  return (
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
                  <button className="text-white bg-[#f59a57] w-full min-h-[42px] rounded-3xl mt-6 mb-4"> Place order</button>
    </div>
  )
}

export default payDetails
