import Side_bar from '@/components/account/Side_bar'
import React, { useEffect , useState} from 'react'
import Head from '@/components/account/head'
import { workSans } from '../_app'
import Link from 'next/link'
const Orders = () => {

  const[orders,setOrder] = useState([])
  useEffect(()=>{

    async function Order() {
        const response = await fetch("/api/order",{
          credentials : "include"
        });
        const data = await response.json();
        if(!response.ok){
          console.log(data.error)
        }else{
          console.log(data.data)
          setOrder(data.data)
        }
    }
    Order();
  },[])
  function formatDate(dateStr) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }; // → "July 29, 2025"
  return new Date(dateStr).toLocaleDateString('en-US', options);
}

  return (
    <>
      <Head/>
       <div className={`grid grid-cols-[1fr_3fr] ${workSans.className} lg:p-[40px_70px] p-[20_15px]`} style={{backgroundImage : "url(/bg.jpg)"}}>
                 <Side_bar tab={1} />   
    <div className='order w-full p-[10px_30px]'>
      <table className='w-full'>
        <thead>
            <tr>
                <th>Order</th>
                <th>Date</th>
                <th>Status</th>
                <th>Total</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
          {orders.map((order)=>(
            <tr key={order.id}>
                <td>#{order.id}</td>
                <td>{formatDate(order.created_at)}</td>
                <td>On hold</td>
                <td><span>${order.items.reduce((i,y)=>(i + y.price),0)} </span>for {order.items.length} item</td>
                <td><Link href={`/myaccount/view-order/${order.id}`}><button className='bg-[#f59a57] text-white rounded-3xl'>View</button>
                </Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </>
  )
}

export default Orders
