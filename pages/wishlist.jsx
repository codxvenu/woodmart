import React, { useContext, useEffect, useState } from 'react'
import { urbanist, workSans } from './_app'
import { Product } from '@/context/ProductContext'
import { useRouter } from 'next/router';
import Link from 'next/link';
async function handleCart(item){
 
 if(cart.some((i)=> i.name === item.name)){
  setCart(cart.map((x)=>{
    if(item.name === x.name){ return {...x,quantity : x.quantity+1} }else{ return x}
  }))
 }else{
  setCart([...cart,{...item , quantity : 1}])
 }
 const message =  await cartAdd(item);
 console.log(message);
}
const wishlist = () => {
    const{setProduct,wishlist,setWishlist,cart,setCart} =useContext(Product);
    const[data,setData] = useState([]);
    const router = useRouter();
    function handleItem(item,value){
      if(value){
        if(!data.find((itm)=>itm.id === item.id)){

          setData([...data,{...item}])
          console.log(data,1);
        }
      }else{
        setData(data.filter((idx)=>idx.id !== item.id));
        console.log(data,2);
      }
    }
    function handleLen(){
      if(data.length !== wishlist.length){
        setData(wishlist);
      }else{
        setData([])
      }
    }
    // useEffect(()=>{
    //   setData(wishlist)
    // },[]);
  return (
    <div className={`${workSans.className} `} style={{backgroundImage : "url(/bg.jpg)"}}>
      <div className={`${urbanist.className}`} >
                    <span style={{background : "url(./shop_bg.jpg)",backgroundPosition : "center top"}} className='block w-full !bg-cover min-[1200px]:h-[294px] text-[78px] text-white'>
                    <span className='min-[1200px]:mx-[60.5px] min-[1200px]:px-[15px] min-[1200px]:py-[100px] p-[15px] flex items-center gap-2 h-full'>
                    <h1 className='font-bold min-[1200px]:text-[78px] text-[36px] capitalize'>Wishlist</h1>
                    </span>
                    </span>
                 </div>
                {wishlist.length===0 && 
                <div>
                        <span className='flex flex-col justify-center items-center mt-[5vw]'>
                        <i className="ri-heart-line text-[rgba(0,0,0,0.07)] text-[180px]"></i>
                        <h1 className={`text-[48px] text-[#242424] font-bold leading-[1.2] mb-[15px] ${urbanist.className}`}>This wishlist is empty</h1>
                        <p className='text-[16.5px] max-w-[535px] text-center text-[#777777]'>You don't have any products in the wishlist yet. You will find a lot of interesting products on our "Shop" page.</p>
                       <Link href="/product">
                       <button className='text-white bg-[#f59a57] rounded-3xl px-[28px] py-[10px] max-h-[42px] cursor-pointer  my-[25px_5vw]' onClick={()=>{ setProduct("shop") } }>Return to Shop</button>
                       </Link>
                       
                        </span>
                    </div>
                }   
                {wishlist.length !==0 && 
                <div className='p-[40px_15px] mx-[60px]'>
                    <h1 className={`${urbanist.className} py-4 text-[#242424] border-b-[1px] border-[rgba(0,0,0,0.105)] text-[18px] font-bold uppercase`}>Your products wishlist</h1>
                   <span className={`${data.length === 0 && "hidden"} flex gap-4 pl-3 py-2 bg-[rgba(0,0,0,0.04)] transition-all duration-300 ease-in-out text-[14px] font-medium text-[#333] `}><h2 className={`${data.length=== 0 && "opacity-0"} flex items-center cursor-pointer transition-opacity duration-100 ease-in-out`} onClick={()=>{setWishlist(wishlist.filter((idx)=> !data.map((item)=>item.name).includes(idx.name))); setData([])}}><i className="ri-close-line text-xl font-normal"></i>Remove</h2><h2 className={`${data.length=== 0 && "opacity-0"} flex items-center cursor-pointer transition-opacity duration-100 ease-in-out`} onClick={()=>handleLen()}><i className="ri-check-line text-xl font-normal"></i>{data.length !== wishlist.length ? "Select all":"Deselect all"}</h2> </span>
                    <div className="items-container grid lg:grid-cols-3  lg:gap-6 md:gap-4 gap-2 h-max mt-4">
       
                    {wishlist.map((item) => (
                         <div className='flex gap-2 flex-col'>
                         <span className='flex justify-between text-[14px] font-medium'><h2 className='flex items-center cursor-pointer' onClick={()=>setWishlist(wishlist.filter((idx)=>idx.id !== item.id))}><i className="ri-close-line text-xl font-normal"></i>Remove</h2> <input type="checkbox" name="remove"  checked={data.some((i)=>i.id === item.id)} onChange={(e)=>handleItem(item,e.target.checked)} /></span>
          <div
            className="relative item z-20 p-2 bg-white rounded-2xl lg:min-h-[609px] transition-transform duration-300 group lg:hover:-translate-y-1 md:overflow-hidden"
            key={item.id}
          >
            
            <img
              className="mt-3"
             
              src={item.img}
              alt=""
            />
            <span className="arrows h-[20px] inset-0 text-[#767676] w-full absolute top-[45%] text-[25px] lg:flex hidden justify-between items-center">
              <i className="ri-arrow-left-s-line group-hover:translate-0 -translate-x-full transition-transform duration-300 ease-in-out"></i>
              <i className="ri-arrow-right-s-line group-hover:translate-0 translate-x-full transition-transform duration-300 ease-in-out"></i>
            </span>
            <div className="data translate-y-10 p-2 flex flex-col gap-1 transition-transform duration-300 ease-in-out lg:group-hover:-translate-y-1.5 bg-white">
              <span className="flex justify-between items-center font-medium">
                <h1 className={` ${urbanist.className} max-[548px]:text-[13.5px] max-[768.5px]:text-[15px] lg:text-[16px]  font-bold`}>{item.name}</h1>
                <span>
                  {item.rating}
                  <i className="ri-star-fill text-[#EABE12]"></i>
                </span>
              </span>
              <span className="flex justify-between items-center text-[#a5a5a5] font-medium text-[12.8px] max-[768.5px]:text-[14.25px]">
               <h1 className="max-[548px]:text-[12.8px] min-[768.5px]:text-[14.25px]">
				{item.category}
				</h1> 
              </span>
              <span className="flex justify-between items-center text-[rgb(245,154,87)] font-medium max-[548px]:text-[13.5px] max-[768.5px]:text-[15px] lg:text-[16px]">
                <h1>${item.price}</h1>
                <span className="colors flex mt-[-10px]">
                  {/* {item.colors.map((color,index) => (
                    <span key={index} className="flex flex-col justify-center items-center gap-0.5 group/color w-[22px]">
                      <small className=" -translate-x-1/2 px-1.5 py-[2px] text-[13px] text-white bg-black rounded whitespace-nowrap group-hover/color:opacity-100 transition-opacity duration-200 relative top-[-45%] left-1/2 opacity-0">
                        {color.name}
                      </small>

                      <span
                        className="block group/color w-[15px] h-[15px] rounded-[50%] cursor-pointer relative top-[-10px] "
                        style={{ backgroundColor: color.code }}
                      >
                        <i className="ri-arrow-down-s-fill absolute top-[-22px] text-[20px] text-black left-[-3px] group-hover/color:opacity-100 transition-opacity duration-200 opacity-0"></i>
                      </span>
                    </span>
                  ))} */}
                </span>
              </span>
              <span className="z-10 cart lg:flex gap-4 items-center transition-opacity duration-300 ease-in-out group-hover:opacity-100 text-[20px] lg:opacity-0">
                <button className="w-full bg-[rgb(245,154,87)] overflow-hidden h-[36px] rounded-3xl text-white font-bold  py-[8px]  group/cart" onClick={(e)=>{e.preventDefault(); e.stopPropagation(); handleCart(item)}}>
                  {" "}
                  <h1 className="text-[14px] group-hover/cart:-translate-y-6 transition-all duration-200 ease-in-out">
                    Add to cart
                  </h1>
                  <i className="ri-shopping-cart-2-line text-[24px] font-light block translate-y-1 group-hover/cart:-translate-y-7 transition-all duration-200 ease-in-out"></i>
                </button>
                <span className=" lg:flex hidden gap-[12px]">
                  <i className={` ${!compare.some((i)=>i.name === item.name) ? "ri-shuffle-line" : "ri-check-line"} `} onClick={(e)=>{e.stopPropagation(); e.preventDefault(); !compare.some((i)=>i.name === item.name) && setCompare([...compare,{...item}])}}></i>
                  <i className="ri-search-line text-[rgb(119, 119, 119)]"></i>
                </span>
              </span>
            </div>
          </div>
                    </div>
        ))}
                </div>
                </div>
                }
    </div>
  )
}

export default wishlist
