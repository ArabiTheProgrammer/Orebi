import React from 'react'
import Container from './layer/Container'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Images from './layer/Images'



const Footer = () => {
  return (
    <div className="pt-[55px] pb-[52px] bg-[#F5F5F3] mt-[106px]">
      <Container className="md:flex md:justify-between">
        <div className="left">
            <div className="Menu flex md:justify-between justify-center flex-wrap lg:gap-x-36 md:gap-x-10 gap-x-6">
                <ul>
                    <h4 className="font-DM font-bold text-base text-[#262626] pb-[17px]">MENU</h4>
                    <li>
                        <Link to="/" className="font-DM font-normal text-sm pb-[6px] text-[#6D6D6D]">Home</Link>
                    </li>
                    <li>
                        <Link to="/" className="font-DM font-normal text-sm pb-[6px] text-[#6D6D6D]">Shop</Link>
                    </li>
                    <li>
                        <Link to="/" className="font-DM font-normal text-sm pb-[6px] text-[#6D6D6D]">About</Link>
                    </li>
                    <li>
                        <Link to="/" className="font-DM font-normal text-sm pb-[6px] text-[#6D6D6D]">Contact</Link>
                    </li>
                    <li>
                        <Link to="/" className="font-DM font-normal text-sm pb-[6px] text-[#6D6D6D]">Journal</Link>
                    </li>
                </ul>
                <ul>
                    <h4 className="font-DM font-bold text-base text-[#262626] pb-[17px]">SHOP</h4>
                    <li>
                        <Link to="/" className="font-DM font-normal text-sm pb-[6px] text-[#6D6D6D]">Category 1</Link>
                    </li>
                    <li>
                        <Link to="/" className="font-DM font-normal text-sm pb-[6px] text-[#6D6D6D]">Category 2</Link>
                    </li>
                    <li>
                        <Link to="/" className="font-DM font-normal text-sm pb-[6px] text-[#6D6D6D]">Category 3</Link>
                    </li>
                    <li>
                        <Link to="/" className="font-DM font-normal text-sm pb-[6px] text-[#6D6D6D]">Category 4</Link>
                    </li>
                    <li>
                        <Link to="/" className="font-DM font-normal text-sm pb-[6px] text-[#6D6D6D]">Category 5</Link>
                    </li>
                </ul>
                <ul>
                    <h4 className="font-DM font-bold text-base text-[#262626] pb-[17px]">HELP</h4>
                    <li>
                        <Link to="/" className="font-DM font-normal text-sm pb-[6px] text-[#6D6D6D]">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link to="/" className="font-DM font-normal text-sm pb-[6px] text-[#6D6D6D]">Terms & Conditions</Link>
                    </li>
                    <li>
                        <Link to="/" className="font-DM font-normal text-sm pb-[6px] text-[#6D6D6D]">Special E-shop</Link>
                    </li>
                    <li>
                        <Link to="/" className="font-DM font-normal text-sm pb-[6px] text-[#6D6D6D]">Shipping</Link>
                    </li>
                    <li>
                        <Link to="/" className="font-DM font-normal text-sm pb-[6px] text-[#6D6D6D]">Secure Payments</Link>
                    </li>
                </ul>
                <ul className="flex flex-col lg:pt-0 pt-5 md:mx-0 mx-auto">
                    <Link to="tel: (052) 611-5711">
                     <h4 className="font-DM font-bold md:ml-0 ml-20 text-base text-[#262626]">(052) 611-5711</h4>
                    </Link>
                    <Link to="mailto: company@domain.com">
                     <h4 className="font-DM font-bold md:ml-0 ml-[40px] text-base text-[#262626] pb-[6] lg:pb-[15px]">company@domain.com</h4>
                    </Link>
                    <li>
                        <Link to="/" className="font-DM md:ml-0 ml-1 font-normal text-sm pb-[6px] text-[#6D6D6D]">575 Crescent Ave. Quakertown, PA 18951</Link>
                    </li>
                </ul>
            </div>
            <div className="Icon flex gap-x-6 md:ml-0 ml-5 mt-16">
              <FaFacebookF />
              <FaLinkedinIn />
              <FaInstagram />
               <Images className="md:hidden block ml-20 pb-[15px]" href="/" src="./src/assets/FooterLogo.png" alt="Footer_Logo.png"/>
            </div>
        </div>
        <div className="right flex flex-col justify-between">
            <Images className="hidden md:block" href="/" src="./src/assets/FooterLogo.png" alt="Footer_Logo.png"/>
            <p className="text-[#6D6D6D] md:text-sm md:mr-36 text-xs text-center font-normal font-DM">2024 Orebi Minimal eCommerce Figma Template by Arabi</p>
        </div>
      </Container>
    </div>
  )
}

export default Footer
