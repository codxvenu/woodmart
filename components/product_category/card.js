import React, { useContext, useEffect, useState } from "react";
import { urbanist, workSans } from "@/pages/_app";
import {  useRouter } from "next/router";
import { Product } from "@/context/ProductContext";
import Link from "next/link";
import Side_cart from "../shopping_cart/side_cart";
import { cartAdd } from "@/Services/api";
const card = ({ classNamees ,start, end, page }) => {

  const{product ,cart,setCart ,setWishlist,wishlist,compare,setCompare,filtered }=useContext(Product)

  const[side,setSide] = useState(false);
  const router = useRouter();
  const[small,setsmall] = useState(false);
useEffect(() => {
  window.scrollTo({ top: 0 , behavior: "smooth" });
}, [page]);
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
useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setsmall(false);
      } else {
        setsmall(true); // optional: reset to true on larger screen
      }
    };

    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize); // update on resize
    console.log(product);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);
return (
  <>
    <div className={`${workSans.className} md:pt-[30px] pt-[20px]`}>
    {small && classNamees === 1 ? 

      <div
        className={`items-container grid grid-cols-${classNamees} md:gap-4 gap-4 `}
      >
        {filtered.filter((idx)=>idx.category === product || product === "shop" ).slice(start,end+1).map((item,index) => (
         <Link href="/product">
         <div key={index} className="relative cursor-pointer flex md:flex-row flex-col items-center flex-[0_0_300px] md:p-[30px] p-[10px] bg-white rounded-[10px] group" >
            <span className="relative lg:w-[300px] flex justify-center">
              <span className="overflow-hidden relative flex justify-center">
                <img className="md:max-w-[300px] max-w-[80%]" src={item.img} alt="" />
                <span className="arrows h-[20px] inset-0 text-[#767676] w-full absolute top-[50%] text-[25px] lg:flex hidden justify-between items-center">
                  <i className="ri-arrow-left-s-line group-hover:translate-0 -translate-x-full transition-transform duration-300 ease-in-out"></i>
                  <i className="ri-arrow-right-s-line group-hover:translate-0 translate-x-full transition-transform duration-300 ease-in-out"></i>
                </span>
              </span>
            </span>
            <div className="data p-4 flex flex-col md:gap-[8px] gap-[4px] w-full max-[768px]:items-center">
              <span className="flex justify-between items-start font-bold flex-col">
                <h1 className={`max-[548px]:text-[13.5px] max-[768.5px]:text-[15px] lg:text-[19.5px] ${urbanist.className}`}>
                  {item.name}
                </h1>
              </span>
              <span className="flex justify-between md:items-start items-center flex-col md:gap-[8px] gap-[4px] text-[#a5a5a5] font-bold text-[12.8px] max-[768.5px]:text-[14.25px]">
                <h1 className="max-[548px]:text-[12.8px] min-[768.5px]:text-[14.25px] font-normal">
                  {item.category}
                </h1>
                <span>
                  {[1, 2, 3, 4, 5].map((rate) =>
                    rate <= filtered[0].rating ? (
                      <i className="ri-star-fill text-[#EABE12]"></i>
                    ) : (
                      <i className="ri-star-line text-[#bbb]"></i>
                    )
                  )}
                </span>
              </span>
              <span className="flex flex-col justify-between md:items-start items-center text-[rgb(245,154,87)] font-bold max-[548px]:text-[13.5px] max-[768.5px]:text-[15px] lg:text-[16px] gap-[10px]">
                <h1 className="text-[21px]">${item.price}</h1>
                <span className="lg:hidden colors flex mt-[-10px]">
                  {item.colors.map((color, index) => (
                    <span
                      key={index}
                      className="md:flex hidden flex-col justify-center items-center gap-0.5 group/color w-[22px]"
                    >
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
                  ))}
                </span>
                <p className="text-[#777777] text-[15px] font-normal md:block hidden">
                  Soft curves and tapering slender lines are inspired by modern
                  design. The result is a classNameic yet contemporary chair,
                  ideally combined with the table by the same name.
                </p>
              </span>
              <span className="max-[768px]:items-center">
                {" "}
                <button className=" bg-[rgb(245,154,87)] overflow-hidden mt-2 h-[36px] rounded-3xl text-white font-bold  text-[12px] p-[5px_14px]  group/cart" onClick={(e)=>{e.preventDefault(); e.stopPropagation(); handleCart(item)}}>
                  {" "}
                  <h1 className="text-[12px] font-medium translate-y-1 group-hover/cart:-translate-y-6 transition-all duration-200 ease-in-out">
                    Add to cart
                  </h1>
                  <i className="ri-shopping-cart-2-line text-[22px] font-light block translate-y-2 group-hover/cart:-translate-y-6 transition-all duration-200 ease-in-out"></i>
                </button>
              </span>
              <span className="z-10 cart lg:grid grid-cols-[1fr_.4fr] hidden gap-4 items-center transition-opacity duration-300 ease-in-out group-hover:opacity-100 text-[20px] lg:opacity-0">
                <span className="flex flex-col-reverse gap-[16px] text-[#333] py-2 bg-white shadow w-fit absolute top-[22px] left-[28%] rounded-[6px] transition-transform duration-300 ease-in-out translate-x-10 group-hover:translate-x-0" onClick={()=>{wishlist.some((i)=>i.name === item.name) && setWishlist([...wishlist,{...item}])}}>
                  <i className={` ${!wishlist.some((i)=>i.name === item.name) ? "ri-heart-line" : "ri-check-line"} hover:text-[#767676] px-3 relative group/wish`}>
                    
                    <span className="group-hover/wish:opacity-100 transition-opacity duration-200 opacity-0 -translate-x-1/2 absolute flex left-[-100%] top-0">
                      <small
                        className={`${workSans.className}  p-[8px] text-[11px] text-white bg-black rounded-[4px] whitespace-nowrap  `}
                      >
                        Add to wishlist
                      </small>
                      <i className="ri-arrow-right-s-fill text-[20px] text-black translate-x-[-8px]"></i>
                    </span>
                  </i>
                  <i className="ri-shuffle-line hover:text-[#767676] px-3 relative group/compare">
                    <span className="group-hover/compare:opacity-100 transition-opacity duration-200 opacity-0 -translate-x-1/2 absolute flex left-[-100%] top-0">
                      <small
                        className={`${workSans.className} p-[8px] text-[11px] text-white bg-black rounded-[4px] whitespace-nowrap `}
                      >
                        Add to compare
                      </small>
                      <i className="ri-arrow-right-s-fill text-[20px] text-black translate-x-[-8px]"></i>
                    </span>
                  </i>
                  <i className="ri-search-line hover:text-[#767676] px-3 relative group/quick">
                    <span className="group-hover/quick:opacity-100 transition-opacity duration-200 opacity-0 -translate-x-1/2 absolute flex left-[-70%] top-0">
                      <small
                        className={`${workSans.className}  p-[8px] text-[11px] text-white bg-black rounded-[4px] whitespace-nowrap`}
                      >
                        Quick View
                      </small>
                      <i className="ri-arrow-right-s-fill text-[20px] text-black translate-x-[-8px]"></i>
                    </span>
                  </i>
                </span>
              </span>
            </div>
          </div>
          </Link>
        ))}
      </div>
    :
        <div className={`items-container grid  md:grid-cols-${classNamees} grid-cols-2  lg:gap-6 md:gap-4 gap-2 `}>
        {filtered.filter((idx)=>idx.category === product || product === "shop" ).slice(start,end+1).map((item,index) => (
         <Link href={`/product/${item.id}`}>

         <div
            className={classNamees === 4? "relative item z-20 p-2 bg-white rounded-2xl transition-transform duration-300 ease-in-out group lg:hover:-translate-y-4 md:overflow-hidden  h-[380px] cursor-pointer" : "relative item z-20 p-2 bg-white rounded-2xl transition-transform duration-300 ease-in-out group lg:hover:-translate-y-4 cursor-pointer  md:overflow-hidden lg:max-h-[476px]"}
            key={index}
          >
             <span className="absolute w-[95%] tag mb-3 flex justify-between items-center p-[4px_15px] font-bold uppercase">
              <h1 className="text-[12px]">Sold out</h1>
			  <span className="flex flex-col justify-center items-center gap-0.5 group/color w-[22px]">
                      <small className=" -translate-x-1/2 p-[8px] text-[10px] text-white bg-black rounded whitespace-nowrap group-hover/color:opacity-100 transition-opacity duration-200 absolute top-[-25%] right-[-8px] opacity-0">
                        Add to wishlist
                      </small>
					    <span
                        className="block group/color w-[15px] h-[15px] rounded-[50%] cursor-pointer relative top-[-10px] z-[1000]" onClick={(e)=>{e.stopPropagation(); e.preventDefault(); !wishlist.some((i)=>i.name === item.name) && setWishlist([...wishlist,{...item}])}}
                      > <i className={` ${!wishlist.some((i)=>i.name === item.name) ? "ri-heart-line" : "ri-check-line"} text-[#767676] text-[25px] font-light`}></i></span>

                      <i className="ri-arrow-right-s-fill absolute top-[-5px] text-[18px] text-black right-[33px] group-hover/color:opacity-100 transition-opacity duration-200 opacity-0"></i>
                     
                       </span>
             
            </span>
            <img
              className="mt-3 w-full"
              width={258}
              height={259}
              src={item.img}
              alt=""
            />
            <span className="arrows h-[20px] inset-0 text-[#767676] w-full absolute top-[30%] text-[25px] lg:flex hidden justify-between items-center">
              <i className="ri-arrow-left-s-line group-hover:translate-0 -translate-x-full transition-transform duration-300 ease-in-out"></i>
              <i className="ri-arrow-right-s-line group-hover:translate-0 translate-x-full transition-transform duration-300 ease-in-out"></i>
            </span>
            <div className={classNamees === 4 ? "data p-2 flex flex-col gap-1 transition-transform duration-300 ease-in-out lg:group-hover:-translate-y-8 translate-y-4" : `data p-2 flex flex-col gap-1 transition-transform duration-300 ease-in-out  lg:group-hover:-translate-y-8 min-[768px]:translate-y-2 translate-y-4`}>
              <span className="flex justify-between items-center font-medium">
                <h1 className="max-[548px]:text-[13.5px] lg:text-[15px] ">{item.name}</h1>
                <span>
                  {filtered[0].rating}
                  <i className="ri-star-fill text-[#EABE12]"></i>
                </span>
              </span>
              <span className="flex justify-between items-center text-[#767676] font-normal text-[12.8px] max-[768.5px]:text-[14.25px]">
               <h1 className="max-[548px]:text-[12.8px] min-[768.5px]:text-[14.25px]">
				{item.category}
				</h1> 
              </span>
              <span className="flex justify-between items-center text-[rgb(245,154,87)] font-medium max-[548px]:text-[13.5px] text-[16px]">
                <h1>${item.price}</h1>
                <span className="colors mt-[-10px] min-[768px]:flex hidden">
                  {item.colors.length > 0 ? item.colors.map((color,index) => (
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
                  ))
                : <span className="flex flex-col justify-center items-center gap-0.5 group/color w-[22px]">
                      <span
                        className="block group/color w-[15px] h-[15px] rounded-[50%] cursor-pointer relative top-[-10px] bg-transparent">
                        <i className="ri-arrow-down-s-fill absolute top-[-22px] text-[20px] text-black left-[-3px] group-hover/color:opacity-100 transition-opacity duration-200 opacity-0"></i>
                      </span>
                    </span>
                    }

                </span>
              </span>
              <span className="z-10 cart lg:grid grid-cols-[1fr_.4fr] gap-4 items-center transition-opacity duration-300 ease-in-out group-hover:opacity-100 text-[20px] lg:opacity-0">
                <button className="w-full bg-[rgb(245,154,87)] overflow-hidden h-[36px] rounded-3xl text-white font-bold  py-[8px]  group/cart" onClick={(e)=>{e.stopPropagation(); e.preventDefault(); setSide(true); handleCart(item)}}>
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
    }
   
    
    </div>
    {
  side &&
    <Side_cart setSide={setSide} />
}
  </>
  );
};

export default card;
