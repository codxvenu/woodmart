import {React ,useEffect,useState } from 'react'
import { createContext } from'react'
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
export const Product = createContext()
const ProductContext = ({children}) => {
   const [product, setProduct] = useState("");
   const [user, setUser] = useState("");
   const [items, setItems] = useState({});
   const [cart, setCart] = useState([]);
   const[wishlist,setWishlist] = useState([]);
   const[compare,setCompare] = useState([]);
   const[data,setData] = useState([]);
   const [address,setAddress] = useState({});
   const[filtered,setFiltered] = useState([]);
   useEffect(()=>{
    setProduct(localStorage.getItem("category") || "");
    setItems(localStorage.getItem("items") !== "undefined" ? JSON.parse(localStorage.getItem("items")) : [])
    setUser(localStorage.getItem("username"))
    setWishlist(JSON.parse(localStorage.getItem("wishlist")) || []);
    setCompare(JSON.parse(localStorage.getItem("compare")) || []);
   },[])

   useEffect(()=>{
    localStorage.setItem("category", product);
   },[product]);
    useEffect(()=>{
      localStorage.setItem("items", JSON.stringify(items));
    },[items]);
    useEffect(()=>{
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    },[wishlist]);
    useEffect(()=>{
      localStorage.setItem("compare", JSON.stringify(compare));
    },[compare]);
    
    useEffect(()=>{
      const Items = async()=>{
        const response = await fetch("/api/item",{
          method : "GET",
          headers : {"Content-Type" : "application/json"}
        })
        const data = await response.json()
        if(!response.ok){
          console.log(data.error)
        }
        if(data.data){
          setData(data.data)
          setFiltered(data.data)
        }else{
          setData()
          setFiltered()
        }
      }
      Items();
    },[])
    useEffect(()=>{
      const cartData = async ()=>{
        const response = await fetch("/api/cart",{
          credentials: "include",
        })
        const data = await response.json()
        if(!response.ok){
          console.log("error",data.error)
        }
        console.log(data.result,"data",data);
        if(!data.data){
          setCart([])
        }else{
          setCart(data.data)
        }
      }
      cartData() 
    },[])
    useEffect(()=>{
      console.log(items,"tablesssss");
    },[items])
     useEffect(()=>{
            const addr = JSON.parse(localStorage.getItem("form"));
            setAddress(addr);
  //        
        },[])
  return (
    <div>
      <Product.Provider value={{product,setProduct,items,setItems,cart,setCart,wishlist,setWishlist,compare,setCompare,data,user,setUser,address,setAddress,filtered,setFiltered}}>
{children}

      </Product.Provider>
    </div>
  )
}

export default ProductContext
