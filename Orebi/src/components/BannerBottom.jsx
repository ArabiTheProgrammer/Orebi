import React from 'react'
import Container from './layer/Container'
import { PiNumberTwoBold } from "react-icons/pi";
import { FaTruck } from "react-icons/fa6";
import { SlReload } from "react-icons/sl";

const BannerBottom = () => {
  return (
    <div className="border-b border-[#F0F0F0]">

      <Container className="lg:pt-[30px] pt-[15px] lg:pb-[29px] pb-0 md:pb-[29px] sm:pb-[29px] flex flex-wrap justify-between items-center">

        <p className="flex items-center lg:ml-5 lg:mb-[0] mb-[10px] md:mb-0 sm:mb-0 sm:ml-[90px] md:ml-0 ml-[30px] lg:gap-x-[17.06px] gap-x-[2px] font-normal text-base text-[#6D6D6D]">
            <PiNumberTwoBold className="text-black text-xl"/>
            Two years warranty
        </p>

        <p className="flex items-center lg:gap-x-[15px] lg:mb-[0] mb-[10px] md:mb-0 sm:mb-0 sm:mr-0 md:mr-0 lg:ml-0 mr-[30px] gap-x-[5px] font-normal text-base text-[#6D6D6D]">
            <FaTruck className="text-black text-xl"/>
            Free shipping
        </p>

        <p className="flex items-center lg:mr-[-10px] ml-[90px] md:mb-0 md:ml-0 lg:mb-0 sm:mb-0 sm:ml-0 sm:mr-6 mb-[25px] lg:gap-x-[15px] gap-x-[5px] font-normal text-base text-[#6D6D6D]">
            <SlReload className="text-black text-xl rotate-90"/>
            Return policy in 30 days
        </p>

      </Container>

    </div>
  )
}

export default BannerBottom
