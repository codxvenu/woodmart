import { urbanist, workSans } from '@/pages/_app'
import {React , useContext} from 'react'
import {Product} from '@/context/ProductContext'
import { useRouter } from "next/router";
import Link from 'next/link';
const head = () => {
  const {cart,setProduct} = useContext(Product);
  const router = useRouter();
  console.log(cart);
  
  return (
    <div className='flex flex-col items-center  '>
      <img className="w-[210px] h-[40px] lg:max-w-[210px] max-w-[179px]" src="/10007.svg" decoding="async"/>
      {cart.length !== 0 && <div class="flex items-center py-4 px-2 my-4 text-sm text-white rounded-lg w-[670px] bg-[#459647] " role="alert">
  <i class="ri-check-line text-2xl mx-4"></i>
  <div>
    <span class="font-medium hover:text-[#E9E9E9] cursor-pointer underline underline-offset-2">Continue shopping</span> "{cart.length!==0 ? cart.at(-1).name : ""}" has been added to your cart.
  </div>
</div>}

      
    <span className={`${workSans.className} flex gap-2 text-[#242424] max-[768px]:font-[500] font-bold lg:p-3 text-[14.7px] max-[768px]:my-2`}>Returning customer?<h3 className='text-[#f59a57] underline decoration-1 decoration-[#f59a57]'>Click here to login</h3></span>
    <span className={`${workSans.className} flex max-[768px]:flex-col items-center gap-2 text-[#242424] font-bold p-3`}><h2>Have a coupon?</h2><h3 className='text-[#f59a57] underline decoration-1 decoration-[#f59a57]'>Click here to enter your code</h3></span>
    {cart.length === 0 && 
  <div class="flex items-center py-4 px-2 my-4 text-sm text-white rounded-lg w-full bg-[#E0B252] " role="alert">
  <i class="ri-error-warning-line text-2xl mx-4"></i>
  <div>
     Sorry, your session has expired. 
     <Link href="/product_category/shop">
     <span class="font-medium hover:text-[#E9E9E9] cursor-pointer underline underline-offset-2" onClick={()=>{setProduct("shop");}}>Return to shop</span>
     </Link>
  </div>
</div>
}
    </div>
  )
}

export default head
