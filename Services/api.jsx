 export const cartAdd = async (item)=>{
        
        const response = await fetch("http://localhost:5000/cart",{
          headers : {"Content-Type" : "application/json"},
          body : JSON.stringify({item : item}),
          method : "POST",
          credentials : "include"
        })
        const data = await response.json()
        return [data,response]
}
 export const orders = async (item)=>{
        
        const response = await fetch("http://localhost:5000/orders",{
          headers : {"Content-Type" : "application/json"},
          body : JSON.stringify({item : item}),
          method : "POST",
          credentials : "include"
        })
        const data = await response.json()
        return [data,response]
}
 export const DeleteCart = async ()=>{
        
        const response = await fetch("http://localhost:5000/DeleteCart",{
          headers : {"Content-Type" : "application/json"},
          method : "POST",
          credentials : "include"
        })
        const data = await response.json()
        return [data,response]
}