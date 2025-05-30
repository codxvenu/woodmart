import {React ,useEffect,useState } from 'react'
import { createContext } from'react'

export const Product = createContext()
const ProductContext = ({children}) => {
   const [product, setProduct] = useState("");
   const [items, setItems] = useState({});
   const [cart, setCart] = useState([]);

   useEffect(()=>{
    setProduct(localStorage.getItem("category"));
    setItems(JSON.parse(localStorage.getItem("items")));
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
   },[])

   useEffect(()=>{
    localStorage.setItem("category", product);
   },[product]);
    useEffect(()=>{
      localStorage.setItem("items", JSON.stringify(items));
    },[items]);
    useEffect(()=>{
      localStorage.setItem("cart", JSON.stringify(cart));
    },[cart]);
  return (
    <div>
      <Product.Provider value={{product,setProduct,items,setItems,cart,setCart}}>
{children}
      </Product.Provider>
    </div>
  )
}

export default ProductContext
