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
import Button from './layer/Button';
import '../App.css';

const Search = () => {

  let [cat, setCat] = useState(false);

  let [acc, setAcc] = useState(false);

  let [cart, setCart] = useState(false);

  let catRef = useRef()

  let accRef = useRef()

  let cartRef = useRef()

  let [search, setSearch] = useState('')
  let [product, setProduct] = useState([])
  let [filterProduct, setFilterProduct] = useState([])

  useEffect(()=>{
    let allData = async ()=>{
        try {
          
          const response = await fetch("https://dummyjson.com/products")
          const data = await response.json()
          setFilterProduct(data.products);
          setProduct(data.products);

        }catch (error){
          console.log('Error', error);          
        }
    }
    allData()
  },[])

  useEffect(()=>{
      if (search === "") {
        setFilterProduct("")
      }else{
        let filterData = product.filter((item)=> item.title.toLowerCase().includes(search.toLocaleLowerCase()))
        setFilterProduct(filterData)
      }
  },[search, product])

  let manageSearch = (e)=>{
    setSearch(e.target.value);
    console.log(e.target.value);
  }

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
      <div id="SearchBar" className="py-[25px] bg-[#F5F5F3]">

        <Container className="flex lg:justify-between relative justify-center items-center flex-wrap lg:gap-0 gap-5">

            <div ref={catRef} className="Category flex gap-[10.71px] items-center relative">

                <p  className="flex gap-x-2 items-center text-[#262626] cursor-pointer font-DM text-[14px] font-normal"> <HiOutlineBars3BottomLeft/> Shop By Category</p>

                {cat && (
                  <CategoryDropdown/>
                )}

            </div>

            <div className="searchbar input-wrapper">

                <form className="relative lg:w-[601px] lg:ml-[300px] w-auto">
                    <input value={search} onChange={manageSearch} type="text" placeholder='Search Products' className="lg:py-4 py-2 ps-[21px] lg:w-full pr-10 lg:px-12 block outline-none"/>
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


          <div className="py-[5px] absolute top-[100%] left-1/2 -translate-x-1/2 z-50">       
            {
              filterProduct.length > 0 && (
                  <ul id="SearchBarBox" className="bg-gray-50 overflow-y-scroll md:w-[600px] md:max-h-[700px] h-[350px] lg:h-[700px] lg:w-[601px] lg:mt-[30px] sm:w-[500px] w-auto grid grid-cols-1">
                    {
                      filterProduct.map((item, i) => (
                        <li className="py-2 w-full border bg-[#f3f4f6] flex" key={i}>
                          <img className="w-44 bg-[#f9f9f9]" src={item.thumbnail} alt="" />
                          <div className="">
                            <h3 className="ml-[20px] text-[#262626] font-bold font-DM text-[25px]">{item.title}</h3>
                            <p className="ml-[20px] text-[#767676] font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, eaque iusto impedit modi harum quis incidunt est?</p>
                            <div className="flex ml-[20px] mt-[10px]">
                            <p className="text-[#767676] font-bold font-DM text-[15px]">Price:</p>
                            <p className="ml-[10px] text-[#262626] mt-[-4px] text-[20px] font-bold">${item.price}</p>
                            </div>
                            <div className="flex">
                            <Button className="px-4 mt-[10px] ml-[20px] py-[5px]" text="Add To Cart"/>
                            <Button className="px-4 mt-[10px] ml-[10px] py-[5px]" text="Wishlist"/>
                            </div>
                          </div>
                        </li>
                      ))
                    }
                  </ul>
              )
            }
          </div>           
        </Container>


      </div>
    </>
  )
}

export default Search
