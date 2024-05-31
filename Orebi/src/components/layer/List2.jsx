import React from 'react'
import { Link } from 'react-router-dom'

const List2 = ({ text, href, className, children }) => {
  return (
    <li>
      <Link className={`font-DM text-sm transition-all duration-500 ${className}`}to={href}>
         {text} {children}
      </Link>
    </li>
  )
}

export default List2
