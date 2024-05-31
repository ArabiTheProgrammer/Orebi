import React from 'react'
import { Link } from 'react-router-dom'

const Images = ({ href, src, alt, className }) => {
  return (
    <Link to={href}>
      <picture>
        <img className={className} src={src} alt={alt} />
      </picture>
    </Link>
  )
}

export default Images
