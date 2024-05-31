import React from 'react'
import Container from './layer/Container'
import ProductItem9 from './layer/products/ProductItems9'
import ProductItem10 from './layer/products/ProductItems10'
import ProductItem11 from './layer/products/ProductItems11'
import ProductItem12 from './layer/products/ProductItems12'

const SpecialOffers = () => {
  return (
    <div className="lg:pt-[0px] lg:pb-[48px]">
      <Container>
        <h2 className="font-bold font-DM text-[#262626] lg:text-[39px] text-[20px] ml-[25px] lg:ml-[20px] pb-[48px]">
            Special Offers
        </h2>    
        <div className="flex justify-between lg:flex-nowrap flex-wrap">
            <ProductItem9 className="lg:!ml-4" offer="10%"/>
            <ProductItem10 className="lg:!ml-9" offer="20%"/>
            <ProductItem11 className="lg:!ml-9" offer="7%"/>
            <ProductItem12 className="lg:!ml-9" offer="3%"/>
        </div>
      </Container>
    </div>
  )
}

export default SpecialOffers
