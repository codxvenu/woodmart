import React from 'react'
import Home from './home'
import S_nav from '@/components/nav/s_nav'
import M_nav from '@/components/nav/m_nav'
import Ms_nav from '@/components/nav/small/m_nav'
import Footer from "@/components/footer/footer";
import S_footer from "@/components/footer/s_footer";
import L_nav from '@/components/nav/l_nav'
import Product_category from './product_category'
import Product from './product'
import Side_cart from '@/components/shopping_cart/side_cart'
import Cart from "./cart";
import Checkout from './checkout'
function index() {
  return (
    <>
    
    <S_nav/>
    <M_nav/>
    <L_nav/>
     <Ms_nav/>
    <Home/>
    {/* <Product_category/>
    <Product/>
    <Side_cart/>
    <Cart/>
    <Checkout/> */}
    <Footer/>
    <S_footer/>
    </>
  )
}

export default index
