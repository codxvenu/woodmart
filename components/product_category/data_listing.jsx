import React, { useEffect, useState } from "react";
import { workSans } from "@/pages/_app";
import Card from "./card";
import Filter_bar from "./filter_bar";
const data_listing = () => {
  const [display_size, setDisplaysize] = useState(9);
  const [display_type, setDisplaytype] = useState(3);
  const count = 20;
  const [page, setPage] = useState(0);
  const [start, setStart] = useState(0);
  const total_pages = Math.ceil(count / display_size);
  const [showFilterBar, setShowFilterBar] = useState(false);
  useEffect(() => {
    localStorage.setItem("type", display_type.toString());
    console.log(display_type, "size");
  }, [display_type]);
  useEffect(() => {
    setStart(0);
    setPage(0);
  }, [display_size]);
  useEffect(() => {
    setStart(page * display_size);
    console.log(start, display_size, page);
  }, [page]);
  useEffect(() => {
    if (total_pages === 1) {
      setStart(0);
    }
  }, [total_pages]);
  return (
    <div className={` md:p-[10px_30px] p-[10px_10px] ${workSans.className}`}>
      <div className="min-[1200px]:block hidden">
        <span className="head flex justify-between items-center ">
          <small className="!text-[15px] text-[#757575]">
            {display_size < count
              ? `Showing ${start + 1} - ${
                  count < display_size * (page + 1)
                    ? count
                    : display_size * (page + 1)
                } of ${count} results`
              : `Showing all ${count} results`}
          </small>
          <span className="flex items-center gap-4">
            <ul className="flex items-center gap-1.5 !text-[15px] text-[#757575]">
              <li>Show:</li>
              <li
                className={display_size === 9 ? "active" : ""}
                onClick={() => {
                  setDisplaysize(9);
                }}
              >
                9
              </li>
              /
              <li
                className={display_size === 12 ? "active" : ""}
                onClick={() => {
                  setDisplaysize(12);
                }}
              >
                12
              </li>
              /
              <li
                className={display_size === 18 ? "active" : ""}
                onClick={() => {
                  setDisplaysize(18);
                }}
              >
                18
              </li>
              /
              <li
                className={display_size === 24 ? "active" : ""}
                onClick={() => {
                  setDisplaysize(24);
                }}
              >
                24
              </li>
            </ul>
            <span className="icons_container flex gap-2">
              <i
                className={
                  display_type === 1
                    ? "active ri-menu-fill !text-[25px]"
                    : "ri-menu-fill !text-[25px] !text-[#777777]"
                }
                onClick={() => {
                  setDisplaytype(1);
                }}
              ></i>
              <i
                className={
                  display_type === 3
                    ? "active ri-layout-grid-fill !text-[25px]"
                    : "ri-layout-grid-fill !text-[25px] !text-[#777777]"
                }
                onClick={() => {
                  setDisplaytype(3);
                }}
              ></i>
              <i
                className={
                  display_type === 4
                    ? "active ri-layout-grid-2-fill !text-[25px]"
                    : "ri-layout-grid-2-fill !text-[25px] !text-[#777777]"
                }
                onClick={() => {
                  setDisplaytype(4);
                }}
              ></i>
            </span>
            <span className="rounded-4xl pr-[10px] py-[4px] border-2 border-[rgba(0,0,0,0.1)] bg-white">
              <select
                name="sort"
                id=""
                className=" p-[8px] rounded-4xl text-[14px] focus:outline-none focus:ring-0 border-0"
              >
                <option value="">Sort by popularity</option>
                <option value="">Sort by average rating</option>
                <option value="">Sort by latest</option>
                <option value="">Sort by price : low to high</option>
                <option value="">Sort by price : high to low</option>
              </select>
            </span>
          </span>
        </span>
      </div>
      <div className=" min-[1200px]:hidden flex justify-between px-[5px] text-[#333333] ">
        <span className="flex gap-2  items-center" onClick={()=>{showFilterBar === true ? setShowFilterBar(false) : setShowFilterBar(true)}}>
          <i class="ri-menu-fill text-[20px] font-normal"></i>
          <small className="text-[15px] font-bold">Show sidebar</small>
        </span>
        <span className="block relative">

        <select
                name="sort"
                id=""
                className="p-0 absolute rounded-4xl text-[14px] focus:outline-none focus:ring-0 border-0 text-transparent w-[20px]"
              >
                <option className="text-black" value="">Sort by popularity</option>
                <option className="text-black" value="">Sort by average rating</option>
                <option className="text-black" value="">Sort by latest</option>
                <option className="text-black" value="">Sort by price : low to high</option>
                <option className="text-black" value="">Sort by price : high to low</option>
              </select>
        <i class="ri-arrow-up-down-line font-normal text-[20px]"></i>
        </span>
        {showFilterBar && 
        <div>
         <span className="bg-[rgba(0,0,0,0.8)] block w-screen h-screen fixed top-0 left-0 z-[100]" onClick={()=>setShowFilterBar(false)}></span>
        <div className="fixed w-fit h-screen bg-white top-0 left-0 overflow-x-hidden overflow-y-scroll min-[1200px]:hidden z-[100]">
           <span className="p-[15px] flex items-center justify-end gap-0.5 border-[1px] border-[#76767643]" onClick={()=>setShowFilterBar(false)}><i class="ri-close-fill text-2xl"></i><small className="text-[#333333] text-[15px] font-medium">Close</small></span>

          <Filter_bar/>
        </div>
        </div>
         } 
      </div>
      <Card
        classes={display_type}
        start={start}
        page={page}
        end={display_size * (page + 1)}
      />
      {total_pages !== 1 && (
        <ul className="flex gap-3 justify-center items-center mt-4">
          {total_pages - page !== total_pages && (
            <li
              onClick={() => {
                setPage(page - 1);
              }}
              className="flex  items-center justify-center px-[5px] min-w-[34px] h-[34px] text-[18px] rounded-[5px] transition-all duration-[.2s] ease-linear text-[#242424]"
            >
              <i class="ri-arrow-left-s-line"></i>
            </li>
          )}
          {[...Array(total_pages)].map((i, index) => (
            <li>
              <span
                className={
                  page !== index
                    ? "flex  items-center justify-center px-[5px] min-w-[34px] h-[34px] font-[600] text-[14px] rounded-[5px] transition-all duration-[.2s] ease-linear text-[#242424]"
                    : " inline-flex  items-center justify-center px-[5px] min-w-[34px] h-[34px] font-[600] text-[14px] rounded-[5px] transition-all duration-[.2s] ease-linear text-white bg-[rgb(245,154,87)]"
                }
                onClick={() => {
                  setStart(index * display_size);
                  setPage(index);
                  console.log(page);
                }}
              >
                {index + 1}
              </span>
            </li>
          ))}
          {total_pages - page - 1 !== 0 && (
            <li
              onClick={() => {
                setPage(page + 1);
              }}
              className="flex  items-center justify-center px-[5px] min-w-[34px] h-[34px] text-[18px] rounded-[5px] transition-all duration-[.2s] ease-linear text-[#242424]"
            >
              <i class="ri-arrow-right-s-line"></i>
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default data_listing;
