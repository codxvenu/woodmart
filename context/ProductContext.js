import {React ,useEffect,useState } from 'react'
import { createContext } from'react'
import { toast } from 'react-toastify';

export const Product = createContext()
const ProductContext = ({children}) => {
   const [product, setProduct] = useState("");
   const [items, setItems] = useState({});
   const [cart, setCart] = useState([]);
   const[wishlist,setWishlist] = useState([]);
   const[compare,setCompare] = useState([]);
   useEffect(()=>{
    setProduct(localStorage.getItem("category") || "");
    setItems(localStorage.getItem("items") !== "undefined" ? JSON.parse(localStorage.getItem("items")) : [])
    setCart(JSON.parse(localStorage.getItem("cart")));
    setWishlist(JSON.parse(localStorage.getItem("wishlist")) || []);
    setCompare(JSON.parse(localStorage.getItem("compare")));
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
    useEffect(()=>{
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    },[wishlist]);
    useEffect(()=>{
      localStorage.setItem("compare", JSON.stringify(compare));
    },[compare]);
  return (
    <div>
      <Product.Provider value={{product,setProduct,items,setItems,cart,setCart,wishlist,setWishlist,compare,setCompare}}>
{children}

      </Product.Provider>
    </div>
  )
}

export default ProductContext
