import { urbanist, workSans } from '@/pages/_app'
import React from 'react'

const data = () => {
  return (
    <div className={`grid grid-cols-2 rounded-2xl gap-6 ${workSans.className} bg-white text-[15px]`}>
      <div className='flex flex-col gap-6'>
        <h1 className={`${urbanist.className} font-bold text-[22px]`}>Product details</h1>
        <p className='text-[#777777]'>Made possible by exploring innovative molded plywood techniques, Iskos-Berlin’s Soft Edge Chair blends strong curves with extreme lightness to create a three-dimensionality not usually possible with 2-D plywood.</p>
        <ul className='desc text-[#777777]'>
            <li><h3>Brand</h3><h3>Kettal</h3></li>
            <li>
                <h3>Collection</h3>
                <h3>Jean-Marie Massaud</h3>
            </li>
            <li>
                <h3>Color</h3>
                <h3>Brown Sugar</h3>
            </li>
            <li>
                <h3>Material
</h3>
                <h3>wood</h3>
            </li>
            <li>
                <h3>General dimensions
</h3>
                <h3>32″ H 21″ W 19″ D</h3>
            </li>
            <li>
                <h3>Product weight
</h3>
                <h3>20.72 lbs</h3>
            </li>
            <li>
                <h3>Box dimensions
</h3>
                <h3>37" H 21" W 24" D</h3>
            </li>
            <li>
                <h3>Assembly</h3>
                <h3>20.72 lbs</h3>
            </li>
            <li>
                <h3>Warranty</h3>
                <h3>24 Month</h3>
            </li>
        </ul>
      </div>
      <div className='flex flex-col gap-6'>
        <h1 className={`${urbanist.className} font-bold text-[22px]`}>Description</h1>
        <img className='rounded-2xl' src="https://woodmart.xtemos.com/furniture2/wp-content/uploads/sites/11/2023/04/description-about-brand-3.jpg.webp" alt="" />
        <p className='text-[#777777]'>The company reinterprets tradition by calling upon international designers to work with them and developing new technologies and materials to guarantee innovative and surprising results. Passion is the engine that drives the brand – together with its renowned creatives and high-profile collaborators – to search for original solutions using advanced materials, methods, tools, and technologies.</p>
        <ul className='bul'>
            <li><img src="https://woodmart.xtemos.com/furniture2/wp-content/uploads/sites/11/2023/04/wd-furniture-dot-list.svg" alt="" />Choose items in a single color scheme and style</li>
            <li><img src="https://woodmart.xtemos.com/furniture2/wp-content/uploads/sites/11/2023/04/wd-furniture-dot-list.svg" alt="" /> Consider the area of the room</li>
            <li><img src="https://woodmart.xtemos.com/furniture2/wp-content/uploads/sites/11/2023/04/wd-furniture-dot-list.svg" alt="" />Do not buy unnecessary pieces of furniture</li>
        </ul>
      </div>
    </div>
  )
}

export default data
