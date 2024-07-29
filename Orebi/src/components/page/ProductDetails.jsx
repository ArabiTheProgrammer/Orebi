import React, { useEffect, useRef, useState } from 'react'
import Container from '../layer/Container'
import Breadcrumb from '../layer/Breadcrumb'
import Title from '../layer/Title'
import Input from '../layer/Input'
import {FaStar, FaMinus, FaPlus } from 'react-icons/fa'
import { PiPlusThin } from "react-icons/pi";
import { PiMinusThin } from "react-icons/pi";
import { GoTriangleDown } from "react-icons/go";

import Images from '../layer/Images'
import Button from '../layer/Button'
import s1 from '../../assets/s1.svg'
import s2 from '../../assets/s2.svg'
import s3 from '../../assets/s3.svg'
import s4 from '../../assets/s4.svg'
import s5 from '../../assets/s5.svg'
import Slider from 'react-slick'


import item01 from "../../assets/pic1.jpg";
import item02 from "../../assets/pic2.jpg";
import item03 from "../../assets/pic3.jpg";
import item04 from "../../assets/pic4.jpg";


const ProductDetails = () => {

  let [show, setShow] = useState (false)
  let [show2, setShow2] = useState (false)
  let [show3, setShow3] = useState (false)
  let [show4, setShow4] = useState (false)

  let [isActive, setIsActive] = useState(false);

  let toggleActive = () => {
    setIsActive(!isActive);
  };

  let [isActive2, setIsActive2] = useState (false);

  let toggleActive2 = ()=> {
    setIsActive2 (!isActive2)
  }

  let [number, setNumber] = useState(1)

  let [desc, setDesc] = useState(false);

  let [rev, setRev] = useState(false);

  let descRef = useRef()

  let revRef = useRef()

  useEffect(() =>{

    document.body.addEventListener("click", (element)=>{

      if(descRef.current.contains(element.target)){
        setDesc(true)
      }else{
        setDesc(false)
      }

      if(revRef.current.contains(element.target)){
        setRev(true)
      }else{
        setRev(false)
      }

        })
},[])



  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
        <div>
            <ul className='flex gap-x-5 mt-5'> {dots} </ul>
        </div>
    ),
    customPaging: i => (
        <div
            className="lg:w-[120px] w-10 lg:h-[120px] h-10 bg-cover cursor-pointer"
            style={{ backgroundImage: `url(${[item01, item02, item03, item04][i]})` }}
        >
        </div>
    )
};


  return (
    <div>
        <Container className={`px-3 lg:px-0`}>
            <Breadcrumb className="lg:mt-[124px]" text="ProductDetails"/>
            <div className="flex justify-between">
            <div className='lg:w-[700px] w-[320px] lg:h-[700px] h-[320px] lg:mt-32 mt-8'>
                    <Slider  {...settings}>
                        <div className='lg:w-[700px] w-[320px] lg:h-[500px] h-[220px]'>
                            <Images className='lg:w-[700px] w-[320px] lg:h-[500px] h-[220px] object-cover' src={item01} alt="item01" />
                        </div>                      
                        <div className='lg:w-[700px] w-[320px] lg:h-[500px] h-[220px]'>
                            <Images className='lg:w-[700px] w-[320px] lg:h-[500px] h-[220px] object-cover' src={item02} alt="item01" />
                        </div>                        
                        <div className='lg:w-[700px] w-[320px] lg:h-[500px] h-[220px]'>
                            <Images className='lg:w-[700px] w-[320px] lg:h-[500px] h-[220px] object-cover' src={item03} alt="item01" />
                        </div>                       
                        <div className='lg:w-[700px] w-[320px] lg:h-[500px] h-[220px]'>
                            <Images className='lg:w-[700px] w-[320px] lg:h-[500px] h-[220px] object-cover' src={item04} alt="item01" />
                        </div>                        
                    </Slider>
            </div>
            <div className='lg:w-[782px] lg:mt-32'>
                <Title text="Product"/>
                <div className="review mt-[18px] flex gap-x-[25px]">
                  <div className="icon text-[#FFD881] w-[70px] h-3 flex">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  </div>
                    <p className="text-sm font-normal text-[#767676]">1 Review</p>
                </div>
                <div className='flex items-center my-6 gap-x-6'>
                  <p className='line-through lg:text-base text-sm text-[#767676] font-normal'>$88.00</p>
                  <p className='text-[#262626] font-bold lg:text-xl text-base'>$44.00</p>
                </div>
                <p className='border-b border-[#F0F0F0] lg:mb-7 mb-3 w-[320px] lg:w-full'></p>
                <div className='flex gap-x-14 items-center'>
                  <p className='lg:text-base text-xs font-bold lg:leading-6 leading-4'>COLOR:</p>
                  <div className='flex items-center gap-x-4'>
                    <Images src={s1}/>
                    <Images src={s2}/>
                    <Images src={s3}/>
                    <Images src={s4}/>
                    <Images src={s5}/>
                  </div>
                </div>
                <div className='mt-8'>
                <label className='font-DM font-bold lg:text-base text-sm leading-7 text-[#262626] lg:mr-[76px]' >
                <span className="mr-0 lg:text-base text-xs font-bold lg:leading-6 leading-4 ">SIZE:</span>
                </label>
                <select className='lg:w-[139px] lg:h-9 py-1 lg:px-5 px-1 lg:text-base text-sm leading-7 outline-none border border-[#F0F0F0] bg-transparent text-[#767676] cursor-pointer'>
                <option className='p-7'value="S">
                S</option>
                <option className='p-7'value="M">
                M</option>
                <option className='p-7'value="L">
                L</option>
                <option className='p-7'value="XL">
                XL</option>
                </select>
                </div>          
                <p className='flex  items-center gap-x-8   py-[30px] border-b border-[#F0F0F0] w-[320px] lg:w-full lg:text-base text-xs font-bold lg:leading-6 leading-4'>QUANTITY:

                  <div className='flex w-[139px] h-[39px] text-[#767676] items-center border cursor-pointer'>
                  <div
                     onClick={()=> number<=1 ? setNumber(1):setNumber(--number)} className='lg:w-14 lg:h-8 w-8 h-6 flex items-center justify-center'>
                      <PiMinusThin className="!text-[#767676]" />
                    </div>
                    <p className='lg:w-14 lg:h-8 w-8 h-6 flex items-center justify-center'>{number}</p>
                    <div 
                    onClick={()=> setNumber(++number)} className='lg:w-14 lg:h-8 w-8 h-6 flex items-center justify-center'><PiPlusThin className="!text-[#767676]" /></div>              
                  </div>
                </p>                 
                <div className='flex items-center gap-x-7 border-b border-[#F0F0F0] w-[320px] lg:w-full'>
                  <p className='lg:text-base text-xs font-bold lg:leading-6 leading-4 my-[30px]'>STATUS:</p>             
                  <p className="text-sm font-normal text-[#767676]">In stock</p>
                </div>
                <div className="mt-[15px] border-b border-[#F0F0F0]">                  
                  <div onClick={toggleActive} className={` flex ${isActive ? 'active !text-[#262626] font-bold' : ''}`}>
                 <h5 
                 onClick={ ()=> setDesc (!desc)} className={`text-xl relative leading-7 cursor-pointer  transition-all duration-300 ${desc ?"mb-[0]":"mb-[15px]"}`}>Description <GoTriangleDown className={`absolute transition-all duration-300 right-[-40%] w-[20px] h-[20px] top-[25%] ${desc ?"rotate-180":"rotate-0"}`}/> </h5>                           
                   </div> 
                   <p className={` text-[#262626] mb-[15px] max-w-[600px] w-[320px] lg:w-full lg:mt-15 mt-5 ${desc? "opacity-100 visible z-10" : " opacity-0 hidden"}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia eum exercitationem assumenda odit. Ut minima saepe unde aperiam eveniet voluptatibus enim perferendis temporibus, illo libero neque quis velit atque itaque quia molestias fuga cupiditate expedita ipsum, vitae alias explicabo, odio officiis.</p>
                  </div>
                <div className='mt-8 flex gap-x-5 items-center border-b border-[#F0F0F0] pb-[30px] w-[320px] lg:w-full'>
                  <Button className="lg:py-4 py-2 lg:w-[200px] w-[130px] lg:text-base text-[10px] " text="Add to Wish List"/>
                  <Button to={'/cart'} className="lg:py-4 py-2 lg:w-[200px] w-[130px] lg:text-base text-[10px] " text="Add to Cart"/>
                </div>
                <div onClick={()=> setShow3 (!show3)} className='flex justify-between items-center relative cursor-pointer w-[320px] lg:w-full'>
                <p className='lg:text-base text-xs font-bold lg:leading-6 leading-4 lg:py-[30px] py-4 border-b border-[#F0F0F0] w-[320px] lg:w-full'>FEATURES  & DETAILS</p>
                <FaPlus className={`absolute top-1/2 transition-all duration-500 translate-y-[-50%] right-0 ${show3? "opacity-0 invisible":"opacity-100 visible rotate-90"}`}/> <FaMinus className={`absolute top-1/2 translate-y-[-50%] right-0 ${show3? "opacity-100 visible":"opacity-0 invisible"}`}/>
                </div>
                <p className={`text-sm font-normal text-[#767676] mt-5 transition-all duration-300 border-b border-[#F0F0F0] pb-7 w-[320px] lg:w-full ${show3? "static": "absolute translate-x-[-100%] invisible"}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div onClick={()=> setShow4 (!show4)} className='flex w-[320px] lg:w-full justify-between items-center cursor-pointer relative'>
                <p className='lg:text-base text-xs font-bold lg:leading-6 leading-4 lg:py-[30px] py-4 border-b border-[#F0F0F0] w-[320px] lg:w-full'>SHIPPING & RETURNS</p>
                <FaPlus className={`absolute top-1/2 transition-all duration-500 translate-y-[-50%] right-0 ${show4? "opacity-0 invisible":"opacity-100 visible rotate-90"}`}/> <FaMinus className={`absolute top-1/2 translate-y-[-50%] right-0 ${show4? "opacity-100 visible":"opacity-0 invisible"}`}/>
                </div>
                <p className={`text-sm font-normal text-[#767676] mt-5 transition-all duration-300 border-b border-[#F0F0F0] pb-7 w-[320px] lg:w-full ${show4? "static": "absolute translate-x-[-100%] invisible"}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            </div>
            <div className='lg:mt-[123px] mt-10'>
              <div className='flex  gap-x-16 relative'>
              <div onClick={toggleActive2} className={` ${isActive2 ? 'active !text-[#262626] font-bold' : ''}`}>
                  <h5 
                    onClick={()=> setRev (!rev)} 
                    className={`text-xl  leading-7 relative cursor-pointer  transition-all duration-300 `}>Reviews (1) <GoTriangleDown className={`absolute transition-all duration-300 right-[-40%] w-[20px] h-[20px] top-[25%] ${rev ?"rotate-180":"rotate-0"}`}/></h5>
                  </div>
              </div>       
              {
                rev && (
                  <div className=''>
                  <p className='text-sm text-[#767676] leading-8 mt-[42px] border-b border-[#F0F0F0] pb-4'>1 review for Product</p>
                  <div className='flex items-center gap-x-9 mt-8'>
                    <p className='text-[#262626] text-base leading-8'>John Ford</p>
                    <div className="icon text-[#FFD881] w-[70px] h-3 flex">       
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                   </div>         
                  </div>                 
                  <div className='max-w-[780px] lg:mt-14 mt-8 flex flex-col lg:gap-y-6 gap-y-3'>
                    <Title className="!text-xl lg:mb-12" text="Add a Review"/>
                    <Input className="!w-full" text="Name" type="text" placeholder="Your name here"/>
                    <Input className="!w-full" text="Email" type="text" placeholder="Your email here"/>
                    <div>
                      <h3 className='text-base font-bold leading-6 '>Review</h3>
                      <input type="text" placeholder='Your review here' className='w-full lg:pt-[10px] lg:pb-[87px] pb-2 py-1 outline-none border-b border-[#F0F0F0]' />
                  </div>
                    <Button className="lg:w-[200px] w-[120px] lg:py-4 py-2" text="Post"/>
                  </div>
                </div>
                )
              }
            </div>
        </Container>
    </div>
  )
}

export default ProductDetails