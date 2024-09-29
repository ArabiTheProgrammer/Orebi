import React, { useState } from 'react'
import Container from '../layer/Container'
import Breadcrumb from '../layer/Breadcrumb'
import { Link } from 'react-router-dom'
import { FaMinus, FaPlus } from 'react-icons/fa'

const Contact = () => {

  let [ show, setShow ] = useState(false)

  let [ show2, setShow2 ] = useState(false)

  let [ show3, setShow3 ] = useState(false)

  return (
    <div>
      <Container>
        <div className="Breadcrumb lg:mt-[124px] mt-[80px] lg:ml-[0] ml-[25px]">
          <Breadcrumb text="Contact"/>
        </div>
        <div className="Form mt-[125px] lg:ml-[0] ml-[25px]">        
          <h1 className="font-DM font-bold text-[39px] text-[#262626]">Fill up a Form</h1>
          <div className="inputfield1 mt-[42px]">
            <p className="text-base text-[#262626] font-bold">Name</p>
            <input className="text-sm lg:w-[779px] sm:w-[500px] outline-none border-b border-[#F0F0F0] pb-[16.5px] mt-[10px]" type="text" placeholder='Your name here'/>
          </div>
          <div className="inputfield2 mt-[23px]">
            <p className="text-base text-[#262626] font-bold">Email</p>
            <input className="text-sm lg:w-[779px] sm:w-[500px] outline-none border-b border-[#F0F0F0] pb-[16.5px] mt-[10px]" type="email" placeholder='Your email here'/>
          </div>
          <div className="inputfield3 mt-[23px]">
            <p className="text-base text-[#262626] font-bold">Message</p>
            <textarea name="Message"className="text-sm lg:w-[779px] sm:w-[500px] outline-none border-b border-[#F0F0F0] pb-[87px] mt-[10px]" placeholder='Your message here' id=""></textarea>
          </div>
          <div className="btn mt-[30px]">
            <form action="">
            <button type='submit' className="py-[16px] px-[85px] font-bold text-sm text-[#FFF] bg-[#262626]">Post</button>
            </form>
          </div>
          </div>
          <div className="map lg:mt-[140px] mt-10 relative lg:pb-0 pb-0">
          <iframe className="lg:w-[1600px] lg:h-[572px] lg:ml-[0] ml-[25px] md:w-[700px] md:h-[450px] sm:h-[400px] sm:w-[650px] w-[350px] h-[350px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14610.279685738584!2d90.4031032!3d23.72704775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2sbd!4v1714738165096!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          
          <div className='lg:w-[452px] w-[200px] top-[80px] left-[30px] sm:w-[300px] sm:top-[100px] sm:left-[50px] z-50 absolute lg:top-20  lg:left-20 translate-y-5 bg-[#FFFFFF] px-5 '>
          <div className='overflow-hidden relative border-b w-full border-[#F0F0F0]' onClick={()=> setShow(!show)}>
                <h4 className='text-base font-bold leading-6 lg:py-[30px] py-3' >Germany Office <span><FaPlus className={`absolute transition-all duration-500 translate-y-[-100%] right-0 ${show ?"opacity-0 invisible":"opacity-100 visible rotate-90"}`}/>
                       <FaMinus className={`absolute translate-y-[-100%] transition-all duration-500 right-0 ${show ?"opacity-100 visible":"opacity-0 invisible"}`}/></span></h4>

                  <ul className={`text-[#767676] font-DM flex flex-col gap-y-3 transition-all duration-300 ${show ?"static":"absolute translate-x-[-100%] invisible overflow-hidden"}`}>
                    <li>
                      <Link className='text-base font-normal leading-7 ' >575 Crescent Ave. Quakertown, PA 18951</Link>
                    </li>
                    <li>
                      <Link className='font-DM text-base leading-7 font-bold ' to='tel:+432 533 12 523'>+432 533 12 523</Link>
                    </li>
                    <li>
                      <Link className='font-DM text-base leading-7 font-bold' to='mailto:info@domain.com'>info@domain.com</Link>
                    </li>
                    <li>
                      <Link className='text-base font-normal leading-7'>Mon - Fri: 9am - 6pm</Link>
                    </li>
                  </ul>
              </div>

                <div className='overflow-hidden relative border-b w-full border-[#F0F0F0]' onClick={()=> setShow2(!show2)}>
                <h4 className='text-base font-bold leading-6 lg:py-[30px] py-3' >Slovkia Office <span><FaPlus className={`absolute transition-all duration-500 translate-y-[-100%] right-0 ${show2 ?"opacity-0 invisible":"opacity-100 visible rotate-90"}`}/>
                       <FaMinus className={`absolute translate-y-[-100%] transition-all duration-500 right-0 ${show2 ?"opacity-100 visible":"opacity-0 invisible"}`}/></span></h4>

                  <ul className={`text-[#767676] font-DM flex flex-col gap-y-3 transition-all duration-300 ${show2 ?"static":"absolute translate-x-[-100%] invisible overflow-hidden"}`}>
                    <li>
                      <Link className='text-base font-normal leading-7 ' >575 Crescent Ave. Quakertown, PA 18951</Link>
                    </li>
                    <li>
                      <Link className='font-DM text-base leading-7 font-bold ' to='tel:+432 533 12 523'>+432 533 12 523</Link>
                    </li>
                    <li>
                      <Link className='font-DM text-base leading-7 font-bold' to='mailto:info@domain.com'>info@domain.com</Link>
                    </li>
                    <li>
                      <Link className='text-base font-normal leading-7'>Mon - Fri: 9am - 6pm</Link>
                    </li>
                  </ul>
              </div>

              <div className='overflow-hidden relative border-b w-full border-[#F0F0F0]' onClick={()=> setShow3(!show3)}>
                <h4 className='text-base font-bold leading-6 py-3 flex justify-between items-center lg:py-[30px]' >Lithuania Office <span><FaPlus className={`absolute transition-all duration-500 translate-y-[-100%] right-0 ${show3 ?"opacity-0 invisible":"opacity-100 visible rotate-90"}`}/>
                       <FaMinus className={`absolute translate-y-[-100%] transition-all duration-500 right-0 ${show3 ?"opacity-100 visible":"opacity-0 invisible"}`}/></span></h4>

                  <ul className={`text-[#767676] font-DM flex flex-col gap-y-3 transition-all duration-300 ${show3 ?"static":"absolute translate-x-[-100%] invisible overflow-hidden"}`}>
                    <li>
                      <Link className='text-base font-normal leading-7 ' >575 Crescent Ave. Quakertown, PA 18951</Link>
                    </li>
                    <li>
                      <Link className='font-DM text-base leading-7 font-bold ' to='tel:+432 533 12 523'>+432 533 12 523</Link>
                    </li>
                    <li>
                      <Link className='font-DM text-base leading-7 font-bold' to='mailto:info@domain.com'>info@domain.com</Link>
                    </li>
                    <li>
                      <Link className='text-base font-normal leading-7'>Mon - Fri: 9am - 6pm</Link>
                    </li>
                  </ul>
              </div>
              </div>
              
          </div>
          
      </Container>
    </div>
  )
}

export default Contact
