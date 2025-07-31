import React, { useRef,useEffect, useState, useContext } from "react";
import { urbanist, workSans } from "@/pages/_app";
import { Product } from "@/context/ProductContext";
const filter_bar = () => {
  const {setFiltered,data} = useContext(Product)
 const [minValue, setMinValue] = useState(0);
const [maxValue, setMaxValue] = useState(100);

const minRef = useRef(minValue);
const maxRef = useRef(maxValue);
// Keep refs updated
useEffect(() => {
  minRef.current = minValue;
  setFiltered(data.filter((i) => Number(i.price) > Number(minValue)));
  console.log(minValue,maxValue);
}, [minValue]);

useEffect(() => {
  maxRef.current = maxValue;
  setFiltered(data.filter((i) => Number(i.price) > Number(maxValue)));
}, [maxValue]);

const handleMinRangeChange = (e) => {
  const value = Number(e.target.value);
  const clamped = Math.min(value, maxRef.current - 1);
  setMinValue(clamped);
};

const handleMaxRangeChange = (e) => {
  const value = Number(e.target.value);
  const clamped = Math.max(value, minRef.current + 1);
  setMaxValue(clamped);
};

  return (
    <div className="bg-white p-5 rounded-2xl w-[327px] gap-2 max-h-[1173px]">
      <span>
        <h1 className="font-bold text-[16px]">Filter by price</h1>
     <div className='slider-div'>

                      <input
                        type="range"
                        min="0"
                        max="100"
                        step="1"
                        value={minValue}
                        onChange={handleMinRangeChange}
                        className="thumb thumb--zindex-3"
                      />
                      <input
                        type="range"
                        min="0"
                        max="100"
                        step="1"
                        value={maxValue}
                        onChange={handleMaxRangeChange}
                        className="thumb thumb--zindex-4"
                      />
                      <div className="slider w-full">
                        <div className="slider__track" />
                        <div className="slider__range" style={{ left: `${(minValue / 100) * 100}%`, right: `${100 - (maxValue / 100) * 100}%` }} />
                      </div> 
                      </div> 
        <span
          className={`${workSans.className} flex justify-between items-center`}
        >
          <small className="text-[15px] text-[#767676]">
            Price:{" "}
            <span className="text-black font-medium">
              ${minValue} — ${maxValue}
            </span>
          </small>
          <button className="text-[12px] bg-[#f7f7f7] p-[5px_14px] rounded-3xl">
            Filter
          </button>
        </span>
      </span>
      <hr className="my-8 text-[#7777774d]" />
      <span
        className={`flex flex-col gap-4 text-[#767676] ${workSans.className}`}
      >
        <h1
          className={`font-bold text-[16px] text-black ${urbanist.className}`}
        >
          Filter by Brand
        </h1>
        <span className="flex items-center relative">
          <input
            className="h-[42px] w-full  border-[1px] border-[rgba(0,0,0,0.1)] rounded-3xl px-4"
            type="text"
            placeholder="Find a Brand"
          />
            <i className="ri-search-line absolute right-4 text-[#757575] text-[20px]"></i>
        </span>
        <span>
          <span className="flex justify-between items-center">
            <span className="flex gap-2 items-center">
              <img className="w-[60px] h-[30px]" src="/hay.jpg.webp" alt="" />
              <h1 className="text-[15px]">Hay</h1>
            </span>
            <small className="p-[0px_10px] border-[1px] border-[rgba(0,0,0,0.1)]  rounded-3xl text-[#767676] h-fit">
              6
            </small>
          </span>
        </span>
        <span>
          <span className="flex justify-between items-center">
            <span className="flex gap-2 items-center">
              <img
                className="w-[60px] h-[30px]"
                src="/poliform.jpg.webp"
                alt=""
              />
              <h1 className="text-[15px]">Poliform</h1>
            </span>
            <small className="p-[0px_10px] border-[1px] border-[rgba(0,0,0,0.1)]  rounded-3xl text-[#767676] h-fit">
              6
            </small>
          </span>
        </span>
        <span>
          <span className="flex justify-between items-center">
            <span className="flex gap-2 items-center">
              <img className="w-[60px] h-[30px]" src="/vitra.jpg.webp" alt="" />
              <h1 className="text-[15px]">Vitra</h1>
            </span>
            <small className="p-[0px_10px] border-[1px] border-[rgba(0,0,0,0.1)]  rounded-3xl text-[#767676] h-fit">
              6
            </small>
          </span>
        </span>
      </span>
      <hr className="my-8 text-[#7777774d]" />
      <span className={`flex flex-col gap-4 ${workSans.className}`}>
        <h1 className={`font-bold text-[16px] ${urbanist.className}`}>Color</h1>
        <span className="flex items-center relative">
          <input
            className="h-[42px] w-full  border-[1px] border-[rgba(0,0,0,0.1)] rounded-3xl px-4"
            type="text"
            placeholder="Find a Color"
          />
          <i className="ri-search-line absolute right-4 text-[#757575] text-[20px]"></i>
        </span>
        <span className="flex flex-col gap-3 max-h-[223px] text-[#757575] overflow-y-scroll custom-scroll pr-[5px]">
          <span className="flex justify-between py-[5px]">
            <span className="flex items-center gap-2">
              <span className="border-2 border-[rgba(0,0,0,0.1)] flex items-center justify-center rounded-[100%] w-[25px] h-[25px]">
                {" "}
                <span
                  style={{
                    backgroundColor: "#333",
                    width: "17px",
                    height: "17px",
                    borderRadius: "100%",
                    display: "block",
                  }}
                ></span>
              </span>
              <h1 className="text-[15px]">American Silver</h1>
            </span>
            <small className="p-[0px_10px] border-[1px] border-[rgba(0,0,0,0.1)]  rounded-3xl text-[#767676] h-fit">
              6
            </small>
          </span>
          <span className="flex justify-between py-[5px]">
            <span className="flex items-center gap-2">
              <span className="border-2 border-[rgba(0,0,0,0.1)] flex items-center justify-center rounded-[100%] w-[25px] h-[25px]">
                {" "}
                <span
                  style={{
                    backgroundColor: "#333",
                    width: "17px",
                    height: "17px",
                    borderRadius: "100%",
                    display: "block",
                  }}
                ></span>
              </span>
              <h1 className="text-[15px]">American Silver</h1>
            </span>
            <small className="p-[0px_10px] border-[1px] border-[rgba(0,0,0,0.1)]  rounded-3xl text-[#767676] h-fit">
              6
            </small>
          </span>
          <span className="flex justify-between py-[5px]">
            <span className="flex items-center gap-2">
              <span className="border-2 border-[rgba(0,0,0,0.1)] flex items-center justify-center rounded-[100%] w-[25px] h-[25px]">
                {" "}
                <span
                  style={{
                    backgroundColor: "#333",
                    width: "17px",
                    height: "17px",
                    borderRadius: "100%",
                    display: "block",
                  }}
                ></span>
              </span>
              <h1 className="text-[15px]">American Silver</h1>
            </span>
            <small className="p-[0px_10px] border-[1px] border-[rgba(0,0,0,0.1)]  rounded-3xl text-[#767676] h-fit">
              6
            </small>
          </span>
          <span className="flex justify-between py-[5px]">
            <span className="flex items-center gap-2">
              <span className="border-2 border-[rgba(0,0,0,0.1)] flex items-center justify-center rounded-[100%] w-[25px] h-[25px]">
                {" "}
                <span
                  style={{
                    backgroundColor: "#333",
                    width: "17px",
                    height: "17px",
                    borderRadius: "100%",
                    display: "block",
                  }}
                ></span>
              </span>
              <h1 className="text-[15px]">American Silver</h1>
            </span>
            <small className="p-[0px_10px] border-[1px] border-[rgba(0,0,0,0.1)]  rounded-3xl text-[#767676] h-fit">
              6
            </small>
          </span>
          <span className="flex justify-between py-[5px]">
            <span className="flex items-center gap-2">
              <span className="border-2 border-[rgba(0,0,0,0.1)] flex items-center justify-center rounded-[100%] w-[25px] h-[25px]">
                {" "}
                <span
                  style={{
                    backgroundColor: "#333",
                    width: "17px",
                    height: "17px",
                    borderRadius: "100%",
                    display: "block",
                  }}
                ></span>
              </span>
              <h1 className="text-[15px]">American Silver</h1>
            </span>
            <small className="p-[0px_10px] border-[1px] border-[rgba(0,0,0,0.1)]  rounded-3xl text-[#767676] h-fit">
              6
            </small>
          </span>
          <span className="flex justify-between py-[5px]">
            <span className="flex items-center gap-2">
              <span className="border-2 border-[rgba(0,0,0,0.1)] flex items-center justify-center rounded-[100%] w-[25px] h-[25px]">
                {" "}
                <span
                  style={{
                    backgroundColor: "#333",
                    width: "17px",
                    height: "17px",
                    borderRadius: "100%",
                    display: "block",
                  }}
                ></span>
              </span>
              <h1 className="text-[15px]">American Silver</h1>
            </span>
            <small className="p-[0px_10px] border-[1px] border-[rgba(0,0,0,0.1)]  rounded-3xl text-[#767676] h-fit">
              6
            </small>
          </span>
            <span className="flex justify-between py-[5px]">
              <span className="flex items-center gap-2">
                <span className="border-2 border-[rgba(0,0,0,0.1)] flex items-center justify-center rounded-[100%] w-[25px] h-[25px]">
                  {" "}
                  <span
                    style={{
                      backgroundColor: "#333",
                      width: "17px",
                      height: "17px",
                      borderRadius: "100%",
                      display: "block",
                    }}
                  ></span>
                </span>
                <h1 className="text-[15px]">American Silver</h1>
              </span>
              <small className="p-[0px_10px] border-[1px] border-[rgba(0,0,0,0.1)]  rounded-3xl text-[#767676] h-fit">
                6
              </small>
            </span>
        </span>
      </span>
      <hr className="my-3 text-[#7777774d]" />
      <span className={` flex flex-col gap-4 text-[#767676] ${workSans.className}`}>
        <h1
          className={`font-bold text-[16px] text-black ${urbanist.className}`}
        >
          Materials
        </h1>
        <ul className="flex flex-col gap-3">
          <li className="flex justify-between items-center">
            <span className="flex gap-3">
              <input type="checkbox" name="" id="" /> <h1>Fabric</h1>
            </span>
            <small className="p-[0px_10px] border-[1px] border-[rgba(0,0,0,0.1)]  rounded-3xl text-[#767676] h-fit">
              6
            </small>
          </li>
          <li className="flex justify-between items-center">
            <span className="flex gap-3">
              <input type="checkbox" name="" id="" /> <h1>Leather</h1>
            </span>
            <small className="p-[0px_10px] border-[1px] border-[rgba(0,0,0,0.1)]  rounded-3xl text-[#767676] h-fit">
              6
            </small>
          </li>
          <li className="flex justify-between items-center">
            <span className="flex gap-3">
              <input type="checkbox" name="" id="" /> <h1>Metal</h1>
            </span>
            <small className="p-[0px_10px] border-[1px] border-[rgba(0,0,0,0.1)]  rounded-3xl text-[#767676] h-fit">
              6
            </small>
          </li>
        </ul>
      </span>
      <hr className="my-6 text-[#7777774d]" />
      <span className={` flex flex-col gap-4 text-[#767676] ${workSans.className}`}>
        <h1
          className={`font-bold text-[16px] text-black ${urbanist.className}`}
        >
          Product Status
        </h1>
        <ul className="flex flex-col gap-3">
          <li className="flex justify-between items-center">
            <span className="flex gap-3">
              <input type="checkbox" name="" id="" /> <h1>On sale</h1>
            </span>
            
          </li>
          <li className="flex justify-between items-center">
            <span className="flex gap-3">
              <input type="checkbox" name="" id="" /> <h1>In stock</h1>
            </span>
           
          </li>
          <li className="flex justify-between items-center">
            <span className="flex gap-3">
              <input type="checkbox" name="" id="" /> <h1>On backorder</h1>
            </span>
          
          </li>
        </ul>
      </span>
    </div>
  );
};

export default filter_bar;
