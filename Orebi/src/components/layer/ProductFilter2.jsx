import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GoTriangleUp } from "react-icons/go";
import { FaCircle } from "react-icons/fa";

const ProductFilter2 = ({ catitle }) => {
let [ showheading, setShowheading ] = useState(false) 
  return (
    <div className="pt-[53px]">
      <h3 onClick={()=> setShowheading(!showheading)} className="font-DM font-bold text-[20px] pb-[35px] text-[#262626] flex justify-between items-center">
        {catitle}
      <GoTriangleUp className={` cursor-pointer transition-all duration-300 ${showheading?"rotate-0":"rotate-180"}`}/>
      </h3>
              {showheading&&(
                <ul className="flex flex-col gap-y-5">
                <li className="border-b border-[#F0F0F0] relative overflow-hidden">
                  <Link className="flex justify-between relative text-base leading-7">
                     <span className= "flex gap-x-[10px] items-center font-DM text-[#767676] pb-[19px] ">
                        <div className="flex justify-center">
                      <FaCircle className="text-[#000] w-[11px] h-[11px]"/>
                        </div>
                        Color 1
                     </span>
                  </Link>
                </li>
                <li className="border-b border-[#F0F0F0] relative overflow-hidden">
                  <Link className="flex justify-between relative text-base leading-7">
                     <span className= "flex gap-x-[10px] items-center font-DM text-[#767676] pb-[19px] ">
                        <div className="flex justify-center">
                      <FaCircle className="text-[#FF8686] w-[11px] h-[11px]"/>
                        </div>
                        Color 2
                     </span>
                  </Link>
                </li>
                <li className="border-b border-[#F0F0F0] relative overflow-hidden">
                  <Link className="flex justify-between relative text-base leading-7">
                     <span className= "flex gap-x-[10px] items-center font-DM text-[#767676] pb-[19px] ">
                        <div className="flex justify-center">
                      <FaCircle className="text-[#7ED321] w-[11px] h-[11px]"/>
                        </div>
                        Color 3
                     </span>
                  </Link>
                </li>
                <li className="border-b border-[#F0F0F0] relative overflow-hidden">
                  <Link className="flex justify-between relative text-base leading-7">
                     <span className= "flex gap-x-[10px] items-center font-DM text-[#767676] pb-[19px] ">
                        <div className="flex justify-center">
                      <FaCircle className="text-[#B6B6B6] w-[11px] h-[11px]"/>
                        </div>
                        Color 4
                     </span>
                  </Link>
                </li>
                <li className="border-b border-[#F0F0F0] relative overflow-hidden">
                  <Link className="flex justify-between relative text-base leading-7">
                     <span className= "flex gap-x-[10px] items-center font-DM text-[#767676] pb-[19px] ">
                        <div className="flex justify-center">
                      <FaCircle className="text-[#15CBA5] w-[11px] h-[11px]"/>
                        </div>
                        Color 5
                     </span>
                  </Link>
                </li>
              </ul>
              )}
    </div>
  )
}

export default ProductFilter2
