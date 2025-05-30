import React, { useState } from "react";

function m_nav() {
  const [nav, setNav] = useState(false);
  const [menu, setMenu] = useState(false);
  return (
    <>
      <nav className="lg:hidden flex pl-[1rem] py-2 z-1">
        <ul className="flex items-center gap-[20px] justify-between w-[100%]">
          <li>
            <i
              className="ri-menu-line text-[20px]"
              onClick={() => {
                nav === false ? setNav(true) : setNav(false);
              }}
            ></i>
          </li>
          <li>
            <img
              className="w-[180px] lg:w-[210px] h-[40px] max-w-[210px]"
              src="./10007.svg"
              decoding="async"
            />
          </li>
          <li className="flex !rounded-4xl !text-[20px]   ">
            <i className="ri-shopping-cart-line"></i>{" "}
            <span>
              <small className="!text-white !text-[12px] !bg-[rgb(245,154,87)] relative block bottom-[1.05vh] left-[-52.4%] shadow-[0_0_4px_rgba(0,0,0,0.17)] text-center rounded-4xl w-[19px]">
                0
              </small>
            </span>{" "}
          </li>
        </ul>
      </nav>
      {nav && (
        <div className="w-screen h-screen flex flex-col z-[1000]">
          <nav className="  w-[75vw] h-[100vh] bg-white fixed z-[1000] top-0 shadow-[0_0_4px_rgba(0,0,0,0.17)] overflow-scroll scrollbar-hide animate-in slide-in-from-left-72">
            <li className="w-[100%] flex items-center shadow-[0_0_4px_rgba(0,0,0,0.17)]">
           
              <input
                className="w-[100%] border-0  p-[1.1rem] px-[2.4rem] focus:outline-none focus:border-0  "
                type="text"
                placeholder="Search for products"
              />
               <i className="w-[20%] ri-search-line text-[#747474] text-[22px] "></i>
            </li>
            <li className="grid grid-cols-2 justify-center text-center items-center font-medium ">
              <h1
                className={
                  menu === false
                    ? "bg-[#e7e7e7] py-4 transition-all duration-200 ease-in"
                    : "bg-transparent py-4 text-[#747474] transition-all duration-200 ease-in"
                }
                onClick={() => {
                  menu === true ? setMenu(false) : setMenu(true);
                }}
              >
                {" "}
                CATEGORIES
              </h1>
              <h1
                className={
                  !menu === false
                    ? "bg-[#e7e7e7] py-4 transition-all duration-200 ease-in"
                    : "bg-transparent py-4 text-[#747474] transition-all duration-500 ease-in"
                }
                onClick={() => {
                  menu === false ? setMenu(true) : setMenu(false);
                }}
              >
                MENU
              </h1>
            </li>
            <hr
              className={
                menu === false
                  ? "text-[rgb(245,154,87)] w-[50%] border-t-[2px]"
                  : "border-t-[2px] text-[rgb(245,154,87)] h-20% ml-[50%] w-[50%]"
              }
            />
            {!menu && (
              <ul className="z">
                <li className="flex p-[1.2rem] gap-4 px-[1.2rem] border-b-[1px] border-[#5c5c5c36] font-medium">
                 <img src="./Chair.svg" alt="" />
                
                  <h1>Chairs</h1>
                </li>
                <li className="flex p-[1.2rem] gap-4 px-[1.2rem] border-b-[1px] border-[#5c5c5c36] font-medium">
                 <img src="table.svg" alt="" />
                  <h1>Tables</h1>
                </li>
                <li className="flex p-[1.2rem] gap-4 px-[1.2rem] border-b-[1px] border-[#5c5c5c36] font-medium">
                  <img src="/sofas.svg" alt="" />
                  <h1>Sofas</h1>
                </li>
                <li className="flex p-[1.2rem] gap-4 px-[1.2rem] border-b-[1px] border-[#5c5c5c36] font-medium">
                  <img src="/armchair.svg" alt="" />
                  <h1>Armchairs</h1>
                </li>
                <li className="flex p-[1.2rem] gap-4 px-[1.2rem] border-b-[1px] border-[#5c5c5c36] font-medium">
                <img src="/bed.svg" alt="" />
                  <h1>Beds</h1>
                </li>
                <li className="flex p-[1.2rem] gap-4 px-[1.2rem] border-b-[1px] border-[#5c5c5c36] font-medium">
                  <img src="/storage.svg" alt="" />
                  <h1>storage</h1>
                </li>
                <li className="flex p-[1.2rem] gap-4 px-[1.2rem] border-b-[1px] border-[#5c5c5c36] font-medium">
                <img src="/textile.svg" alt="" />
                  <h1>textiles</h1>
                </li>
                <li className="flex p-[1.2rem] gap-4 px-[1.2rem] border-b-[1px] border-[#5c5c5c36] font-medium">
                 <img src="/lighting.svg" alt="" />
                  <h1>lighting</h1>
                </li>
                <li className="flex p-[1.2rem] gap-4 px-[1.2rem] border-b-[1px] border-[#5c5c5c36] font-medium">
               <img src="/toy.svg" alt="" />
                  <h1>Toys</h1>
                </li>
                <li className="flex p-[1.2rem] gap-4 px-[1.2rem] border-b-[1px] border-[#5c5c5c36] font-medium">
              <img src="/decor.svg" alt="" />
                  <h1>Decor</h1>
                </li>
              </ul>
            )}
          </nav>
          <div
            className="w-[25vw] h-screen bg-[rgba(0,0,0,0.7)] fixed z-[1000] top-0 right-0"
            onClick={() => {
              nav === false ? setNav(true) : setNav(false);
            }}
          ></div>
        </div>
      )}
      <nav className="lg:hidden z-[100] fixed bottom-0 w-screen px-5 py-2 shadow-[0_0_4px_rgba(0,0,0,0.17)] bg-white">
        <ul className="grid grid-cols-4 w-full text-[12px] font-medium items-center">
          <li>
            <i className="!text-[22px] ri-store-3-line"></i>
            <h1>Shop</h1>
          </li>
          <li>
            <i className="!text-[22px] ri-heart-line"></i>
            <h1>wishlist</h1>
          </li>
          <li className="bg-transparent flex !rounded-4xl flex-col relative items-center">
            <i className="text-[22px] ri-shopping-cart-line w-fit relative"> 
               <span className="absolute top-[-3px] bg-[rgb(245,154,87)]" 
               style={{
                 insetInlineEnd:"-9px",
                 width :" 15px",
                 height: "15px",
                 borderRadius: "50%",
                 color:" #fff",
                 textAlign:" center",
                 letterSpacing: "0",
                 fontWeight: "400",
                 fontSize: "9px",
                 lineHeight: "15px" }} >
   
            0
            </span></i>
            <h1>cart</h1>
          
          </li>

          <li>
            <i className="!text-[22px] ri-user-line"></i>
            <h1 className="!normal-case">My account</h1>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default m_nav;
