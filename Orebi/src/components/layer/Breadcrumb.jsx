import React from 'react'
import { FaAngleRight } from "react-icons/fa";

const Breadcrumb = ({text,className}) => {
  return (
    <div className={`${className}`}>
      <div className="font-DM font-bold text-[49px] text-[#262626]">
        {
          text
        }
      </div>
    <p className="flex items-center mt-[11px] capitalize text-xs">
      <span>Home</span>
      <FaAngleRight/>
      <span>{window.location.pathname.split("/")[1]}</span>
      <span className="lowercase">{window.location.pathname.split("/")[2]}</span>
    </p>
    </div>
  )
}

export default Breadcrumb
