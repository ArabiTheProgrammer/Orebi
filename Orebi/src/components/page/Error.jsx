import React from 'react'
import Container from '../layer/Container'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import Navbar from '../Navbar';
import Search from '../Search';
import Footer from '../Footer';

const Error = () => {
  return (
    <div>
      <Navbar/>
      <Search/>
      <Container>
        <div className="error lg:mt-[81px] mt-[50px] ml-[20px]">
            <h1 className="font-DM font-bold lg:text-[200px] md:text-[150px] text-[50px] text-[#262626]">404</h1>
            <p className="text-base text-[#767676]">The page you were looking for couldn't be found. The page could be removed or you <br /> misspelled the word while searching for it. Maybe try a search?
            </p>
            <div className="input mt-[50px]">
              <form className="relative">
                  <input type="text" placeholder='Type to search' className="py-[21px] lg:w-[643px] md:w-[643px] sm:w-[600px] w-[330px] border border-[#F0F0F0] pl-[21px] outline-none"/>
                  <FaSearch className="w-[15.97px] absolute top-[50%] translate-y-[-50%] lg:left-[38%] md:left-[80%] sm:left-[80%] left-[80%] sm:cursor-pointer"/>
              </form>
            </div>
            <div className="btn mt-[60px]">
            <form action="">
              <Link to="/Home">
            <button type='submit' className="py-[16px] pl-[45.9px] pr-[56.5px] font-bold text-sm hover:text-[#262626] hover:bg-transparent border border-[#262626] transition-all duration-500 text-[#FFF] bg-[#262626]">Back To Home</button>
              </Link>
            </form>
          </div>
        </div>
      </Container>
      <Footer/>
    </div>
  )
}

export default Error
