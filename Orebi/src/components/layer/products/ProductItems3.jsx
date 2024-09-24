import React from 'react'
import { FaHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { FaShoppingCart } from "react-icons/fa";
import pic3 from '../../../assets/pic3.jpg'

const ProductItems3 = ({ offer, className }) => {
  return (
    <div className={`lg:w-[370px] w-[160px] lg:ml-0 mx-auto ml-[10px] group ${className}`} >
      <div className="image w-full lg:h-[370px] h-[160px] bg-slate-300 relative overflow-hidden">
        <img className="w-full h-full object-cover" src={pic3} alt="Baskets.jpg" />
        <button className="absolute lg:left-5 lg:top-5 left-2 top-1 bg-[#262626] border border-[#262626] hover:bg-transparent hover:text-[#262626] transition-all duration-500 text-white lg:px-8 lg:py-2 px-4 py-[1px]">
            {offer}
        </button>
        <div className="overlay w-full lg:py-6 py-3 bg-white absolute bottom-0 translate-y-[100%] left-0 group-hover:translate-y-0 transition-all duration-300">
            <ul>
              <li className="flex lg:text-base text-[14px] transition-all duration-300 lg:pb-[21px] pb-[10px] items-center justify-end gap-x-3 px-3 text-[#767676] font-semibold hover:text-[#262626] cursor-pointer">
                Add to Wish List <FaHeart className="text-[#262626]"/>
              </li>
              <li className="flex lg:text-base text-[14px] transition-all duration-300 lg:pb-[21px] pb-[10px] items-center justify-end gap-x-3 px-3 text-[#767676] font-semibold hover:text-[#262626] cursor-pointer">
                Compare <TfiReload className="text-[#262626] rotate-45"/> 
              </li>
              <li className="flex lg:text-base text-[14px] transition-all duration-300 items-center justify-end gap-x-3 px-3 text-[#767676] font-semibold hover:text-[#262626] cursor-pointer">
                Add to Cart <FaShoppingCart className="text-[#262626]"/>
              </li>
            </ul>
        </div>
      </div>
        <div className="text bg-white">
            <h2 className="flex justify-between lg:pt-[24px] lg:pb-[15px] pb-2 pt-3 text-[#262626] font-DM font-bold text-[11.4px] lg:text-[16px]">
                Basic Crew Neck Tee <p className="text-[#767676] text-[11.5px] lg:text-[16px] font-DM font-normal">$44.00</p>
            </h2>
            <p className="text-[#767676] lg:text-[16px] text-[12px] font-DM font-normal">Black</p>
        </div>
    </div >
  )
}

export default ProductItems3

