import {React,useEffect,useState} from 'react'
import { urbanist } from '@/pages/_app'
import Link from 'next/link';
const Side_bar = ({tab}) => {
    const[active,setActive] = useState(tab);
    function handleActive(name){
        localStorage.setItem("activeAccTab" , name);
        setActive(name)
    }
  return (
    <div>
      <div className='flex flex-col justify-center !text-[#242424] border-r-[1px] border-[rgba(0,0,0,0.105)]'>
                              <h1 className={`${urbanist.className} uppercase text-[18px] font-bold py-[10px] px-[15px] border-b-[1px] border-[rgba(0,0,0,0.105)] leading-[1.4] w-[90%]`}>My account</h1>
                              <ul className='myacc'>
                                 {["Dashboard","Orders","Downloads","Addresses","Account details","Wishlist","Logout"].map((name,index)=>(
                                  <Link href={`/myaccount/${name}`}>
                                  <li className={`${active === index && "active"}`} onClick={()=>handleActive(index)}>{name}</li>
                                  </Link>
                                  ))}
                              </ul>
                          </div>
    </div>
  )
}

export default Side_bar
