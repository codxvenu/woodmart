import Side_bar from '@/components/account/Side_bar'
import { workSans , urbanist } from '@/pages/_app'
import {React,useContext,useEffect,useState} from 'react'
import Head from '@/components/account/head'
import { Product } from '@/context/ProductContext'

const billing = () => {
    const [form,setform] = useState([{
    }])
    const { setAddress } = useContext(Product);
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setform((prev)=>({
            ...prev,[name]:value})
        )
    }
    useEffect(()=>{
        const addr = JSON.parse(localStorage.getItem("form"));
        setAddress(addr);
        setform(addr)
    },[])
  return (
   <>
    <Head/>
     <div className={`grid grid-cols-[1fr_3fr] ${workSans.className} lg:p-[40px_70px] p-[20_15px]`} style={{backgroundImage : "url(/bg.jpg)"}}>
              <Side_bar tab={3} />
                 <div className={`px-8 ${workSans.className}`}>
                 <h1 className={`${urbanist.className} text-[22px] font-bold mb-[20px]`}>Billing address</h1>
                 <form action="" className="flex flex-col gap-4">
  <span className="flex w-full gap-10">
    <div className="flex flex-col gap-2 w-full">
      <label className="text-[15px]">
        First name <span className="text-[#E01020]">*</span>
      </label>
      <input
        type="text"
        name="first"
        onChange={handleChange}
        className="w-full border border-[rgba(0,0,0,0.1)] p-2 rounded-4xl outline-none px-3 bg-white text-[14px]"
      />
    </div>
    <div className="flex flex-col gap-2 w-full">
      <label className="text-[15px]">
        Last name <span className="text-[#E01020]">*</span>
      </label>
      <input
        type="text"
        name="last"
        onChange={handleChange}
        className="w-full border border-[rgba(0,0,0,0.1)] p-2 rounded-4xl outline-none px-3 bg-white text-[14px]"
      />
    </div>
  </span>

  <div className="flex flex-col gap-2 w-full">
    <label className="text-[15px]">
      Company name (optional) <span className="text-[#E01020]">*</span>
    </label>
    <input
      type="text"
      name="company"
      onChange={handleChange}
      className="w-full border border-[rgba(0,0,0,0.1)] p-2 rounded-4xl outline-none px-3 bg-white text-[14px]"
    />
  </div>

  <div className="flex flex-col gap-2 w-full">
    <label className="text-[15px]">
      Country / Region <span className="text-[#E01020]">*</span>
    </label>
    <input
      type="text"
      name="country"
      onChange={handleChange}
      className="w-full border border-[rgba(0,0,0,0.1)] p-2 rounded-4xl outline-none px-3 bg-white text-[14px]"
    />
  </div>

  <div className="flex flex-col gap-2 w-full">
    <label className="text-[15px]">
      Street address <span className="text-[#E01020]">*</span>
    </label>
    <input
      type="text"
      name="street"
      onChange={handleChange}
      className="w-full border border-[rgba(0,0,0,0.1)] p-2 rounded-4xl outline-none px-3 bg-white text-[14px]"
    />
  </div>

  <div className="flex flex-col gap-2 w-full">
    <label className="text-[15px]">
      Town / City <span className="text-[#E01020]">*</span>
    </label>
    <input
      type="text"
      name="town"
      onChange={handleChange}
      className="w-full border border-[rgba(0,0,0,0.1)] p-2 rounded-4xl outline-none px-3 bg-white text-[14px]"
    />
  </div>

  <div className="flex flex-col gap-2 w-full">
    <label className="text-[15px]">
      State <span className="text-[#E01020]">*</span>
    </label>
    <input
      type="text"
      name="state"
      onChange={handleChange}
      className="w-full border border-[rgba(0,0,0,0.1)] p-2 rounded-4xl outline-none px-3 bg-white text-[14px]"
    />
  </div>

  <div className="flex flex-col gap-2 w-full">
    <label className="text-[15px]">
      PIN Code <span className="text-[#E01020]">*</span>
    </label>
    <input
      type="text"
      name="pin"
      onChange={handleChange}
      className="w-full border border-[rgba(0,0,0,0.1)] p-2 rounded-4xl outline-none px-3 bg-white text-[14px]"
    />
  </div>

  <div className="flex flex-col gap-2 w-full">
    <label className="text-[15px]">
      Phone <span className="text-[#E01020]">*</span>
    </label>
    <input
      type="text"
      name="phone"
      onChange={handleChange}
      className="w-full border border-[rgba(0,0,0,0.1)] p-2 rounded-4xl outline-none px-3 bg-white text-[14px]"
    />
  </div>

  <div className="flex flex-col gap-2 w-full">
    <label className="text-[15px]">
      Email address <span className="text-[#E01020]">*</span>
    </label>
    <input
      type="text"
      name="email"
      onChange={handleChange}
      className="w-full border border-[rgba(0,0,0,0.1)] p-2 rounded-4xl outline-none px-3 bg-white text-[14px]"
    />
  </div>

  <button
    type="button"
    className="text-white bg-[#f59a57] px-6 py-3 w-fit text-[13px] rounded-3xl font-medium"
    onClick={() => {localStorage.setItem("form", JSON.stringify(form)); setAddress(form); alert("address Saved");}}
  >
    Save Address
  </button>
</form>

    </div>
    </div>
    </>
  )
}

export default billing

