import { urbanist, workSans } from '@/pages/_app';
import React, { useEffect, useState ,useContext } from 'react'
import { Product } from "@/context/ProductContext";
import data from '@/itemz';
import Side_cart from '../shopping_cart/side_cart';
import Link from 'next/link';
import { cartAdd } from '@/Services/api';
const cards = () => {
  const[change ,setChange] =useState(0);
  const{items , wishlist,setWishlist,compare,setCompare,cart,setCart} = useContext(Product);
  const[side,setSide] = useState(false);
  useEffect(()=>{
    console.log(items,"data",data[0]);
    
  },[]);
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
   const [slideWidth, setSlideWidth] = useState(282);
   
  useEffect(() => {
    const updateSlideWidth = () => {
      const width = window.innerWidth;
      if (width >= 1200) setSlideWidth((window.innerWidth - 120) / 5)
     else if (width >= 1024) setSlideWidth((window.innerWidth - 0) / 5);         // Large screens
      else if (width >= 768) setSlideWidth((window.innerWidth - 25) / 4 );     // Medium screens
      else setSlideWidth((window.innerWidth - 32) / 2);                       // Mobile
    };

    updateSlideWidth(); // run on mount
    window.addEventListener('resize', updateSlideWidth); // run on resize

    return () => window.removeEventListener('resize', updateSlideWidth);
  }, []);
  useEffect(() => {
    
   console.log(slideWidth);
   
  }, [slideWidth]);
  return (
    <>
    <div className={`${workSans.className} pt-[90px] relative translate-x-[${change}px] group/main min-[1200px]:p-[50px_72px] p-[20px_15px] overflow-hidden`}>

      <h1 className={`${urbanist.className} lg:text-[22px] text-[20px] font-bold text-[#242424 mb-[20px]`}>Related Products</h1>
    
       <span className="arrows h-[20px] font-light inset-0 text-[#76767669] w-full absolute top-[50%] lg:text-4xl text-3xl flex justify-between items-center">
              <i className={`ri-arrow-left-s-line group-hover/main:translate-x-5 group-hover/main:opacity-100 lg:opacity-0  lg:-translate-x-full transition-all duration-300 ease-in-out max-[1224px]:-translate-x-2 ${change === 0 ? "text-[76767669]": "text-[#767676]"}`} onClick={()=>{change > 0 ? setChange(change-1) : console.log(change,"no previous item");
              }}></i>
              <i className={`ri-arrow-right-s-line group-hover/main:-translate-x-5  group-hover/main:opacity-100 lg:opacity-0 lg:translate-x-full transition-all duration-300 ease-in-out max-[1224px]:translate-x-2 ${change+5 === items.length ? "text-[76767669]": "text-[#767676]"}`} onClick={()=>{change + 5 < items.length ? setChange(change+1) : console.log(change,"no previous item")}}></i>
            </span>
      <div className='overflow-hidden'>
      <div className={`items-container flex lg:w-max w-full lg:gap-6 md:gap-4 gap-2  transition-transform duration-300 ease-in-out `} style={{transform : `translateX(${change >= 0 ? -change*slideWidth : change*slideWidth }px)`}}>
        
        {data.filter((idx)=>(idx.category === items.category)).map((item,index) => (
        <Link href={`/product/${item.id}`}>

     
        <div
            className="relative item z-20 p-2 bg-white flex-shrink-0 rounded-2xl lg:max-h-[400px] lg:max-w-[258px] min-[1200px]:w-[calc((100vw_-_240px)_/_5)] min-[1024px]:w-[calc((100vw_-126px)_/_5)] max-[1024px]:w-[calc((100vw_-_85px)_/_4)] max-[768px]:w-[calc((100vw_-_48px)_/_2)] group md:overflow-hidden cursor-pointer"
            key={item.id}
          >
             <span className="absolute w-[95%] tag mb-3 flex justify-between items-center p-[4px_15px] font-bold uppercase">
              <h1 className="text-[12px]">Sold out</h1>
			  <span className="flex flex-col justify-center items-center gap-0.5 group/color w-[22px]">
                      <small className=" -translate-x-1/2 p-[8px] text-[10px] text-white bg-black rounded whitespace-nowrap group-hover/color:opacity-100 transition-opacity duration-200 absolute top-[-25%] right-[-8px] opacity-0">
                        Add to wishlist
                      </small>
					    <span
                        className="block group/color w-[15px] h-[15px] rounded-[50%] cursor-pointer relative top-[-10px] " onClick={()=>{wishlist.some((i)=>i.name === item.name) && setWishlist([...wishlist,{...item}])}}
                      > <i className={` ${!wishlist.some((i)=>i.name === item.name) ? "ri-heart-line" : "ri-check-line"} text-[#767676] text-[25px] font-light`}></i></span>

                      <i className="ri-arrow-right-s-fill absolute top-[-2px] text-[18px] text-black right-[30px] group-hover/color:opacity-100 transition-opacity duration-200 opacity-0"></i>
                     
                       </span>
             
            </span>
            <img
              className="mt-3"
              width={258}
              height={259}
              src={item.img}
              alt=""
            />
            <span className="arrows h-[20px] inset-0 text-[#767676] w-full absolute top-[30%] text-[25px] lg:flex hidden justify-between items-center">
              <i className="ri-arrow-left-s-line group-hover:translate-0 -translate-x-full transition-transform duration-300 ease-in-out"></i>
              <i className="ri-arrow-right-s-line group-hover:translate-0 translate-x-full transition-transform duration-300 ease-in-out"></i>
            </span>
            <div className="data p-2 flex flex-col gap-1 transition-transform duration-300 ease-in-out lg:group-hover:-translate-y-10">
              <span className="flex justify-between items-center font-bold">
                <h1 className={`max-[548px]:text-[13.5px] max-[768.5px]:text-[15px] lg:text-[16px] text-[#333333] ${urbanist.className}`}>{item.name}</h1>
                <span className='font-medium'>
                  {data[0].rating}
                  <i className="ri-star-fill text-[#EABE12]"></i>
                </span>
              </span>
              <span className="flex justify-between items-center text-[#767676] font-medium text-[12.8px] max-[768.5px]:text-[14.25px]">
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
              <span className="z-10 cart lg:grid grid-cols-[1fr_.4fr] gap-4 items-center transition-opacity duration-300 ease-in-out group-hover:opacity-100 text-[20px] lg:opacity-0">
                <button className="w-full bg-[rgb(245,154,87)] overflow-hidden h-[36px] rounded-3xl text-white font-bold  py-[8px]  group/cart" onClick={(e)=>{e.stopPropagation(); e.preventDefault(); setSide(true); handleCart(item) }}>
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
             </Link>
        ))}
      </div>
      
      </div>
    </div>
    {
  side &&
    <Side_cart setSide={setSide} />
}
    </>
  )
}

export default cards
