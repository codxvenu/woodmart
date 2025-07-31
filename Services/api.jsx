 export const cartAdd = async (item)=>{
        
        const response = await fetch("/api/cart",{
          headers : {"Content-Type" : "application/json"},
          body : JSON.stringify({item : item}),
          method : "POST",
          credentials : "include"
        })
        const data = await response.json()
        return [data,response]
}
 export const orders = async (item)=>{
        
        const response = await fetch("/api/orders",{
          headers : {"Content-Type" : "application/json"},
          body : JSON.stringify({item : item}),
          method : "POST",
          credentials : "include"
        })
        const data = await response.json()
        return [data,response]
}
 export const DeleteCart = async ()=>{
        
        const response = await fetch("/api/DeleteCart",{
          headers : {"Content-Type" : "application/json"},
          method : "POST",
          credentials : "include"
        })
        const data = await response.json()
        return [data,response]
}