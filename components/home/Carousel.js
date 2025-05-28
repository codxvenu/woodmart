import React, { useState } from 'react'
// At the top of your Carousel component
import { urbanist } from '@/pages/_app';

function Carousel() {
    const data = [
        {
        "id" : 1,
        "img" : "/slide1.jpg",
        "icon" : "./10008.svg", 
        "content" : "decor",
        "price" : "182"
        },
        {
            "id" : 2,
            "img" : "/slide2.jpg",
            "icon" : "./10010.svg", 
            "content" : "chair",
            "price" : "468"
        },
        {
            "id" : 3,
            "img" : "/slide3.jpg",
            "icon" : "./10012.svg",
            "content" : "sofas",
            "price" : "3620"
        },
]
const [ids,setIds] = useState(0)
  return (
    <>
    
        <span>
        <div
  className=" h-[77vh] bg-cover max-[548px]:bg-position-[-480px_0] lg:bg-position-center transition-all duration-200 ease-in-out
"
  style={{
    backgroundImage: `url(${data[ids]["img"]})`,
    backgroundSize: "cover",
     // optional, for zoom effect
  }}
></div>

            </span>
            <div className={`absolute top-[20%] lg:top-[30%] flex flex-col gap-[38vh] p-5 md:p-8 ${urbanist.className}`}>

            <span className="data flex items-center justify-center gap-[18px] font-[700] text-[#242424CC] transition-transform duration-500 translate-y-[-100%]">
              <span className='bg-[#7777776f] w-[74px] h-[74px] rounded-[100%] flex items-center justify-center'>
                <span style={{
    backgroundImage: `url(${data[ids]["icon"]})`,
    backgroundSize: "contain",
    width : "34px",
    height: "34px",
    backgroundRepeat : "no-repeat",
    backgroundPosition :"center"

     // optional, for zoom effect
  }}  alt="" /></span>
               <h1>
               Discover more products <br/> in the <span className='underline decoration-[rgb(245,154,87)] decoration-2 underline-offset-4'>{data[ids]["content"]}</span> category
            
                </h1> </span>
            <span className={`price-bar text-[#242424CC] flex gap-4 items-center ml-[30px] ${urbanist.className}`}>
               <button className='bg-white px-3.5 font-[700] py-2 rounded-4xl '>Shop Now</button><small className='text-[22px] font-bold'> ${data[ids]["price"]}</small>
            </span>
            </div>
            <div className="arrowbox absolute top-[55%] flex justify-between w-[95%] p-4">
            <span className='bg-white rounded-[50%] w-[40px] h-[40px] flex justify-center items-center' onClick={()=>{
              ids === 0 ? setIds(2):setIds(ids-1)
            }}>
              
              <i class="ri-arrow-left-s-line  text-2xl "></i>
              </span>
            <span className='bg-white rounded-[50%] w-[40px] h-[40px] flex justify-center items-center' onClick={()=>{
              ids === 2 ? setIds(0):setIds(ids+1)
            }}>
              
              <i class="ri-arrow-right-s-line text-2xl "></i>
              </span>
            </div>
            <div className="history grid grid-cols-3 p-[7px_10px] justify-center items-center absolute w-[65px] h-[24px] rounded-2xl top-[90%] transform-[translateX(-50%)] left-[50%] bg-white gap-2 max-[1024px]:top-[82%]">
              <span className={ids=== 0? 'bg-[#333] rounded-[50%] w-[10px] h-[10px] ' : "bg-[#bbb] rounded-[50%] w-[10px] h-[10px]"}></span>
              <span className={ids=== 1? 'bg-[#333] rounded-[50%] w-[10px] h-[10px] ' : "bg-[#bbb] rounded-[50%] w-[10px] h-[10px]"}></span>
              <span className={ids=== 2? 'bg-[#333] rounded-[50%] w-[10px] h-[10px]' : "bg-[#bbb] rounded-[50%] w-[10px] h-[10px]"}></span>
            </div>
            </>
  )
}

export default Carousel 