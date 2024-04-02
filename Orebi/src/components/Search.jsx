import React from 'react'
import Container from './layer/Container'
import Images from './layer/Images'
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaShoppingCart } from "react-icons/fa";
import { HiBars3BottomLeft } from "react-icons/hi2";

const Search = () => {
  return (
    <>
      <section id="SearchBar" className="py-[25px] bg-[#F5F5F3]">
        <Container className="flex lg:justify-between justify-center items-center flex-wrap lg:gap-0 gap-5">
            <div className="Category flex gap-[10.71px] items-center">
                <HiBars3BottomLeft className="cursor-pointer" />
                <p className="text-[#262626] font-DM text-[14px] font-normal">Shop By Category</p>
            </div>
            <div className="searchbar">
                <form className="relative lg:w-[601px] w-auto">
                    <input type="text" placeholder='Search Products' className="lg:py-4 py-2 ps-[21px] lg:w-full pr-10 lg:pr-12 block outline-none"/>
                    <FaSearch className="w-[15.97px] absolute top-[50%] translate-y-[-50%] lg:right-[21.03px] right-4"/>
                </form>
            </div>
            <div className="AccountAndCart flex lg:gap-[41px] gap-4 ms-3">
                <div className="Icons flex lg:gap-[10.52px] gap-1">
                <FaUser className="cursor-pointer"/>
                <TiArrowSortedDown className="cursor-pointer" />
                </div>
                <FaShoppingCart className="cursor-pointer" />
            </div>
        </Container>
      </section>
    </>
  )
}

export default Search
