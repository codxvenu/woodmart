import React from "react";
import Carousel from "@/components/home/Carousel";
import Categories from "@/components/home/categories";
import Bestseller from "@/components/home/bestseller";
import Shop_brand from "@/components/home/shop_brand";
import Product_c from "@/components/home/product_collection";
import Furniture_col from "@/components/home/furniture_collec";
import Rules from "@/components/home/rules";

const home = ()=>{
    return (
        <div  style={{backgroundImage : "url(/bg.jpg)"}}>
      <Carousel/>
      <Categories/>
      <Bestseller/>
      <Shop_brand/>
      <Product_c/>
      <Furniture_col/>
      <Rules/>
      
        </div>
    )
}

export default home ;