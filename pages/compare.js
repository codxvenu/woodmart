import React, { useContext, useEffect, useState } from "react";
import { urbanist, workSans } from "./_app";
import { Product } from "@/context/ProductContext";
import { useRouter } from "next/router";
import Link from "next/link";
const compare = () => {
  const { setProduct, compare, setCompare } = useContext(Product);
  const [data, setData] = useState([]);
  const router = useRouter();
  function handleItem(item, value) {
    if (value) {
      if (!data.find((itm) => itm.id === item.id)) {
        setData([...data, { ...item }]);
        console.log(data, 1);
      }
    } else {
      setData(data.filter((idx) => idx.id == !item.id));
      console.log(data, 2);
    }
  }
  function handleLen() {
    if (data.length !== compare.length) {
      setData(compare);
    } else {
      setData([]);
    }
  }
  useEffect(() => {
    console.log(compare);
  }, [compare]);

  return (
    <div
      className={`${workSans.className} `}
      style={{ backgroundImage: "url(/bg.jpg)" }}
    >
      <div className={`${urbanist.className}`}>
        <span
          style={{
            background: "url(./shop_bg.jpg)",
            backgroundPosition: "center top",
          }}
          className="block w-full !bg-cover min-[1200px]:h-[294px] text-[78px] text-white"
        >
          <span className="min-[1200px]:mx-[60.5px] min-[1200px]:px-[15px] min-[1200px]:py-[100px] p-[15px] flex items-center gap-2 h-full">
            <h1 className="font-bold min-[1200px]:text-[78px] text-[36px] capitalize">
              compare
            </h1>
          </span>
        </span>
      </div>
      {compare.length===0 && 
                <div>
                        <span className='flex flex-col justify-center items-center mt-[5vw]'>
                        <i className="ri-shuffle-line text-[rgba(0,0,0,0.07)] text-[180px]"></i>
                        <h1 className={`text-[48px] text-[#242424] font-bold leading-[1.2] mb-[15px] ${urbanist.className}`}>This compare is empty</h1>
                       
                        
                        <p className='text-[16.5px] max-w-[535px] text-center text-[#777777]'>You don't have any products in the compare yet. You will find a lot of interesting products on our "Shop" page.</p>
                       <Link href="/product">
                       <button className='text-white bg-[#f59a57] rounded-3xl px-[28px] py-[10px] max-h-[42px] cursor-pointer  my-[25px_5vw]' onClick={()=>{ setProduct("shop") } }>Return to Shop</button>
                       </Link>
                       
                        </span>
                    </div>
                }   
      {compare.length !==0 && 
      <div className="lg:p-[40px_15px] p-[20_15px] lg:mx-[60px] mx-[20px]">
        <table className="compare">
          <tbody>
            <tr>
              <th></th>
              <td className="flex tds !max-w-[calc(80vw-150px)]">
                {compare.map((item) => (
                  <td>
                    <div className="flex gap-2 flex-col">
                      <span className="flex justify-between text-[14px] font-medium">
                        <h2
                          className="flex items-center cursor-pointer"
                          onClick={() => {
                            setCompare(
                              compare.filter((idx) => idx.name !== item.name)
                            );
                          }}
                        >
                          <i className="ri-close-line text-xl font-normal"></i>
                          Remove
                        </h2>
                      </span>
                      <div
                        className="relative item z-20 p-2 rounded-2xl max-h-[569px] w-fit md:overflow-hidden "
                        key={item.id}
                      >
                        <img width={334} height={382} src={item.img} alt="" />
                        <div className="data pt-2 flex flex-col gap-1 transition-transform duration-300 ease-in-out lg:group-hover:-translate-y-1.5">
                          <span className="flex flex-col justify-between items-start font-medium">
                            <h1
                              className={` ${urbanist.className} max-[548px]:text-[13.5px] max-[768.5px]:text-[15px] lg:text-[15px]  font-bold`}
                            >
                              {item.name}
                            </h1>
                          </span>

                          <span className="flex justify-between items-center text-[rgb(245,154,87)] font-medium max-[548px]:text-[13.5px] max-[768.5px]:text-[15px] lg:text-[15px] mb-2.5">
                            <h1>${item.price}</h1>
                            <span className="colors flex mt-[-10px]">
                              {item.colors.map((color, index) => (
                                <span
                                  key={index}
                                  className="flex flex-col justify-center items-center gap-0.5 group/color w-[22px]"
                                >
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
                          <span className="z-10 cart lg:flex gap-4 items-center opacity-100 text-[15px]">
                            <button className="px-4 bg-[rgb(245,154,87)] overflow-hidden h-[36px] rounded-3xl text-white font-semibold  py-[8px]  group/cart cursor-pointer">
                              {" "}
                              <h1 className="text-[14px] group-hover/cart:-translate-y-6 transition-all duration-200 ease-in-out">
                                Add to cart
                              </h1>
                              <i className="ri-shopping-cart-2-line text-[24px] font-light block translate-y-1 group-hover/cart:-translate-y-7 transition-all duration-200 ease-in-out"></i>
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                ))}
              </td>
            </tr>
            <tr>
              <th>Description</th>
              <td className="flex tds !max-w-[calc(80vw-150px)]">
                {compare.map(() => (
                  <td className={`text-[#777777] text-[15px]`}>
                   <span className={`${urbanist.className} text-[#333333] max-[768px]:block hidden font-bold`}>
                      Description
                    </span>
                    The slender organic forms are fluid and graceful.‎ Noguchi
                    emphasises the lightness of the elements with thin yet
                    comfortable upholstery and a choice of cover fabrics in
                    natural colours.‎
                  </td>
                ))}
              </td>
            </tr>
            <tr>
              <th>Sku</th>
              <td className="flex tds !max-w-[calc(80vw-150px)]">
                {compare.map(() => (
                  <td className="text-[15px] text-[#777777]">
                    <span className={`${urbanist.className} text-[#333333] max-[768px]:block hidden font-bold`}>
                    Sku</span>SO-450</td>
                ))}
              </td>
            </tr>

            <tr>
              <th>Availability</th>
              <td className="flex tds !max-w-[calc(80vw-150px)]">
                {compare.map(() => (
                  <td className="text-[15px] text-[#333333]">
                   <span className={`${urbanist.className} text-[#333333] max-[768px]:block hidden font-bold`}>
                    Availability</span><i className="ri-check-line text-[#f59a57] flex gap-2"><h1 className={`${workSans.className} text-[#333333] font-semibold`}>In stock</h1></i></td>
                ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      }
    </div>
  );
};

export default compare;
