import React, { useEffect, useRef, useState } from 'react'
import Container from './layer/Container'
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaShoppingCart } from "react-icons/fa";
import CategoryDropdown from './layer/dropdowns/CategoryDropdown';
import AccountDropdown from './layer/dropdowns/AccountDropdown';
import ShoppingCartDropdown from './layer/dropdowns/ShoppingCartDropdown';
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";

const Search = () => {

  let [cat, setCat] = useState(false);

  let [acc, setAcc] = useState(false);

  let [cart, setCart] = useState(false);

  let catRef = useRef()

  let accRef = useRef()

  let cartRef = useRef()

  useEffect(() =>{

    document.body.addEventListener("click", (element)=>{

      if(catRef.current.contains(element.target)){
        setCat(true)
      }else{
        setCat(false)
      }

      if(accRef.current.contains(element.target)){
        setAcc(true)
      }else{
        setAcc(false)
      }

      if(cartRef.current.contains(element.target)){
        setCart(true)
      }else{
        setCart(false)
      }

        })
},[])


  return (
    <>
      <section id="SearchBar" className="py-[25px] bg-[#F5F5F3]">

        <Container className="flex lg:justify-between justify-center items-center flex-wrap lg:gap-0 gap-5">

            <div ref={catRef} className="Category flex gap-[10.71px] items-center relative">

                <p  className="flex gap-x-2 items-center text-[#262626] cursor-pointer font-DM text-[14px] font-normal"> <HiOutlineBars3BottomLeft/> Shop By Category</p>

                {cat && (
                  <CategoryDropdown/>
                )}

            </div>

            <div className="searchbar">

                <form className="relative lg:w-[601px] lg:ml-[300px] w-auto">
                    <input type="text" placeholder='Search Products' className="lg:py-4 py-2 ps-[21px] lg:w-full pr-10 lg:px-12 block outline-none"/>
                    <FaSearch className="w-[15.97px] absolute top-[50%] translate-y-[-50%] lg:right-[21.03px] right-4 cursor-pointer"/>
                </form>

            </div>

            <div ref={accRef} className="Account flex lg:ml-80 lg:gap-[41px] gap-4 ms-3">

                <div className="Account relative flex lg:gap-[10.52px] gap-1">

                <FaUser className="cursor-pointer"/>

                <TiArrowSortedDown className="cursor-pointer" />

                {acc && (
                <AccountDropdown/>
                )}

                </div>

            </div>
                  <div ref={cartRef} className="Cart relative cursor-default">
                    <div className="Icon">
                   <FaShoppingCart className="cursor-pointer" />
                    </div>

                      {cart && (
                        <ShoppingCartDropdown/>
                      )}
                  </div>


        </Container>

      </section>
    </>
  )
}

export default Search
