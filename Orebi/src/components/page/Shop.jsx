import React, { useState } from 'react'
import Container from '../layer/Container'
import Breadcrumb from '../layer/Breadcrumb'
import ProductFilter from '../layer/ProductFilter';
import ProductFilter2 from '../layer/ProductFilter2';
import ProductFilter3 from '../layer/ProductFilter3';
import ProductFilter4 from '../layer/ProductFilter4';
import Pagination from '../Pagination';
import { IoGrid } from "react-icons/io5";
import { FaList } from "react-icons/fa";
import { FaBarsStaggered } from 'react-icons/fa6';
import { ImCross } from "react-icons/im";


const Shop = () => {
  let [show, setShow] = useState(false)
  let [number, setNumber] = useState(12)

  let selectNumber = (element)=>{
    let numberConverter = Number(element.target.value)
    setNumber(numberConverter)
  }

  return (
    <div >
     
      <Container>
        <div className="breadcrumb mt-[124px]">
      <h1 className="font-DM font-bold text-[49px] text-[#262626]">Products</h1>
        <Breadcrumb/>
        </div>
        <div className="main mt-[130px] flex justify-between">
           <div className={`p-3 sidebar lg:w-[370px] md:w-[300px] sm:w-56 w-64  md:static md:flex flex-col gap-y-[53px] absolute md:bg-transparent bg-[#e7efcf] z-10 ${show ? " translate-x-[0]":"md:translate-x-0 translate-x-[-100%]"} duration-500 transition-all `}>
              <div className='w-full md:hidden flex justify-end'>
              <div onClick={()=>setShow(false)} className='mb-3 w-6 h-6 border border-[#6f6d6d] flex justify-center items-center hover:bg-[#262626] hover:text-white transition-all duration-300 text-[#262626] cursor-pointer '>
                <ImCross  className='text-xs'/>
              </div>
              </div>
                <div className="flex flex-col lg:gap-y-[35px] md:gap-y-[30px] sm:gap-y-6 gap-y-4 ">
                <ProductFilter catitle="Shop by Category"/>
                <ProductFilter2 catitle="Shop by Color"/>
                <ProductFilter3 catitle="Shop by Brand"/>
                <ProductFilter4 catitle="Shop by Price"/>
                </div>
            </div>
           <div className="products w-[1190px] ml-[39px] flex flex-wrap">
                <div className="w-full flex justify-between mb-[60px] flex-wrap">
                    <div className="icon flex gap-5 md:mb-0 mb-3 w-full md:w-auto justify-center">
                    <div onClick={()=>{setShow(true)}} className='h-9 w-9 border border-[#F0F0F0] flex justify-center items-center hover:bg-[#262626] hover:text-white transition-all duration-500 text-[#737373] cursor-pointer md:hidden' >
                        <FaBarsStaggered />
                      </div>
                      <div className='h-9 w-9 border border-[#F0F0F0] flex justify-center items-center hover:bg-[#262626] hover:text-white transition-all duration-500 text-[#737373] cursor-pointer' >
                        <IoGrid/>
                      </div>
                      <div className='h-9 w-9 border border-[#F0F0F0] flex justify-center items-center hover:bg-[#262626] hover:text-white transition-all duration-500 text-[#737373] cursor-pointer' >
                        <FaList/>
                      </div>
                    </div>
                  <div className="Right">
                    <label className="pr-[14px]" for="">Sort by:</label>
                    <select className="py-[3px] px-5 outline-none border border-[#]" name="" id="">
                      <option className="bg-slate-200" value="Featured">Featured</option>
                      <option className="bg-slate-200" value="Lowest to Highest">Lowest to Highest</option>
                      <option className="bg-slate-200" value="Highest to Lowest">Highest to Lowest</option>
                      <option className="bg-slate-200" value="Popular">Popular</option>
                    </select>

                    <label className="pr-[14px] ml-[40px]" for="">Show:</label>
                    <select onChange={selectNumber} className="py-[3px] px-5 outline-none border mt-[20px] border-[#]" name="" id="">
                      <option className="bg-slate-200" value="12">12</option>
                      <option className="bg-slate-200" value="24">22</option>
                      <option className="bg-slate-200" value="36">30</option>
                    </select>
                  </div>
                </div>

                  <Pagination itemsPerPage={number} />
           </div>
        </div>
      </Container>

    </div>
  )
}

export default Shop
