import React from 'react'
import { Link } from 'react-router-dom'

const List = ({ text, href, className }) => {
  return (
    <li>
      <Link className={`font-DM text-[#767676] text-sm hover:font-bold hover:text-black transition-all duration-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-slate-400 relative hover:after:w-full after:transition-all after:duration-300 ${className}`}to={href}>
         {text}
      </Link>
    </li>
  )
}

export default List
