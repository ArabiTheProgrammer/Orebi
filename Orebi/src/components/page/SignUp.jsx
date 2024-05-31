import React, { useState } from 'react'
import Container from '../layer/Container'
import Breadcrumb from '../layer/Breadcrumb'
import Title from '../layer/Title'
import Input from '../layer/Input'
import Button from '../layer/Button'
const Signup = () => {
    
    let [name, setName] = useState("")
    let [nameerr, setNameerr] = useState("")

    let [email, setEmail] = useState("")
    let [emailerr, setEmailerr] = useState("")

    let [password, setPassword] = useState("")
    let [passworderr, setpassworderr] = useState("")

    let [repeatPassword, setRepeatPassword] = useState("")
    let [repeatPasswordErr, setRepeatPasswordErr] = useState("")

    return (
        <div>
        <Container className="font-DM px-3 lg:px-0">
            <Breadcrumb className="mt-[124px] mb-[127px]" text="Sign up"/>
                <div className='border-b border-[#F0F0F0]'> 
                    <p className='lg:w-[644px] text-[#767676] lg:text-base text-sm font-normal lg:leading-7 lg:pb-16 pb-8'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.
                    </p>
                </div>
            <Title className="text-[#262626] lg:text-[39px] text-base fon font-bold lg:mt-[57px] mt-10 lg:mb-[42px] mb-6" text="Your Personal Details"/>
            <div className='flex flex-wrap lg:gap-y-6 lg: gap-y-3 lg:gap-x-10 gap-x-5'>
                <Input type="text" text="First Name" placeholder="First Name " />
                <Input type="text" text="Last Name" placeholder="Last Name " /> 
                <Input type="text" text="Email address" placeholder="company@domain.com" /> 
                <Input type="text" text="Telephone" placeholder="Your phone number " />            
            </div>
            <Title className="text-[#262626] lg:text-[39px] text-base fon font-bold lg:mt-[57px] mt-10 lg:mb-[42px] mb-6" text="New Customer"/>
            <div className='flex flex-wrap lg:gap-y-6 lg: gap-y-3 lg:gap-x-10 gap-x-5'>                          
                <Input type="text" text="Address 1" placeholder="4279 Zboncak Port Suite 6212" />             
                <Input type="text" text="Address 2" placeholder="_" />
                <Input type="text" text="City" placeholder="Your city" />
                <Input type="text" text="Post Code" placeholder="05228" /> 
                <Input type="select" text="Division" placeholder="Please select" /> 
                <Input type="select" text="District" placeholder="Please select" /> 
            </div> 
            <div className='border-b border-[#F0F0F0]'> 
                <Title className="text-[#262626] lg:text-[39px] text-base fon font-bold lg:mt-[57px] mt-10 lg:mb-[42px] mb-6" text="Your Personal Details"/>
            <div className='flex lg:gap-x-10 gap-x-5 lg:pb-16 pb-8'>
               <div className='w-[508px] h-[68px]'>
                <h3 className='lg:text-base text-sm font-bold leading-6 '>Password</h3>
                <input type="password" placeholder='password' className='w-full lg:pt-[10px] lg:pb-[17px] py-1 outline-none border-b border-[#F0F0F0] text-[#767676] lg:text-sm text-xs' />
              </div>
              <div className='w-[508px] h-[68px]'>
                <h3 className='lg:text-base text-sm font-bold leading-6 '>Repeat Password</h3>
                <input type="password" placeholder='Repeat Password' className='w-full lg:pt-[10px] lg:pb-[17px] py-1 outline-none border-b border-[#F0F0F0] text-[#767676] lg:text-sm text-xs ' />
              </div>
             </div>
            </div>
            <div className='text-[#767676] text-base font-normal flex flex-col gap-y-6' >
                <p className='flex items-center gap-x-4 lg:mt-16 mt-4'><span><input type="checkbox" /></span>I have read and agree to the Privacy Policy</p>
                <p className='flex items-center'>Subscribe Newsletter 
                <span className='pl-8'><input type="checkbox" /></span>
                <span className='pl-4'>Yes</span>
                <span className='pl-10'><input type="checkbox" /></span>
                <span className='pl-4'>No</span>
                </p>
                <Button className="lg:py-4 py-2 lg:pl-[77px] pl-[37px] lg:pr-[83px] pr-[41px] w-[200px]" text="Continue"/>   
            </div>
        </Container>
    </div>
    )
}

export default Signup
