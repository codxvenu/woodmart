import {React , useState} from 'react'
import { urbanist, workSans } from '@/pages/_app'
const order = () => {
    const [itemCount, setItemCount] = useState(1);
  return (
    <div className={`${workSans.className} lg:w-1/2 lg:ml-[25%] cart`}>
       <span className='flex p-5 bg-[rgba(16,16,16,0.05)] rounded-xl max-h-[66px] mt-10'>
              <h1 className={`${urbanist.className} text-[#242424] font-bold flex items-center text-2xl gap-3`}> <p className='py-2 px-4  rounded-full bg-[#f59a57] text-white text-[16px]'>1</p> Your Order</h1>
            </span>
            <table className=''>
                <thead><tr><th>Product</th>
                <th>subtotal</th></tr></thead>
                <tbody>
                    <tr>
                        <td className="w-full">
                            <div className="flex justify-between w-full">
                                <span className='flex gap-2 items-center text-[15px]'>
                                    <i class="ri-close-line"></i> <img className="max-w-[65px]" src="https://woodmart.xtemos.com/furniture2/wp-content/uploads/sites/11/2023/04/wd-furniture-tables-prod-13-1.jpg" alt="" />
                                    <span className="flex flex-col gap-2">
                                        <h1 className="text-[#777777]">Giro LR</h1>
                                          <span className="flex items-center lg:w-[20%] text-[#777777]">
            <button className="p-[5px] min-w-[25px]  border-[1px] border-[rgba(0,0,0,0.1)] rounded-l-4xl cursor-pointer hover:bg-[rgb(245,154,87)] hover:text-white transition-colors ease-in-out duration-75" onClick={()=>{itemCount > 0? setItemCount(itemCount -1 ) : alert("cant order less than 1 product") }}>
              -
            </button>
            <h3 className="border-[1px] border-[rgba(0,0,0,0.1)] border-x-0 p-[5px] min-w-[30px] text-center">
              {itemCount}
            </h3>
            <button className="p-[5px] min-w-[25px] border-[1px] border-[rgba(0,0,0,0.1)] rounded-r-xl cursor-pointer hover:bg-[rgb(245,154,87)] hover:text-white transition-colors ease-in-out duration-75" onClick={()=>{itemCount < 20 ? setItemCount(itemCount + 1 ) : alert("cant order more than 20 product")}}>
              +
            </button>
          </span>
                                    </span>
                                </span>
                               
                            </div>
                        </td>
                        <td> <h1>$12,123.00</h1></td>
                    </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th className={`${urbanist.className}`}>Subtotal</th>
                    <td><h2 className="text-[#f59a57] font-semibold">$12,123.00</h2></td>
                  </tr>
                  <tr>
                    <th className={`${urbanist.className}`}>Shipping</th>
                    <td><h2>Free shipping</h2></td>
                  </tr>
                   <tr>
                    <th className={`${urbanist.className}`}>Total </th>
                    <td><h2 className="text-[#f59a57] font-semibold text-[19.5px]">$12,123.00</h2></td>
                  </tr>
                </tfoot>
            </table>
            <div className="text-[#777777] flex flex-col gap-4 text-[15px]">
              <h2>Your order qualifies for free shipping!</h2>
                <div className="w-full h-[10px] rounded-4xl mt-1 bg-[rgb(245,154,87)] bg-[length:15px_15px] bg-repeat bg-[linear-gradient(135deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)]"></div>
                <span className="text-[#777777] bg-[#f59a571a] p-2.5 rounded-xl mt-2">Your order is expected to leave our warehouse within 1-7 days.</span>
  
            </div>
              </div>
  )
}

export default order
