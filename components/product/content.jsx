import { urbanist, workSans } from "@/pages/_app";
import React, { useState ,useEffect } from "react";

const content = () => {

    const [itemCount , setItemCount] = useState(1);
    const[show,setShow] = useState(0);
    useEffect(() => {
      console.log(show);
        
    }, [show]);

  return (
    <div className={`${workSans.className} grid lg:grid-cols-[1.15fr_.85fr] gap-5 bg-white min-[1200px]:p-[10px_72px] p-[20px_15px] `}>
      <div className="grid lg:grid-cols-2 grid-rows-2 gap-5">
        <img
        className="rounded-[6px] max-h-[438px]"
          src="https://woodmart.xtemos.com/furniture2/wp-content/uploads/sites/11/2023/04/wd-furniture-tables-prod-13-1.jpg"
          alt=""
        />
       <a className="max-h-[438px] flex"> 
         <video
  loop
  autoPlay
  muted
  className="rounded-[6px]"
  src="https://woodmart.xtemos.com/furniture2/wp-content/uploads/sites/11/2023/04/wd-single-product-video-1.mp4"
  style={{ width: '100%', height: 'auto' , objectFit : "cover"}}
/>
        </a>

        <img
        className="rounded-[6px] max-h-[438px]"
          src="https://woodmart.xtemos.com/furniture2/wp-content/uploads/sites/11/2023/04/wd-furniture-tables-prod-13-3.jpg"
          alt=""
        />
        <img
        className="rounded-[6px] max-h-[438px]"
          src="https://woodmart.xtemos.com/furniture2/wp-content/uploads/sites/11/2023/04/wd-furniture-tables-prod-13-4.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col text-[15px] gap-5">
        <span className="grid grid-cols-[3.5fr_.5fr] mt-[10px]">
          <h1 className={`${urbanist.className} lg:text-[28px] text-[22px] font-bold`}>
            Giro LR
          </h1>
          <a className="w-[100px] p-[10px] shadow-[0_0_2px_rgba(0,0,0,0.12)]">
            <img className=" max-w-[80px]" src="./kettal.jpg.webp" alt="" />
          </a>
        </span>
        <h2 className="font-bold">
          SKU : <span className="font-normal">TB-262</span>
        </h2>
        <span className="flex items-center">
          {[1, 2, 3, 4, 5].map((rate) =>
            rate <= 5 ? (
              <i className="ri-star-fill text-[#EABE12] text-[18px]"></i>
            ) : (
              <i className="ri-star-line text-[#bbb] text-[18px]"></i>
            )
          )}
          <h2 className="ml-2"> (2 customer reviews)</h2>
        </span>
        <span className="flex gap-2 p-[20px] bg-[rgba(16,16,16,0.03)]">
          {" "}
          <img src="./promotions.svg" alt="" />{" "}
          <span className="flex flex-col gap-2 text-[#777777]">
            <h1 className={`${urbanist.className} text-[18px] font-bold text-[#333333]`}>
              Soft Edge collection
            </h1>
            <h2>
              Hurry and get discounts up to 20% <span className="underline decoration-1 text-[#333333]">Read more</span>
            </h2>
          </span>
        </span>
        <p className="text-[#777777]">
          A new classic for the contemporary dining room, the Mondrian table
          reinterprets the light and elegant design of the sofa and coffee table
          collection of the same name.
        </p>
        <small className="lg:text-[34px] text-[22px] text-[#F59a57] font-medium">$449.00</small>
        <span className="lg:flex grid grid-cols-[1fr_2fr] gap-4 w-full">
          <span className="flex items-center lg:w-[20%] text-[#777777]">
            <button className="px-2 py-2 border-[1px] border-[rgba(0,0,0,0.1)] rounded-l-4xl cursor-pointer hover:bg-[rgb(245,154,87)] hover:text-white transition-colors ease-in-out duration-75" onClick={()=>{itemCount > 0? setItemCount(itemCount -1 ) : alert("cant order less than 1 product") }}>
              -
            </button>
            <h3 className="border-[1px] border-[rgba(0,0,0,0.1)] border-x-0 px-2 py-2">
              {itemCount}
            </h3>
            <button className="px-2 py-2 border-[1px] border-[rgba(0,0,0,0.1)] rounded-r-4xl cursor-pointer hover:bg-[rgb(245,154,87)] hover:text-white transition-colors ease-in-out duration-75" onClick={()=>{itemCount < 20 ? setItemCount(itemCount + 1 ) : alert("cant order more than 20 product")}}>
              +
            </button>
          </span>
          <button className="bg-[rgb(245,154,87)] lg:w-[35%] rounded-[20px] text-white cursor-pointer">
            Add to cart
          </button>
          <button className="bg-black text-white lg:w-[35%] rounded-[20px] col-span-2 py-2 cursor-pointer">
            Buy now
          </button>
        </span>
        <span className="lg:flex grid grid-cols-2 lg:gap-4 gap-2 text-[#333] mt-6 font-medium cursor-pointer">
        <h2 className="col-span-2"><i class="ri-shuffle-line text-[16px] mr-2 "></i>Add to compare</h2>
        <h2><i class="ri-heart-line text-[16px] mr-2"></i>Add to wishlist</h2>
        <h2><i class="ri-ruler-line text-[16px] mr-2"></i>Size Guide</h2></span>
        <ul>
            <li className="overflow-hidden text-[#242424]  relative cursor-pointer" onClick={()=>{show === 1? setShow(0) : setShow(1)}}> <span className="flex justify-between items-center">
               <h2>Shipping and returns</h2><i class={`ri-arrow-drop-down-line ${show===1 ? "rotate-180": "rotate-0"} text-3xl text-[#bbb] transition-transform duration-200 ease-in-out`} ></i>
              </span>
            <p className={`text-[#777777] mt-[10px] text-start transition-all duration-200 ease-in-out ${show===1? "h-auto" : "h-0"}`}>Authorities in our business will tell in no uncertain terms that Lorem Ipsum is that huge, huge no no to forswear forever. Not so fast, I’d say, there are some redeeming factors in favor of greeking text, as its use is merely the symptom of a worse problem to take into consideration.</p>
            </li>
            <hr className="border-[#bbb] my-3" />
             <li className="overflow-hidden text-[#242424] cursor-pointer  relative" onClick={()=>{show === 2? setShow(0) : setShow(2)}}> <span className="flex justify-between items-center">
               <h2>Product care</h2><i class={`ri-arrow-drop-down-line ${show===2 ? "rotate-180": "rotate-0"} text-3xl text-[#bbb] transition-transform duration-200 ease-in-out`} ></i>
              </span>
            <p className={`mt-[10px] text-start transition-all duration-200 ease-in-out text-[#777777] ${show===2? "h-auto" : "h-0"}`}>Authorities in our business will tell in no uncertain terms that Lorem Ipsum is that huge, huge no no to forswear forever. Not so fast, I’d say, there are some redeeming factors in favor of greeking text, as its use is merely the symptom of a worse problem to take into consideration.</p>
            </li>
            </ul>
      </div>
    </div>
  );
};

export default content;
