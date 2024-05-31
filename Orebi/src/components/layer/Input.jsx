import React from 'react'

const Input = ({placeholder, text, type, className}) => {
  return (
    <div>
        <div className={`lg:w-[508px] w-[250px] h-[68px] ${className}`}>
            <h3 className='lg:text-base text-sm font-bold leading-6 '>{text}</h3>
                <input type={`text ${type}`} placeholder={placeholder} className='w-full lg:pt-[10px] lg:pb-[17px] py-1 outline-none border-b border-[#F0F0F0] text-[#131313] lg:text-sm text-xs' />
        </div> 
    </div>
  )
}

export default Input