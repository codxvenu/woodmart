import React, { useContext } from 'react'
import { urbanist,workSans } from '@/pages/_app'
import data from '@/itemz'
import { Product } from '@/context/ProductContext'
import { cartAdd } from '@/Services/api'
const furniture_collec = () => {
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
const{wishlist,setWishlist,compare,setCompare,setCart,cart}=useContext(Product)
  return (
       <div className={`${urbanist.className} lg:p-[55px_72px] p-[30px_5px] min-[768px]:grid lg:grid-cols-[1.6fr_1fr] grid-cols-2 flex flex-col max-[1024px]:gap-2 gap-8 overflow-hidden`}>
        <span className=''>
          <span className="flex flex-col gap-3 items-start mb-10 text-start">
            <h1 className="text-[22px]  lg:text-[32px] font-bold">
             Furniture collection of the week
            </h1>
            <small
              className={`text-[#767676] text-[14px] lg:text-[16px] text-center ${workSans.className}`}
            >
             The most popular products from the collection
            </small>
          </span>
          <div className="items-container max-[768px]:w-full max-[1024px]:w-[50vw] w-full flex lg:gap-6 md:gap-4 gap-2 overflow-scroll scrollbar-hide">
            {data.slice(0,3).map((item) => (
         <div
  className={`relative item z-20 p-2 bg-white rounded-2xl lg:max-h-[calc(425px-2vw)]  max-[768px]:w-[calc(50vw-17px)] w-[calc(25vw-17px)] lg:w-[calc((61.54vw-158px)/3)]
 flex-shrink-0 group md:overflow-hidden`}
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
                <h1 className={`max-[548px]:text-[13.5px] max-[768.5px]:text-[15px] lg:text-[16px] ${urbanist.className}`}>{item.name}</h1>
                <span>
                  {data[0].rating}
                  <i className="ri-star-fill text-[#EABE12]"></i>
                </span>
              </span>
              <span className="flex justify-between items-center text-[#a5a5a5] font-bold text-[12.8px] max-[768.5px]:text-[14.25px]">
               <h1 className="max-[548px]:text-[12.8px] min-[768.5px]:text-[14.25px]">
				{item.category}
				</h1> 
              </span>
              <span className="flex justify-between items-center text-[rgb(245,154,87)] font-bold max-[548px]:text-[13.5px] max-[768.5px]:text-[15px] lg:text-[16px]">
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
                <button className="w-full bg-[rgb(245,154,87)] overflow-hidden h-[36px] rounded-3xl text-white font-bold  py-[8px]  group/cart" onClick={(e)=>{e.stopPropagation(); e.preventDefault(); handleCart(item)}}>
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
        ))}
          </div>
        </span>
        <span className="w-full h-full">
            <img className='w-[100%] h-[90%] rounded-[12px]'   src="/10105.jpg" alt="" />
        </span>

    </div>
  )
}

export default furniture_collec
