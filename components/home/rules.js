import React from 'react'
import { urbanist,workSans } from '@/pages/_app'
const rules = () => {
  return (
    <div className={`lg:p-[55px_72px] p-[30px_5px] text-[#242424] ${urbanist.className}`}>
      <span className='text-[26px]  lg:text-[32px] font-bold'>Rules for choosing furniture</span>
      <div className="d-container grid grid-cols-[1fr_1.2fr] gap-6 mt-[25px]">
        <span>
            <img className='w-full h-full' src="https://dsrsrc.site/wp-content/uploads/2023/04/wd-furniture-choosing-rules-img-opt.png" alt="" />
            </span>
            <span className='flex flex-col gap-6'><h1 className='text-[22px]  lg:text-[18px] font-bold'>Whether living on your own or with a family, your living room is an important space.</h1>
          <p className={`text-[15px] text-[#767676] ${workSans.className}`}>This room is where your family spends time together, and it is the room most of your guests will spend the majority of their time in. Choosing furniture that creates a pleasant, welcoming appearance while holding up against the wear and tear of everyday life is the key in getting this space to work for your needs.</p>
            <ul className={`text-[16px] start text-[#767676] flex flex-col gap-4 ml-2.5 ${workSans.className}`} style={{listStyleType: "square"}}>
  <li>Choose items in a single color scheme and style</li>
  <li>Consider the area of the room</li>
  <li>Do not buy unnecessary pieces of furniture</li>
</ul>
    <span
  className="w-full h-full hidden flex items-center justify-center  max-[1024px]:hidden"
  style={{
    backgroundImage: `url(https://dsrsrc.site/wp-content/uploads/2023/04/wd-furniture-choosing-rules-video-opt.jpg)`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: "180px",
    backgroundSize: "cover" // Optional: ensures image fills the span
  }}
>
    <span className={`${workSans.className} text-center`}>
        <h1 className='text-[18px] text-[#FFFFFFCC]'>How choose furniture</h1>
        <p className='text-[#ffff] text-[18px] lg:text-[36px] font-bold'>SØLREM furniture collection</p>
     
    </span>
</span>

            </span>
      </div>
    </div>
  )
}

export default rules
