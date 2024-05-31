import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GoTriangleUp } from "react-icons/go";

const ProductFilter4 = ({ catitle }) => {
let [ showheading, setShowheading ] = useState(false) 
  return (
    <div className="pt-[53px]">
      <h3 onClick={()=> setShowheading(!showheading)} className="font-DM font-bold text-[20px] pb-[35px] text-[#262626] flex justify-between items-center">
        {catitle}
      <GoTriangleUp className={`cursor-pointer transition-all duration-300 ${showheading?"rotate-0":"rotate-180"}`}/>
      </h3>
              {showheading&&(
                <ul className="flex flex-col gap-y-5">
                <li className="border-b border-[#F0F0F0] relative overflow-hidden">
                  <Link className="flex justify-between relative text-base leading-7">
                     <span className= "font-DM text-[#767676] pb-[19px] ">
                     $0.00 - $9.99
                     </span>
                  </Link>
                </li>
                <li className="border-b border-[#F0F0F0] relative overflow-hidden">
                  <Link className="flex justify-between relative text-base leading-7">
                     <span className= "font-DM text-[#767676] pb-[19px] ">
                     $10.00 - $19.99
                     </span>
                  </Link>
                </li>
                <li className="border-b border-[#F0F0F0] relative overflow-hidden">
                  <Link className="flex justify-between relative text-base leading-7">
                     <span className= "font-DM text-[#767676] pb-[19px] ">
                     $20.00 - $29.99
                     </span>
                  </Link>
                </li>
                <li className="border-b border-[#F0F0F0] relative overflow-hidden">
                  <Link className="flex justify-between relative text-base leading-7">
                     <span className= "font-DM text-[#767676] pb-[19px] ">
                     $30.00 - $39.99
                     </span>
                  </Link>
                </li>
                <li className="border-b border-[#F0F0F0] relative overflow-hidden">
                  <Link className="flex justify-between relative text-base leading-7">
                     <span className= "font-DM text-[#767676] pb-[19px] ">           
                     $40.00 - $69.99
                     </span>
                  </Link>
                </li>
              </ul>
              )}
    </div>
  )
}

export default ProductFilter4
