import React from 'react'
import { Link } from 'react-router-dom'

const Images = ({ href, src, alt }) => {
  return (
    <Link to={href}>
      <picture>
        <img src={src} alt={alt} />
      </picture>
    </Link>
  )
}

export default Images
