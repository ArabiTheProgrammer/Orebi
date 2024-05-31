import React from 'react'

const Container = ({ children, className }) => {
  return (
    <div className={`max-w-[1600px] font-DM mx-auto ${className}`}>
      {children}
    </div>
  )
}

export default Container
