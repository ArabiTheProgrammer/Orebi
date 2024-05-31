import React, { useState } from 'react'
import Container from '../layer/Container'
import Breadcrumb from '../layer/Breadcrumb'
import ProductFilter from '../layer/ProductFilter';
import ProductFilter2 from '../layer/ProductFilter2';
import ProductFilter3 from '../layer/ProductFilter3';
import ProductFilter4 from '../layer/ProductFilter4';
import { IoGrid } from "react-icons/io5";
import { FaList } from "react-icons/fa";
import Pagination from '../Pagination';


const Shop = () => {

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
           <div className="sidebar w-[370px]">
              <ProductFilter catitle="Shop by Category"/>
              <ProductFilter2 catitle="Shop by Color"/>
              <ProductFilter3 catitle="Shop by Brand"/>
              <ProductFilter4 catitle="Shop by Price"/>
           </div>
           <div className="products w-[1190px] ml-[39px] "> 
                <div className="w-full flex justify-between mb-[60px]">
                  <div className="Icon">
                  <div className="Icons flex items-center gap-x-5">
                    <div className=" cursor-pointer transition-all duration-300 w-9 h-9 border border-[#F0F0F0] flex justify-center items-center hover:text-[#767676] text-[#FFF] bg-[#262626] hover:bg-transparent">           
                    <IoGrid/>
                    </div>
                    <div className=" cursor-pointer transition-all duration-300 w-9 h-9 border border-[#F0F0F0] flex justify-center items-center text-[#767676] hover:text-[#FFF] bg-transparent hover:bg-[#262626]">
                    <FaList/>
                    </div>
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

                    <label className="pr-[14px] ml-[40px]" for="">Show</label>
                    <select onChange={selectNumber} className="py-[3px] px-5 outline-none border border-[#]" name="" id="">
                      <option className="bg-slate-200" value="12">12</option>
                      <option className="bg-slate-200" value="24">24</option>
                      <option className="bg-slate-200" value="36">36</option>
                      <option className="bg-slate-200" value="48">48</option>
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
