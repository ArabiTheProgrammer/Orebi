import React from 'react'
import List2 from '../List2'

const CategoryDropdown = () => {
  return (
    <>
      <ul className="absolute z-10 lg:w-[263px] w-[220px] text-[#767676] translate-y-6 px-5 flex flex-col gap-[16px] py-4 top-full left-0 bg-[#262626] ">
        <List2 className="hover:text-[#FFFFFF]  w-full py-4 font-[400] hover:px-8 mt-4 after:bg-[#2D2D2D]" href="/" text="Accesories"/>
        <List2 className="hover:text-[#FFFFFF] py-4 font-[400] hover:px-8 mt-4 after:bg-[#2D2D2D]" href="/" text="Furniture"/>
        <List2 className="hover:text-[#FFFFFF] py-4 font-[400] hover:px-8 mt-4 after:bg-[#2D2D2D]" href="/" text="Electronics"/>
        <List2 className="hover:text-[#FFFFFF] py-4 font-[400] hover:px-8 mt-4 after:bg-[#2d2d2d]" href="/" text="Clothes"/>
        <List2 className="hover:text-[#FFFFFF] py-4 font-[400] hover:px-8 mt-4 after:bg-[#2D2D2D]" href="/" text="Bags"/>
        <List2 className="hover:text-[#FFFFFF] py-4 font-[400] hover:px-8 mt-4 after:bg-[#2D2D2D]" href="/" text="Home Appliances"/>
      </ul>
    </>
  )
}

export default CategoryDropdown
