import React from "react";
import { urbanist, workSans } from "@/pages/_app";
function shop_brand() {
   const brands = [
  {
    name: "Elitis",
    place: "Talosa / France",
    icon: "./10024.png",
    img: "./10053.jpg"
  },
  {
    name: "Hay",
    place: "Barcelona / Spain",
    icon: "./10025.png",
    img: "./10054.jpg"
  },
  {
    name: "Kettal",
    place: "Barcelona / Spain",
    icon: "./10026.png",
    img: "./10055.jpg"
  },
  {
    name: "Llardo",
    place: "Valencia / Spain",
    icon: "./10027.png",
    img: "./10056.jpg"
  },
  {
    name: "Poliform",
    place: "Como / Italy",
    icon: "./10028.png",
    img: "./10057.jpg"
  }
];
 

  return (
    <div className={`${urbanist.className} lg:p-[30px_72px] p-[30px_5px]`}>
      <span className="flex flex-col gap-4">

  <h1 className='text-[22px]  lg:text-[32px] font-bold'>Shopping by brands</h1>
    <small className={`text-[#767676] text-[14px] lg:text-[16px] ${workSans.className}`}>Discover lots products from popular brands</small>
   
    </span>
      <div className="cards grid lg:grid-cols-5 gap-4 md:grid-cols-3 grid-cols-1 mt-8">
        {brands.map((brand,index)=>(
            
        <div className="card p-[20px_20px_310px]  h-[394px] rounded-xl" key={index} style={{backgroundImage : `url(${brand.img})` ,backgroundRepeat : "no-repeat",backgroundPosition : "center center",backgroundSize : "cover"}}>
          <span className="flex gap-4">
            <img width={64} height={64} src={brand.icon} alt="" />
            <span className="flex flex-col items-start text-white">
              <h1 className="text-[22px] font-bold">{brand.name}</h1>
              <small className={`text-[15px] text-[#ffffffcc] ${workSans.className}`}>{brand.place}</small>
            </span>
          </span>
        </div>
        ))}
      </div>
    </div>
  );
}
export default shop_brand;
