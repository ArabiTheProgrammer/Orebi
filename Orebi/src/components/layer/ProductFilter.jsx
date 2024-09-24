import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { GoTriangleUp } from "react-icons/go";

const ProductFilter = ({ catitle }) => {
let [ show, setShow ] = useState(false) 

let [ showheading, setShowheading ] = useState(false) 

let [ show2, setShow2 ] = useState(false) 
  return (
    <div>
      <h3 onClick={()=> setShowheading(!showheading)} className=" font-DM font-bold w-full text-[20px] pb-[35px] text-[#262626] flex justify-between items-center">
        {catitle}
      <GoTriangleUp className={` cursor-pointer transition-all duration-300 ${showheading?"rotate-0":"rotate-180"}`}/>
      </h3>
              {showheading&&(
                <ul className="flex flex-col gap-y-5">
                <li className="border-b border-[#F0F0F0] relative overflow-hidden" onClick={()=> setShow(!show)}>
                  <Link className="flex justify-between relative text-base leading-7">
                     <span className="font-DM text-[#767676] pb-[19px] ">
                       Category 1
                     </span>
                       <FaPlus className={`absolute transition-all duration-500 top-[50%] translate-y-[-100%] right-0 ${show ?"opacity-0 invisible":"opacity-100 visible rotate-90"}`}/>
                       <FaMinus className={`absolute top-[50%] translate-y-[-100%] transition-all duration-500 right-0 ${show ?"opacity-100 visible":"opacity-0 invisible"}`}/>

                  </Link>
                  <ul className={`transition-all duration-300 ${show ?"static":"absolute translate-x-[-100%] invisible"}`}>
                    <li className="pb-[10px]">
                      <Link className="font-DM text-[#767676] pl-4">Sub Category 1</Link>
                    </li>
                    <li className="pb-[10px]">
                      <Link className="font-DM text-[#767676] pl-4">Sub Category 2</Link>
                    </li>
                    <li className="pb-[19px]">
                      <Link className="font-DM text-[#767676] pl-4">Sub Category 3</Link>
                    </li>
                  </ul>
                </li>
                <li className="border-b border-[#F0F0F0] relative overflow-hidden" >
                  <Link className="flex justify-between relative text-base leading-7">
                     <span className="font-DM text-[#767676] pb-[19px] ">
                       Category 2
                     </span>

                  </Link>
                </li>
                
                <li className="border-b border-[#F0F0F0] relative overflow-hidden" onClick={()=> setShow2(!show2)}>
                  <Link className="flex justify-between relative text-base leading-7">
                     <span className="font-DM text-[#767676] pb-[19px] ">
                       Category 3
                     </span>
                       <FaPlus className={`absolute transition-all duration-500 top-[50%] translate-y-[-100%] right-0 ${show2 ?"opacity-0 invisible":"opacity-100 visible rotate-90"}`}/>
                       <FaMinus className={`absolute top-[50%] translate-y-[-100%] transition-all duration-500 right-0 ${show2 ?"opacity-100 visible":"opacity-0 invisible"}`}/>
                  </Link>
                  <ul className={`transition-all duration-300 ${show2 ?"static":"absolute translate-x-[-100%] invisible"}`}>
                    <li className="pb-[10px]">
                      <Link className="font-DM text-[#767676] pl-4">Sub Category 1</Link>
                    </li>
                    <li className="pb-[10px]">
                      <Link className="font-DM text-[#767676] pl-4">Sub Category 2</Link>
                    </li>
                    <li className="pb-[19px]">
                      <Link className="font-DM text-[#767676] pl-4">Sub Category 3</Link>
                    </li>
                  </ul>
                </li>
                <li className="border-b border-[#F0F0F0] relative overflow-hidden">
                  <Link className="flex justify-between relative text-base leading-7">
                     <span className="font-DM text-[#767676] pb-[19px] ">
                       Category 4
                     </span>
                  </Link>
                </li>
                <li className="border-b border-[#F0F0F0] relative overflow-hidden">
                  <Link className="flex justify-between relative text-base leading-7">
                     <span className="font-DM text-[#767676] pb-[19px] ">
                       Category 5
                     </span>
                  </Link>
                </li>
              </ul>
              )}
    </div>
  )
}

export default ProductFilter
