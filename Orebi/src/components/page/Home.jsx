import React from 'react'
import Navbar from '../Navbar'
import Search from '../Search'
import Banner from '../Banner'
import BannerBottom from '../BannerBottom'
import Sales from '../Sales'
import Arrivals from '../Arrivals'
import BestSeller from '../BestSeller'
import Ad from '../Ad'
import SpecialOffers from '../SpecialOffers'


const Home = () => {
  return (
    <>
      <Banner/>
      <BannerBottom/>
      <Sales/>
      <Arrivals/>
      <BestSeller/>
      <Ad/>
      <SpecialOffers/>
    </>
  )
}

export default Home
