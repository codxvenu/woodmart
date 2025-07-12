import React from 'react'

const footer = () => {
  return (
    <div className='flex flex-col bg-[#000] text-white p-[50px_5px_25px_5px] lg:p-[50px_15px]'>
      <span className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[3fr_1.5fr] lg:mx-[60px] max-[768px]:gap-[80px] max-[768px]:justify-items-start max-[1024px]:justify-items-end max-[1024px]:p-[15px]'>
        <span className='flex flex-col gap-10 w-full items-start'>
       <img className='w-[260px]' src="/10046.svg" alt="" />
       <span className='min-[768px]:flex max-[768px]:gap-10 grid grid-cols-2 min-[1024px]:gap-20 max-[1024px]:gap-8  col text-[#FFFFFF99]'>

            <ul className='max-[768px]:col-span-2'>
             <li className='text-white lg:text-[22px] text-[20px] mb-4 '>Useful links</li>
            <li>About Us</li>
            <li>Contact us</li>
            <li>showrooms</li>
            <li>blog</li>
            <li>gift cards</li>
          </ul>
          <ul>
             <li className='text-white lg:text-[22px] text-[20px] mb-4'>Categories</li>
            <li>chair</li>
            <li>tables</li>
            <li>sofas</li>
            <li>armchairs</li>
            <li>beds</li>
          </ul>
          <ul>
            <li className='opacity-0 lg:text-[22px] text-[20px] mb-4'>dsdd</li>
            <li>storage</li>
            <li>textiles</li>
            <li>lighting</li>
            <li>toys</li>
            <li>decor</li>
          </ul>
       </span>
          
          </span>
        <span className='grid justify-end'>
        <span className='sub flex  items-center gap-2 max-[768px]:mb-2 mb-[36px] lg:mb-16'>
          <h1 className='min-[1200px]:text-[24px] text-[18px]'>Subscibe us : </h1>
          <a href="" className=''>
          <i className="ri-facebook-fill"></i>
          </a>
          <a href="">

            <i className="ri-twitter-x-line"></i>
          </a>
          <a href="">

            <i className="ri-pinterest-fill"></i>
          </a>
          <a href="">

            <i className="ri-linkedin-fill"></i>
          </a>
        </span>
        <span className='flex gap-4 flex-col'>
          <h1 className='text-[20px]'>Download App on Mobile:</h1>
          <small className='text-[14px]'>15% discount on your first purchase</small>
          <span className='flex gap-4 '>
            <img src="/image.png" alt="" />
            <img src="/image2.png" alt="" />
          </span>
        </span>
        </span>
      </span>
    </div>
  )
}

export default footer
