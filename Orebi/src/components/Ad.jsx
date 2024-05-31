import React from 'react'
import Images from './layer/Images'
import Container from './layer/Container'

const Ad = () => {
  return (
    <div className="lg:pt-[130px] pt-5 pb-16 lg:pb-[128px]">
      <Container>
        <Images className="lg:ml-0 lg:mr-0 lg:w-[1600px]" href="/" src="./src/assets/Ads_2.jpg" alt="Ad_4.jpg"/>
      </Container>
    </div>
  )
}

export default Ad
