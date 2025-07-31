import { urbanist } from '@/pages/_app'
import React, { use, useState,useContext } from 'react'
import { useRouter } from 'next/router';
import { Product } from '@/context/ProductContext';
const form = () => {
    const[pass,setPass]=useState(false);
    const {setUser} = useContext(Product)
    const[form,setForm] =useState("register");
    const[username,setUsername]=useState("")
    const[password,setPassword]=useState("")
    const[email,setEmail]=useState("");
    const router = useRouter();

  const Register = async (username,password,email) => {
    console.log(username,password,email)
    const response = await fetch("/register",{
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      credentials : "include",
      body : JSON.stringify({username,password,email})
    })
    const data =  await response.json();
    if(!response.ok){
      console.log(data.error);
    }else{
      alert(data.message)
      //localStorage.setItem("username",username);
    }
      //setForm("login")
      //router.push("/myaccount/Dashboard") 
  }

 async function Login(){
  console.log(username,password);
  
  const res = await fetch("/login",{
    method : "POST",
    headers : {"Content-Type" : "application/json"},
    credentials : "include",
    body :  JSON.stringify({username,password}),
  })
  const data = await res.json();
  if(!res.ok){ 
    console.log(data.error);
  }else{
    console.log(data);
    alert(data.message)
    localStorage.setItem("username",username)
    console.log(username);
    setUser(username)
    
    router.push("/myaccount/Dashboard") 
  }
  }
  

  return (
    <div className='grid md:grid-cols-2 py-10 max-w-[1080px] mx-auto '>
      <div>
       {form==="register" && 
        <form className='flex flex-col gap-4 px-[40px] fadeUp' method='post'>
            <h1 className={`${urbanist.className} text-[22px] font-bold uppercase`}>Register</h1>
            {[
  { "name": "Username", "fn": setUsername },
  { "name": "Email", "fn": setEmail },
  { "name": "Password", "fn": setPassword }
]
.map((imp)=>(

            <label htmlFor={imp.name} className='grid gap-2 capitalize relative'> <span>{imp.name} <span className='text-[#f59a57]'>*</span></span>  <input type="text" name={imp.name} onChange={(e)=> imp.fn(e.target.value)} className='border-[1px] border-[rgba(0,0,0,0.2)] rounded-3xl py-2 bg-white' /><i className={`ri-eye${pass? "-off" : ""}-line absolute top-[55%] right-5 ${imp === "password" && "!block"} hidden`} onClick={()=>setPass(imp === "password" && !pass) }></i></label>
            ))}
        
            <button type='button' className='text-white bg-[#f59a57] rounded-4xl w-full py-2' onClick={()=>{Register(username,password,email)}}>Register</button>
        </form>
       }
       {form==="login" && 
       <form className='flex flex-col gap-4 px-[40px] fadeUp' method="post" >
            <h1 className={`${urbanist.className} text-[22px] font-bold uppercase`}>Login</h1>
           {[ { "name": "Username", "fn": setUsername },
              { "name": "Password", "fn": setPassword }].map((imp)=>(

            <label htmlFor={imp.name} className='grid gap-2 capitalize relative'><span>{imp.name} <span className='text-[#f59a57]'>*</span></span> <input type="text" name={imp.name} onChange={(e)=>imp.fn(e.target.value)} className='border-[1px] border-[rgba(0,0,0,0.2)] rounded-3xl py-2 bg-white' /><i className={`ri-eye${pass? "-off" : ""}-line absolute top-[55%] right-5 ${imp === "password" && "!block"} hidden`} onClick={()=>setPass(imp === "password" && !pass) }></i></label>
            ))}
        
            <button className='text-white bg-[#f59a57] rounded-4xl w-full py-2' type='button' onClick={()=>Login()}>Log in</button>
            <span className='flex justify-between max-[768px]:flex-col max-[768px]:gap-4'>
                <label htmlFor="" className='flex gap-2'>
                <input type="checkbox" name="remmber" />
Remember Me
                </label>
                <small className='text-[#f59a57] font-normal text-[16px]'>Lost your password?</small>
            </span>
        </form>
       } 

      </div>
      <span className={`${urbanist.className} max-[768px]:grid hidden grid-cols-[1fr_.2fr_1fr] w-full items-center justify-center text-center font-semibold text-[15px] uppercase py-5`}><hr className='border-[rgba(0,0,0,0.105)]' /> or <hr className='border-[rgba(0,0,0,0.105)]' /></span>
      <div className='text-center px-[40px] border-l-[1px] border-[rgba(0,0,0,0.105)]'>
       {form === "login" &&  <h1 className={`${urbanist.className} text-[22px] font-bold uppercase mb-5 fadeUp`}>Register</h1> }{form === "register" &&  <h1 className={`${urbanist.className} text-[22px] font-bold uppercase mb-5 fadeUp`}>login</h1>}
        <p className='text-[16px] text-[#767676] mb-8'>
            Registering for this site allows you to access your order status and history. Just fill in the fields below, and we'll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.
            </p>
        <button className='py-1 px-6 bg-white text-[#242424] max-h-[40px] rounded-3xl capitalize' onClick={()=>{form === "login" ? setForm("register") : setForm("login")}}>{form === "login" ? "Register" : "login"}</button>
      </div>
    </div>
  )
}

export default form
