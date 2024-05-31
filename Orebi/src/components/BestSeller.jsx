import React from 'react'
import Container from './layer/Container'
import ProductItem6 from './layer/products/ProductsItems6'
import ProductItem7 from './layer/products/ProductItems7'
import ProductItem from './layer/products/ProductItem'
import ProductItem8 from './layer/products/ProductItems8'

const BestSeller = () => {
  return (
    <div className="lg:pt-[118px] lg:pb-[48px]">
      <Container>
        <h2 className="font-bold font-DM text-[#262626] lg:text-[39px] text-[20px] ml-[25px] lg:ml-[20px] pb-[48px]">
            Best Seller
        </h2>    
        <div className="flex justify-between lg:flex-nowrap flex-wrap">
            <ProductItem6 className="lg:!ml-4" offer="New"/>
            <ProductItem7 className="lg:!ml-9"/>
            <ProductItem className="lg:!ml-9" offer="New"/>
            <ProductItem8 className="lg:!ml-9" offer="5%"/>
        </div>
      </Container>
    </div>
  )
}

export default BestSeller