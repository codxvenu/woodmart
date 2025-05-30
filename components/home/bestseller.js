import React, { useState } from "react";
import { urbanist } from "@/pages/_app";
import data from "@/itemz";
const bestseller = () => {
 
const[tab,setTab] = useState("all");
const activeStyle = "underline underline-offset-4 decoration-solid decoration-2 decoration-amber-500 text-black transition-colors duration-200";

  return (
    <div
      className={`${urbanist.className} lg:p-[70px_72px] p-[70px_5px]`}
    >
      <span className="flex justify-between items-center mb-6 max-[1024px]:flex-col max-[1024px]:gap-[10px]">
        <h1 className="md:text-[32px] text-[26px] font-bold">
          Weekly bestsellers
        </h1>{" "}
		
       <ul className="flex gap-3 font-bold text-[16px] text-[rgba(51,51,51,0.7)]">
  <li className={tab === "all" ? activeStyle : "decoration-0"} onClick={() => setTab("all")}>All</li>
  <li className={tab === "chair" ? activeStyle : "decoration-0"} onClick={() => setTab("chair")}>Chairs</li>
  <li className={tab === "sofas" ? activeStyle : "decoration-0"} onClick={() => setTab("sofas")}>Sofas</li>
  <li className={tab === "armchair" ? activeStyle : "decoration-0"} onClick={() => setTab("armchair")}>Armchairs</li>
  <li className={tab === "tables" ? activeStyle : "decoration-0"} onClick={() => setTab("tables")}>Tables</li>
</ul>

      </span>
      <div className="items-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  lg:gap-6 md:gap-4 gap-2 ">
        {data.map((item) => (
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
                      > <i className="ri-heart-line text-[#767676] text-[25px] font-light"></i></span>

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
                  {item.colors.map((color,index) => (
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
                  ))}
                </span>
              </span>
              <span className="z-10 cart lg:grid grid-cols-[1fr_.4fr] gap-4 items-center transition-opacity duration-300 ease-in-out group-hover:opacity-100 text-[20px] lg:opacity-0">
                <button className="w-full bg-[rgb(245,154,87)] overflow-hidden h-[36px] rounded-3xl text-white font-bold  py-[8px]  group/cart">
                  {" "}
                  <h1 className="text-[14px] group-hover/cart:-translate-y-6 transition-all duration-200 ease-in-out">
                    Add to cart
                  </h1>
                  <i className="ri-shopping-cart-2-line text-[24px] font-light block translate-y-1 group-hover/cart:-translate-y-7 transition-all duration-200 ease-in-out"></i>
                </button>
                <span className=" lg:flex hidden gap-[12px]">
                  <i className="ri-shuffle-line "></i>
                  <i className="ri-search-line text-[rgb(119, 119, 119)]"></i>
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default bestseller;
