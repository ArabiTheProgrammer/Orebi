import React from 'react'
import Navbar from '../Navbar'
import Search from '../Search'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'

const RootLayout = () => {
  return (
    <div>
      <Navbar/>
      <Search/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default RootLayout
