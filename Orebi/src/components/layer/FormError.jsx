import React from 'react'

const FormError = ({error,className}) => {
  return (
      <p className={`absolute top-full translate-y-1 text-xs text-white bg-red-400 py-1 px-2 rounded-md ${className}`}>{error}</p> 
  )
}

export default FormError
