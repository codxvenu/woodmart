import React from 'react'

const footer = () => {
  return (
    <div className='flex flex-col bg-[#0f0f0f] text-white p-[50px_5px] lg:p-[50px_15px]'>
      <span className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[3fr_1fr] mx-[30px] lg:mx-[60px] max-[768px]:gap-[80px] max-[768px]:justify-items-start max-[1024px]:justify-items-end'>
        <span className='flex flex-col gap-10'>
       <img className='w-[260px]' src="https://dsrsrc.site/wp-content/uploads/2023/04/wd-furniture-logo-white.svg" alt="" />
       <span className='flex max-[1024px]:gap-[5vw] gap-20 col text-[#FFFFFF99]'>

            <ul>
             <li className='text-white text-[22px] mb-4'>Useful links</li>
            <li>About Us</li>
            <li>Contact us</li>
            <li>showrooms</li>
            <li>blog</li>
            <li>gift cards</li>
          </ul>
          <ul>
             <li className='text-white text-[22px] mb-4'>Categories</li>
            <li>chair</li>
            <li>tables</li>
            <li>sofas</li>
            <li>armchairs</li>
            <li>beds</li>
          </ul>
          <ul>
            <li className='opacity-0 text-[22px] mb-4'>dsdd</li>
            <li>storage</li>
            <li>textiles</li>
            <li>lighting</li>
            <li>toys</li>
            <li>decor</li>
          </ul>
       </span>
          
          </span>
        <span className='w-fit'>
        <span className='sub flex  items-center gap-2 max-[768px]:mb-2 lg:mb-16'>
          <h1 className='text-[24px]'>Subscibe us : </h1>
          <a href="" className=''>
          <i class="ri-facebook-fill"></i>
          </a>
          <a href="">

            <i class="ri-twitter-x-line"></i>
          </a>
          <a href="">

            <i class="ri-pinterest-fill"></i>
          </a>
          <a href="">

            <i class="ri-linkedin-fill"></i>
          </a>
        </span>
        <span className='flex gap-4 flex-col'>
          <h1>Download App on Mobile:</h1>
          <small>15% discount on your first purchase</small>
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
