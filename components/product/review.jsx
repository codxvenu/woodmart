import React from 'react'
import { urbanist, workSans } from '@/pages/_app'
const review = () => {
  return (
    <div className={`${workSans.className} min-[1200px]:p-[50px_72px] p-[20px_15px]  text-[15px]`}>
      <span className='block p-[20px] rounded-2xl bg-white'>

          <h1 className={`${urbanist.className} lg:text-[22px] text-[20px] font-bold`}>Customer Reviews</h1>
      <div className='grid lg:grid-cols-2  gap-6'>
      
<div className='flex flex-col items-center'>
    <h2 className='text-[60px] font-bold'>5</h2>
    <span className="flex justify-center items-center">
          {[1, 2, 3, 4, 5].map((rate) =>
            rate <= 5 ? (
              <i className="ri-star-fill text-[#EABE12] text-[20px]"></i>
            ) : (
              <i className="ri-star-line text-[#bbb] text-[20px]"></i>
            )
          )}
          
        </span>
        <h2 className="ml-2 text-[#777777]"> 2 reviews</h2>
        <ul className='w-full flex flex-col gap-2'>
            <li className='flex justify-center items-center gap-2'>
                <span>
                    {[1, 2, 3, 4, 5].map((rate) =>
            rate <= 5 ? (
              <i className="ri-star-fill text-[#EABE12] text-[15px]"></i>
            ) : (
              <i className="ri-star-line text-[#bbb] text-[15px]"></i>
            )
          )}
                    </span>
       <span className='w-full block h-3 rounded-3xl  bg-[rgb(245,154,87)]'></span>
       2</li>
            <li className='flex justify-center items-center gap-2'>
                <span>
                    {[1, 2, 3, 4, 5].map((rate) =>
            rate <= 4 ? (
              <i className="ri-star-fill text-[#EABE12] text-[15px]"></i>
            ) : (
              <i className="ri-star-line text-[#bbb] text-[15px]"></i>
            )
          )}
                    </span>
       <span className='w-full block h-3 rounded-3xl  bg-[rgba(0,0,0,0.06)]'></span>
       0</li>
            <li className='flex justify-center items-center gap-2'>
                <span>
                    {[1, 2, 3, 4, 5].map((rate) =>
            rate <= 3 ? (
              <i className="ri-star-fill text-[#EABE12] text-[15px]"></i>
            ) : (
              <i className="ri-star-line text-[#bbb] text-[15px]"></i>
            )
          )}
                    </span>
       <span className='w-full block h-3 rounded-3xl  bg-[rgba(0,0,0,0.06)]'></span>
       0</li>
            <li className='flex justify-center items-center gap-2'>
                <span>
                    {[1, 2, 3, 4, 5].map((rate) =>
            rate <= 2 ? (
              <i className="ri-star-fill text-[#EABE12] text-[15px]"></i>
            ) : (
              <i className="ri-star-line text-[#bbb] text-[15px]"></i>
            )
          )}
                    </span>
       <span className='w-full block h-3 rounded-3xl  bg-[rgba(0,0,0,0.06)]'></span>
       0</li>
            <li className='flex justify-center items-center gap-2'>
                <span>
                    {[1, 2, 3, 4, 5].map((rate) =>
            rate <= 1 ? (
              <i className="ri-star-fill text-[#EABE12] text-[15px]"></i>
            ) : (
              <i className="ri-star-line text-[#bbb] text-[15px]"></i>
            )
          )}
                    </span>
       <span className='w-full block h-3 rounded-3xl  bg-[rgba(0,0,0,0.06)]'></span>
       0</li>
        </ul>
</div>
<div className='lg:p-3 flex flex-col gap-4 text-[#242424] r'>
  <h2 className={`${urbanist.className} font-bold text-black`}>Add a review</h2>
  <p className='text-[#777777]'>Your email address will not be published. Required fields are marked <span>*</span></p>
  <h2>Your rating <span>*</span>:{[1,2,3,4,5].map(()=>( <i className=" ri-star-line hover:ri-star-fill hover:text-[#EABE12] text-[#bbb] text-[15px]"></i>))}</h2>
  <form className='flex flex-col justify-start review'>
    <label htmlFor="review">Your review <span>*</span></label>
    <textarea name="review" id=""></textarea>
    <label htmlFor="name">Name </label>
    <input type="text" name="name" />
    <label htmlFor="email">Email <span>*</span></label>
    <input type="email" name="email"/>
    
    <label htmlFor="save"><input type="checkbox" name="save"/>Save my name, email, and website in this browser for the next time I comment.</label>
    <button className="bg-[rgb(245,154,87)] p-[5px_20px] text-[13px] rounded-[20px] text-white min-h-[42px] w-fit font-medium">
           Submit
          </button>
  </form>
</div>
<div className="lg:col-span-2">
  <span className='lg:flex grid gap-5 justify-between items-center mb-4'><h1 className={`${urbanist.className} font-bold`}>2 reviews for Giro LR</h1> <span className="block w-fit rounded-4xl pr-3 text-[#777777] border-2 border-[rgba(0,0,0,0.1)] bg-white">
               <select
                name="sort"
                id=""
                className=" p-[8px] rounded-4xl text-[14px] focus:outline-none focus:ring-0 border-0 h-[42px] max-w-[200px] w-auto"
              >
                <option value="">Default</option>
                <option value="">Newest</option>
                <option value="">Oldest</option>
                <option value="">Most helpful</option>
                <option value="">Highly Rated</option>
                <option value="">Lowest Rated</option>
              </select>
            </span>
            </span>
            <div className='grid lg:grid-cols-2 gap-5 text-[#777777]'>
              <div className='rounded-[10px] border-[1px] border-[rgba(0,0,0,0.105)]'>
                <span className='p-4 flex flex-col gap-4'>
                <span className='flex justify-between'><h1 className='font-bold text-[#242424]'>Ema Norton</h1><h3>April 12, 2023</h3></span>
             <span>
              
                {[1, 2, 3, 4, 5].map((rate) =>
            rate <= 5 ? (
              <i className="ri-star-fill text-[#EABE12] text-[15px]"></i>
            ) : (
              <i className="ri-star-line text-[#bbb] text-[15px]"></i>
            )
          )}
              </span> 
          <p>Usually, we prefer the real thing, wine without sulfur based preservatives, real butter, not margarine, and so we’d like our layouts and designs to be filled with real words, with thoughts that count, information that has value.</p>
          <span className='flex gap-4'><i class="ri-thumb-up-line"></i>0
          <i class="ri-thumb-down-line"></i>0</span>
          </span>
          <div className='flex flex-col gap-4 border-t-[1px] border-t-[rgba(0,0,0,0.105)] p-4 bg-[rgba(0,0,0,0.04)]'>

          <span className='flex justify-between '>
            <span className='flex items-center text-[#242424] font-bold'><i class="ri-store-line text-[rgb(245,154,87)] font-normal text-[22px] mr-2"></i>Mr. Mackay</span>
            <h2>April 12, 2023</h2>
            </span>
            <p>Rigid proponents of content strategy may shun the use of dummy copy but then designers might want to ask them to provide style sheets with the copy decks they supply that are in tune with the design direction they require.</p>
          </div>
              </div>
              <div className='rounded-[10px] border-[1px] border-[rgba(0,0,0,0.105)]'>
                <span className='p-4 flex flex-col gap-4'>
                <span className='flex justify-between'><h1 className='font-bold text-[#242424]'>Ema Norton</h1><h3>April 12, 2023</h3></span>
             <span>
              
                {[1, 2, 3, 4, 5].map((rate) =>
            rate <= 5 ? (
              <i className="ri-star-fill text-[#EABE12] text-[15px]"></i>
            ) : (
              <i className="ri-star-line text-[#bbb] text-[15px]"></i>
            )
          )}
              </span> 
          <p>Usually, we prefer the real thing, wine without sulfur based preservatives, real butter, not margarine, and so we’d like our layouts and designs to be filled with real words, with thoughts that count, information that has value.</p>
          <span className='flex gap-4'><i class="ri-thumb-up-line"></i>0
          <i class="ri-thumb-down-line"></i>0</span>
          </span>
          <div className='flex flex-col gap-4 border-t-[1px] border-t-[rgba(0,0,0,0.105)] p-4 bg-[rgba(0,0,0,0.04)]'>

          <span className='flex justify-between '>
            <span className='flex items-center text-[#242424] font-bold'><i class="ri-store-line text-[rgb(245,154,87)] font-normal text-[22px] mr-2"></i>Mr. Mackay</span>
            <h2>April 12, 2023</h2>
            </span>
            <p>Rigid proponents of content strategy may shun the use of dummy copy but then designers might want to ask them to provide style sheets with the copy decks they supply that are in tune with the design direction they require.</p>
          </div>
              </div>

            </div>
</div>
      </div>
      </span>
      
    </div>
  )
}

export default review
