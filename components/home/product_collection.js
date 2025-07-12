import React from "react";
import { urbanist, workSans } from "@/pages/_app";

const product_collection = () => {
  return (
    <div className={`${urbanist.className} lg:p-[30px_10px] p-[30px_5px]`}>
      <span className="flex flex-col gap-3 items-center mb-10">
        <h1 className="text-[22px]  lg:text-[32px] font-bold">
          Product collections
        </h1>
        <small
          className={`text-[#767676] text-[14px] lg:text-[16px] text-center ${workSans.className}`}
        >
          Explore product collections from our vendors
        </small>
      </span>
      <div className="parent grid grid-cols-5 max-[1024px]:grid-cols-2 max-[1024px]:gap-[18px] gap-[22px] round max-[768px]:grid-cols-1">
        <div className="child flex flex-col gap-4">
          <span>
            <img
              src="/10029.jpg"
              alt=""
            />
          </span>
          <span>
            <img
              src="/10089.jpg"
              alt=""
            />
          </span>
        </div>
        <div className="child flex flex-col gap-4">
          <span>
            <img
              src="/10073.jpg"
              alt=""
            />
          </span>
          <span className="block w-full h-full rounded-[12px] p-[22px] max-h-[186px]"
            style={{
              backgroundImage: `url(${"./10097.webp"})`,
            }}>
              <span className="flex flex-col gap-1"><h1 className="text-[32px]">GLADØM</h1><p className={`${workSans.className} text-[14px] text-[#767676]`}>The new common language will be more simple and regular than the existing languages</p></span>
            </span>
        </div>
        <div className="child flex flex-col gap-4">
         
          <span>
           <video src="/wd-furniture-hotspot-video-opt.mp4" autoPlay loop muted/>
          </span>
          <span>
            <img src="/10037.jpg" alt="" />
          </span>
        </div>
        <div className="child flex flex-col gap-4">
          <span className="block w-full h-full rounded-[12px] p-[22px] max-h-[186px]" style={{backgroundImage : `url(${"./10038.jpg"})`}}>
          <span className="flex flex-col gap-1"><h1 className="text-[32px]">HÄLLAN</h1><p className={`${workSans.className} text-[14px] text-[#767676]`}>The new common language will be more simple and regular than the existing languages</p></span>
           
          </span>
          <span>
            <img src="/10088.jpg" alt="" />
          </span>
        </div>
        <div className="child max-[1024px]:hidden flex flex-col gap-4 ">
          <span>
            <img src="/10039.jpg" alt="" />
          </span>
          <span>
            <img src="/10091.jpg" alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default product_collection;
