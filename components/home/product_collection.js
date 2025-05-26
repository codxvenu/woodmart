import React from "react";
import { urbanist, workSans } from "@/pages/_app";

const product_collection = () => {
  return (
    <div className={`${urbanist.className} lg:p-[30px_72px] p-[30px_5px]`}>
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
              src="https://dsrsrc.site/wp-content/uploads/2023/04/wd-furniture-hotspot-1-opt.jpg"
              alt=""
            />
          </span>
          <span>
            <img
              src="https://dsrsrc.site/wp-content/uploads/2023/04/wd-furniture-hotspot-6-opt.jpg"
              alt=""
            />
          </span>
        </div>
        <div className="child flex flex-col gap-4">
          <span>
            <img
              src="https://dsrsrc.site/wp-content/uploads/2023/04/wd-furniture-hotspot-2-opt.jpg"
              alt=""
            />
          </span>
          <span className="block w-full h-full rounded-[12px] p-[22px] max-h-[186px]"
            style={{
              backgroundImage: `url(${"https://dsrsrc.site/wp-content/uploads/2023/04/wd-futniture-banner-bg-2-1.jpg"})`,
            }}>
              <span className="flex flex-col gap-1"><h1 className="text-[32px]">GLADØM</h1><p className={`${workSans.className} text-[14px] text-[#767676]`}>The new common language will be more simple and regular than the existing languages</p></span>
            </span>
        </div>
        <div className="child flex flex-col gap-4">
         
          <span>
           <video src="https://dsrsrc.site/wp-content/uploads/2023/05/wd-furniture-hotspot-video.mp4" autoPlay loop/>
          </span>
          <span>
            <img src="https://dsrsrc.site/wp-content/uploads/2023/04/wd-furniture-hotspot-7-opt.jpg" alt="" />
          </span>
        </div>
        <div className="child flex flex-col gap-4">
          <span className="block w-full h-full rounded-[12px] p-[22px] max-h-[186px]" style={{backgroundImage : "url(https://dsrsrc.site/wp-content/uploads/2023/04/wd-futniture-banner-bg-1-1.jpg)"}}>
          <span className="flex flex-col gap-1"><h1 className="text-[32px]">HÄLLAN</h1><p className={`${workSans.className} text-[14px] text-[#767676]`}>The new common language will be more simple and regular than the existing languages</p></span>
           
          </span>
          <span>
            <img src="https://dsrsrc.site/wp-content/uploads/2023/04/wd-furniture-hotspot-4-opt.jpg" alt="" />
          </span>
        </div>
        <div className="child max-[1024px]:hidden flex flex-col gap-4 ">
          <span>
            <img src="https://dsrsrc.site/wp-content/uploads/2023/04/wd-furniture-hotspot-5-opt.jpg" alt="" />
          </span>
          <span>
            <img src="https://dsrsrc.site/wp-content/uploads/2023/04/wd-furniture-hotspot-8-opt.jpg" alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default product_collection;
