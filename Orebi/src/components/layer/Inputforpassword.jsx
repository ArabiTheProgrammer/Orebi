import { FaEye, FaEyeLowVision } from 'react-icons/fa6'
import React, { useState } from 'react'

const Inputforpassword = ({className,placeholder,label,id,classNameforplaceholder,children,onchange,value}) => {
    let [eye,seteye] = useState(true)

  return (
    <div  className='flex max-w-[508px] flex-col relative w-full border-b border-[#F0F0F0]'>
    <label className={
        `font-DM lg:text-base sm:text-sm text-xs text-[#262626] lg:leading-[23px] md::leading-4 sm:leading-3 leading-2 ${className}`
    } htmlFor={id}>{label}</label>
    <input value={value} onChange={onchange} id={id} className={`lg:pt-[33px] md:pt-5 sm:pt-4 pt-3 md:pb-4 sm:pb-3 pb-2 lg:text-sm sm:text-xs text-[10px] font-DM text-[#767676] outline-none ${classNameforplaceholder}`} type={eye?"password":"text"} placeholder={placeholder} />
    {
        eye ? (<FaEye onClick={()=>{seteye(!eye)}} className='absolute top-1/2 translate-y-0 md:translate-y-[100%]  right-0 md:w-auto w-3'/>):(<FaEyeLowVision onClick={()=>{seteye(!eye)}} className={`absolute top-1/2 translate-y-0 md:translate-y-[100%] right-0 md:w-auto w-3`}/>)
    } 
    {children}       
    </div>
  )

}

export default Inputforpassword
