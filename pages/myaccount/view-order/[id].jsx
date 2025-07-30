import React, { useEffect,useState } from 'react'
import Side_bar from '@/components/account/Side_bar'
import Head from '@/components/account/head'
import { urbanist, workSans } from '@/pages/_app'
import { useRouter } from 'next/router';
const viewOrder = () => {
 const[orders,setOrder] = useState([])
 const router = useRouter();
 const id = Number(router.query.id)
  
   useEffect(()=>{
 
     async function Order() {
         const response = await fetch(`http://localhost:5000/order`,{
           credentials : "include"
         });
         const data = await response.json();
         if(!response.ok){
           console.log(data.error)
         }else{
          if(id){
          const items = data.data.filter((i)=>(i.id === id))
           setOrder(items)
           console.log(orders,id,data.data.filter((i)=>(i.id===id)),items);
}
         }
     } 
     Order();
   },[id])
   useEffect(()=>{
    console.log(orders,orders[0]);
    
   },[orders])
   function formatDate(dateStr) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateStr).toLocaleDateString('en-US', options);
}

  return (
    < >
    <Head/>
     <div className={`grid grid-cols-[1fr_3fr] ${workSans.className} lg:p-[40px_70px] p-[20_15px]`} style={{backgroundImage : "url(/bg.jpg)"}}>
          <Side_bar/>
          {!orders.length > 0 && 
      <span className=" h-[100vh] flex items-start justify-center pt-28">
        <svg aria-hidden="true" className="w-[30px] h-[30px] text-transparent animate-spin animate-duration-[.45s] rounded-full border-1 border-[transparent] border-l-[#242424]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
      </span>}
      {orders.length > 0&&
          <div className='p-[10px_30px] w-full block'>

      <span className='mb-[30px] text-[16.5px] block'>
        Order <span className='text-[#333333] font-semibold'>#{id}</span> was placed on <span className='text-[#333333] font-semibold'>{formatDate(orders[0].created_at)}</span> and is currently <span className='text-[#333333] font-semibold'>On hold</span>
      </span>
      <h1 className={`${urbanist.className} text-2xl mb-[20px] font-bold`}>Order details</h1>
      <table className='vorder w-full mb-[30px]'>
        <tfoot>

        <tr>
          <th>Product</th>
          <td>Total</td>
        </tr>
       { orders[0].items.map((order)=>(
        <tr>
          <th>{order.name} × {order.quantity}</th>
          <td className='text-[#f59a57] font-semibold'>${order.price * order.quantity}</td>
        </tr>
        ))}
        <tr>
          <th>Subtotal:	</th>
          <td className='text-[#f59a57] font-semibold'>${orders[0].items.reduce((x,y)=>(x+y.price),0)}</td>
        </tr>
        <tr>
          <th>Shipping:	</th>
          <td>Local pickup</td>
        </tr>
        <tr>
          <th>Payment method:	</th>
          <td>Direct bank transfer</td>
        </tr>
        <tr>
          <th>Total:	</th>
          <td className='text-[#f59a57] font-semibold'>${orders[0].items.reduce((x,y)=>(x+y.price),0)}</td>
        </tr>
        </tfoot>
      </table>
      <span className='w-fit block text-start text-[16.5px] text-[#777777] italic'>
        <h1 className={`${urbanist.className} text-[24px] font-bold text-[#242424] not-italic mb-[30px]`}>Billing Address</h1>
        <ul className='flex flex-col items-start'>
          <li>
            Venu Sharma
          </li>
          <li>
            st 3
          </li>
          <li> 
            ludh 141001
          </li>
          <li> 
            India
          </li>
          <li> 
            8194989323
          </li>
          <li> 
            vasulallu09@gmail.com
          </li>
        </ul>
      </span>
      </div>}
    </div>
    </>
  )
}

export default viewOrder
