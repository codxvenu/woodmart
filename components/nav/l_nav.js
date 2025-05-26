import React from 'react'

const l_nav = () => {
  return (
    <div className='lg:flex hidden px-20 py-2 justify-between items-center'>
        <ul className="flex text-[14px] l gap-6">
                <li className="flex gap-[7px]  font-medium">
                 <img src="./Chair.svg" alt="" />
                
                  <h1>Chairs</h1>
                </li>
                <li className="flex gap-[7px]  font-medium">
                 <img src="table.svg" alt="" />
                  <h1>Tables</h1>
                </li>
                <li className="flex gap-[7px]  font-medium">
                  <img src="/sofas.svg" alt="" />
                  <h1>Sofas</h1>
                </li>
                <li className="flex gap-[7px]  font-medium">
                  <img src="/armchair.svg" alt="" />
                  <h1>Armchairs</h1>
                </li>
                <li className="flex gap-[7px]  font-medium">
                <img src="/bed.svg" alt="" />
                  <h1>Beds</h1>
                </li>
                <li className="flex gap-[7px]  font-medium">
                  <img src="/storage.svg" alt="" />
                  <h1>storage</h1>
                </li>
                <li className="flex gap-[7px]  font-medium">
                <img src="/textile.svg" alt="" />
                  <h1>textiles</h1>
                </li>
                <li className="flex gap-[7px]  font-medium">
                 <img src="/lighting.svg" alt="" />
                  <h1>lighting</h1>
                </li>
                <li className="flex gap-[7px]  font-medium">
               <img src="/toy.svg" alt="" />
                  <h1>Toys</h1>
                </li>
                <li className="flex gap-[7px]  font-medium">
              <img src="/decor.svg" alt="" />
                  <h1>Decor</h1>
                </li>
              </ul>
              <span className='p-[5px_10px] bg-[#e0eaf0] rounded-4xl  text-[#333333] max-[1200px]:hidden'><small className='text-[11px] font-[600]'>Free shipping for all orders of $1.300</small></span>
    </div>
  )
}

export default l_nav
