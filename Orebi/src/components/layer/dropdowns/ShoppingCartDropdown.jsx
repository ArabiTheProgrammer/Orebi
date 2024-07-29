import React from 'react'
import List2 from '../List2'
import Images from '../Images'
import { Link } from 'react-router-dom'

const ShoppingCartDropdown = () => {
  return (
    <>
      <ul className="absolute z-10 group flex flex-col translate-y-8 right-0">
        <div className="Top lg:w-[360px] w-[300px] border border-[#F0F0F0] bg-[#F5F5F3] font-bold">
        <List2 href="/" className="flex flex-row ">
          <picture>
            <img className="bg-[#D8D8D8] w-[80px] h-[80px] lg:mx-[20px] mx-[13px] my-[14px] lg:my-[23px]" src="./src/assets/Watch.png" alt="Watch.png" />
          </picture>

          <div className="text">
            <p className="lg:pt-[37px] pt-[25px] text-right">Black Smart Watch</p>
            <p className="lg:pt-[12px] pt-[6px] text-left">$44.00</p>
          </div>

          <div className="Icon absolute lg:top-[55px] top-[42px] lg:right-[20px] right-[15px]">
            <picture>
              <img src="./src/assets/Path.png" alt="Cross.png" />
            </picture>
          </div>
        </List2>
        </div>
        
        <div className="Bottom lg:w-[360px] w-[300px] border border-[#F0F0F0] bg-white">
        <List2 href="/">
            <p className="lg:pt-[14px] pt-[7px] lg:pl-[20px] pl-[13px] text-[#767676] lg:pb-[13px] pb-[6.5px]">Subtotal: <strong className="text-[#262626]">$44.00</strong> </p>

            <div className="Button lg:pl-[20px] pl-[13px] lg:pb-[20px] pb-[10px] flex gap-[21px] ">
              <Link to="/Cart">            
                <button className="border border-[#2B2B2B] hover:bg-[#262626] text-[#262626] hover:text-[#FFF] transition-all duration-300 font-DM font-bold lg:py-[16px] py-[12px] lg:pl-[43px] px-[25px] lg:pr-[39px]">View Cart</button>
              </Link>
              <Link to="/Checkout">          
                <button className="border border-[#2B2B2B] bg-[#262626] transition-all duration-300 hover:bg-transparent hover:text-[#262626] text-[#FFF] font-DM font-bold lg:py-[16px] py-[12px] lg:pl-[43px] px-[25px] lg:pr-[39px]">Checkout</button>
              </Link>
            </div>
        </List2>
        </div>
          
      </ul>
    </>
  )
}

export default ShoppingCartDropdown
