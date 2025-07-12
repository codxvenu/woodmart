import { urbanist } from '@/pages/_app'
import React, { use, useState } from 'react'

const form = () => {
    const[pass,setPass]=useState(false);
    const[form,setForm] =useState("login");
  return (
    <div className='grid md:grid-cols-2 py-10 max-w-[1080px] mx-auto '>
      <div>
       {form==="register" && 
        <form className='flex flex-col gap-4 px-[40px] fadeUp'>
            <h1 className={`${urbanist.className} text-[22px] font-bold uppercase`}>Register</h1>
            {["username","email","password"].map((imp)=>(

            <label htmlFor={imp} className='grid gap-2 capitalize relative'> <span>{imp} <span className='text-[#f59a57]'>*</span></span>  <input type="text" name={imp} className='border-[1px] border-[rgba(0,0,0,0.2)] rounded-3xl py-2 bg-white' /><i className={`ri-eye${pass? "-off" : ""}-line absolute top-[55%] right-5 ${imp === "password" && "!block"} hidden`} onClick={()=>setPass(imp === "password" && !pass) }></i></label>
            ))}
        
            <button className='text-white bg-[#f59a57] rounded-4xl w-full py-2'>Register</button>
        </form>
       }
       {form==="login" && 
       <form className='flex flex-col gap-4 px-[40px] fadeUp'>
            <h1 className={`${urbanist.className} text-[22px] font-bold uppercase`}>Login</h1>
            {["Username or email address","password"].map((imp)=>(

            <label htmlFor={imp} className='grid gap-2 capitalize relative'><span>{imp} <span className='text-[#f59a57]'>*</span></span> <input type="text" name={imp} className='border-[1px] border-[rgba(0,0,0,0.2)] rounded-3xl py-2 bg-white' /><i className={`ri-eye${pass? "-off" : ""}-line absolute top-[55%] right-5 ${imp === "password" && "!block"} hidden`} onClick={()=>setPass(imp === "password" && !pass) }></i></label>
            ))}
        
            <button className='text-white bg-[#f59a57] rounded-4xl w-full py-2'>Log in</button>
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
