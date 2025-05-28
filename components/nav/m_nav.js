import React from "react";

function m_nav(){
return(
    <nav className="lg:block hidden px-20 py-2">
        <ul className="flex items-center gap-[27px]">
            <li><img className="w-[210px] h-[40px] max-w-[210px]" src="./10007.svg" decoding="async"/></li>
            <li className="w-[52%] flex items-center"><i className="ri-search-line text-[rgb(119, 119, 119)] relative left-[30px]"></i><input className="w-[100%] border-[1px] border-[rgba(0,0,0,0.1)] rounded-3xl p-[0.4rem] px-[2.4rem]" type="text" placeholder="Search for products" /></li>
            <li><i className="ri-shuffle-line icon"></i></li>
            <li><i className="ri-heart-line icon"></i></li>
            <li className="flex gap-2 items-center icon !rounded-4xl !text-[15px] font-medium "><i className="ri-user-line"></i><h1>Login/Register</h1></li>
            <li className="icon flex relative !rounded-4xl !text-[16px] gap-2 !bg-black !text-white"><i className="ri-shopping-cart-line"></i><h1>$0.00</h1>  <small className="!text-amber-300 !text-[14px] !bg-white absolute right-0 top-[-5px] shadow-[0_0_4px_rgba(0,0,0,0.17)] text-center rounded-4xl w-[19px]">0</small>
               </li>
                </ul>
                
    </nav>
)

}

export default m_nav;