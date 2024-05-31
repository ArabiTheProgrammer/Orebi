import React from 'react'
import List2 from '../List2'

const AccountDropdown = () => {
  return (
    <>
      <ul className="absolute z-10 w-[263px] flex flex-col gap-[25px] text-center translate-y-12 right-[-30px]">
        <List2 href="/" className=" w-[200px] border border-[#2B2B2B] hover:border-[#F0F0F0] py-4 pl-[59px] pr-[56.3px] bg-[#2B2B2B] font-bold hover:bg-white text-[#fff] hover:text-[#262626]" text="My Account"/>
        <List2 className="py-4 border border-[#F0F0F0] pt-[17px] pl-[72px] pr-[73px] hover:border-[#2B2B2B] bg-white hover:bg-[#2B2B2B] text-[#262626] hover:text-white font-[700]" text="Log Out"/>
      </ul>
    </>
  )
}

export default AccountDropdown
