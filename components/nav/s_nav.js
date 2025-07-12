import React, { useEffect, useState } from "react";
import countries from "@/country";

function s_nav() {
   const [currentcountry, setCurrentcountry] =  useState({});
   const [visible ,setVisible] = useState(false);
   useEffect(()=>{
    localStorage.getItem("country") === null ? localStorage.setItem("country",JSON.stringify(countries[0])) : {};
    setCurrentcountry(JSON.parse(localStorage.getItem("country")))
   },[])
   
  return (
    <nav className="lg:flex hidden h-[40px] bg-[#1010100D] text-[#333] justify-between px-20 text-[13px] items-center">
      <ul className="flex gap-8 h-full items-center" >
        <li className="h-full grid grid-cols-[.4fr_1fr] items-center w-20 gap-1.5 selected " onMouseOver={()=>{setVisible(true)}} onMouseLeave={()=>{setVisible(false)}} >
       
        <img className="w-5 " src={currentcountry.img} alt="" /> {currentcountry.name}
        
          {visible && 
          
          <ul className=" absolute w-50 p-[1.4rem] flex flex-col justify-center items-center bg-[#fff] text-[14px] text-[#838383] top-[38px]  rounded-xl gap-[10px] transition-all" onMouseEnter={()=>{setVisible(true)}} onMouseLeave={()=>{setVisible(false)}}>
            {countries.filter(country=> country.name != currentcountry.name).map((country) => (
              <li key={country.name} className="grid grid-cols-[.2fr_1fr] items-center w-full " onClick={()=>{
                setCurrentcountry(country)
                localStorage.setItem("country",JSON.stringify(country))}}>
                <img className="w-5" src={country.img} alt="" />
                <h1>{country.name}</h1>
              </li>
            ))}
          </ul>
          }
        </li>
        <li>
          eur{" "}
          <ul className=" hidden absolute w-50 p-2 flex flex-col justify-center items-center bg-[#fff] text-[14px] text-[#838383] top-[30px]  rounded-xl left-[125px]">
            {countries.map((country) => (
              <li key={country.name} className="grid grid-cols-[.2fr_1fr] items-center w-full ">
                <img className="w-5" src={country.img} alt="" />
                <h1>{country.name}</h1>
              </li>
            ))}
          </ul>
        </li>
        <li>gift cards</li>
        <li>showrooms</li>
        <li>About Us</li>
      </ul>
      <ul className="flex gap-4 items-center">
        <li>
          <small className="text-[13px]">(686) 492-1044</small>
        </li>
        <li className=" bg-[#80808030] h-[23px] w-[3px]"></li>
        <li className="flex gap-1">
          <img width="65" height="22" src="/10006.png"/>
        </li>
        <li>Contact with an expert</li>
      </ul>
    </nav>
  );
}
export default s_nav;
