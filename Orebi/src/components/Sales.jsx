import React from 'react'
import Container from './layer/Container'
import Images from './layer/Images'

const Sales = () => {
  return (
    <div className="lg:pt-[174px] pt-[74px]">
        <Container className="flex justify-between lg:flex-nowrap flex-wrap lg:gap-[40px] gap-[10px]">
          <div className="left lg:w-[780px] w-[330px] md:w-[400px] md:h-[400px] mx-auto h-[330px] lg:ml-[20px] bg-slate-400 lg:h-[780px]">
            <Images className="w-full h-full object-cover" href="/" src="./src/assets/Ad_1.jpg" alt="Ad_1.jpg"/>
          </div>
          <div className="right lg:w-[780px] md:w-[400px] md:h-[400px] mx-auto lg:mr-0 w-[330px] flex flex-col justify-between lg:h-[780px] h-[330px] gap-[10px]">
            <div className="child w-full lg:h-[370px] h-[190px] bg-slate-400">
            <Images className="w-full h-full object-cover" href="/" src="./src/assets/Ad_2.jpg" alt="Ad_2.jpg"/>
            </div>
            <div className="child w-full lg:h-[370px] h-[190px] bg-slate-400">
            <Images className="w-full h-full object-cover" href="/" src="./src/assets/Ad_3.jpg" alt="Ad_3.jpg"/>
            </div>
          </div>
        </Container>
    </div>
  )
}

export default Sales
