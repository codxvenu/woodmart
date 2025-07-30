import React, { useEffect, useState ,useContext } from "react";
import { urbanist } from "@/pages/_app";
import { Product } from "@/context/ProductContext";
import Link from "next/link";
import Side_cart from "../shopping_cart/side_cart";
import { cartAdd } from "@/Services/api";
const bestseller = () => {
 const{wishlist,setWishlist,compare,setCompare,cart,setCart,data} = useContext(Product);
const[tab,setTab] = useState("all");
const activeStyle = "underline underline-offset-4 decoration-solid decoration-2 decoration-amber-500 text-black transition-colors duration-200";
const[show,setShow] = useState(false);
const[side,setSide] = useState(false);
useEffect(()=>{
  setShow(true);
  const timer = setTimeout(()=>{
    if(data){
      setShow(false);
    }
  },2000);
  return ()=>clearTimeout(timer);
},[tab])
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

  return (
    <>
    <div
      className={`${urbanist.className} lg:px-[72px] lg:pb-[70px] lg:pt-0 p-[70px_5px]`}
    >
      <span className="flex justify-between items-center mb-6 max-[1024px]:flex-col max-[1024px]:gap-[10px]">
        <h1 className="md:text-[32px] text-[26px] font-bold">
          Weekly bestsellers
        </h1>{" "}
		
       <ul className="flex gap-3 font-bold text-[16px] text-[rgba(51,51,51,0.7)] cursor-pointer">
  <li className={tab === "all" ? activeStyle : "decoration-0"} onClick={() => setTab("all")}>All</li>
  <li className={tab === "Chairs" ? activeStyle : "decoration-0"} onClick={() => setTab("Chairs")}>Chairs</li>
  <li className={tab === "Sofas" ? activeStyle : "decoration-0"} onClick={() => setTab("Sofas")}>Sofas</li>
  <li className={tab === "Armchairs" ? activeStyle : "decoration-0"} onClick={() => setTab("Armchairs")}>Armchairs</li>
  <li className={tab === "Tables" ? activeStyle : "decoration-0"} onClick={() => setTab("Tables")}>Tables</li>
</ul>

      </span>
      {!show && 
      <div className="items-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  lg:gap-6 md:gap-4 gap-2 ">
        {data.filter((item)=>item.category === tab || tab === "all").slice(0,12).map((item) => (
        <Link href={`/product/${item.id}`} key={item.id}>
          <div
          className="relative item z-20 p-2 bg-white rounded-2xl lg:max-h-[400px] transition-transform duration-300 group lg:hover:-translate-y-1 md:overflow-hidden"
          key={item.id}
          >
             <span className="absolute w-[95%] tag mb-3 flex justify-between items-center p-[4px_15px] font-bold uppercase">
              <h1 className="text-[12px]">Sold out</h1>
			  <span className="flex flex-col justify-center items-center gap-0.5 group/color w-[22px]">
                      <small className=" -translate-x-1/2 p-[8px] text-[10px] text-white bg-black rounded whitespace-nowrap group-hover/color:opacity-100 transition-opacity duration-200 absolute top-[-25%] right-[-8px] opacity-0">
                        Add to wishlist
                      </small>
					    <span
                        className="block group/color w-[15px] h-[15px] rounded-[50%] cursor-pointer relative top-[-10px] " 
                        > <i className={` ${!wishlist.some((i)=>i.name === item.name) ? "ri-heart-line" : "ri-check-line"} text-[#767676] text-[25px] font-light`} onClick={(e)=>{e.stopPropagation(); e.preventDefault(); !wishlist.some((i)=>i.name === item.name) && setWishlist([...wishlist,{...item}])}}></i></span>

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
            <div className="data p-2 flex flex-col gap-1 transition-transform duration-300 ease-in-out lg:group-hover:-translate-y-10 bg-white">
              <span className="flex justify-between items-center font-bold">
                <h1 className={` ${urbanist.className} max-[548px]:text-[13.5px] max-[768.5px]:text-[15px] lg:text-[16px]`}>{item.name}</h1>
                <span>
                  {data[0].rating}
                  <i className="ri-star-fill text-[#EABE12]"></i>
                </span>
              </span>
              <span className="flex justify-between items-center text-[#a5a5a5] font-medium text-[12.8px] max-[768.5px]:text-[14.25px]">
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
      }
      {show && 
      <span className=" h-[100vh] flex items-start justify-center pt-28">
        <svg aria-hidden="true" className="w-[30px] h-[30px] text-transparent animate-spin animate-duration-[.45s] rounded-full border-1 border-[transparent] border-l-[#242424]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
      </span>}
    </div>
    {
  side &&
    <Side_cart setSide={setSide} />
}
    </>
  );
};

export default bestseller;
