import React, { useState } from 'react'
import Container from '../layer/Container'
import Breadcrumb from '../layer/Breadcrumb'
import Title from '../layer/Title'
import Input from '../layer/Input'
import Button from '../layer/Button'
import FormError from '../layer/FormError'
const Signup = () => {
    
    let [firstName, setFirstName] = useState("")
    let [firstNameerr, setFirstNameerr] = useState("")
    
    let [lastName, setLastName] = useState("")
    let [lastNameerr, setLastNameerr] = useState("")

    let [address1, setAddress1] = useState("")
    let [address1err, setAddress1err] = useState("")

    let [address2, setAddress2] = useState("")
    let [address2err, setAddress2err] = useState("")

    let [city, setCity] = useState("")
    let [cityerr, setCityerr] = useState("")

    let [code, setCode] = useState("")
    let [codeerr, setCodeerr] = useState("")

    let [division, setDivision] = useState("")
    let [divisionerr, setDivisionerr] = useState("")

    let [district, setDistrict] = useState("")
    let [districterr, setDistricterr] = useState("")

    let changeFirstName=(e)=>{
        setFirstName(e.target.value)
        setFirstNameerr("")
    }

    let changeLastName=(e)=>{
        setLastName(e.target.value)
        setLastNameerr("")
    }

    let changeEmail=(e)=>{
        setEmail(e.target.value)
        setEmailerr("")
    }

    let changeTel=(e)=>{
        setTel;(e.target.value)
        setTelerr("")
    }

    let changeAddress1=(e)=>{
        setAddress1;(e.target.value)
        setAddress1err("")
    }

    let changeAddress2=(e)=>{
        setAddress2;(e.target.value)
        setAddress2err("")
    }

    let changeCity=(e)=>{
        setCity;(e.target.value)
        setCityerr("")
    }

    let changeCode=(e)=>{
        setCode;(e.target.value)
        setCodeerr("")
    }

    let changeDivision=(e)=>{
        setDivision;(e.target.value)
        setDivisionerr("")
    }

    let changeDistrict=(e)=>{
        setDistrict;(e.target.value)
        setDistricterr("")
    }

    let changePassword=(e)=>{
        setPassword;(e.target.value)
        setpassworderr("")
    }

    let changeRepeatPassword=(e)=>{
        setRepeatPassword;(e.target.value)
        setRepeatPasswordErr("")
    }

    let submit=()=>{
        if (!firstName) {
            setFirstNameerr("First Name is required")
        }

        if (!lastName) {         
            setLastNameerr("Last Name is required")
        }

        if (!tel) {
            setTelerr("Your phone number is required")
        }

        if (!email) {
            setEmailerr("Email is required")
        }

        if (!address1) {
            setAddress1err("Address 1 is required")
        }

        if (!address2) {
            setAddress2err("Address 2 is required")
        }

        if (!city) {
            setCityerr("Your city name is required")
        }

        if (!code) {
            setCodeerr("Your post code is required")
        }

        if (!division) {
            setDivisionerr("Your division is required")
        }

        if (!district) {
            setDistricterr("Your district is required")
        }
   
        if (!password) {
            setPassworderr("A password is required")
        }

        if (!repeatPassword) {
            setRepeatPasswordErr("Please repeat your password")
        }
    }

    let [email, setEmail] = useState("")
    let [emailerr, setEmailerr] = useState("")

    let [tel, setTel] = useState("")
    let [telerr, setTelerr] = useState("")

    let [password, setPassword] = useState("")
    let [passworderr, setPassworderr] = useState("")

    let [repeatPassword, setRepeatPassword] = useState("")
    let [repeatPasswordErr, setRepeatPasswordErr] = useState("")

    return (
        <div>
        <Container>
            <Breadcrumb className="lg:mt-[124px] lg:mb-[127px] mt-[60px] mb-[60px]" text="Sign up"/>
                <div className='border-b border-[#F0F0F0]'> 
                    <p className='lg:w-[644px] text-[#767676] lg:text-base text-sm font-normal lg:leading-7 lg:pb-16 pb-8'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.
                    </p>
                </div>
            <Title className="text-[#262626] lg:text-[39px] text-base fon font-bold lg:mt-[57px] mt-10 lg:mb-[42px] mb-6" text="Your Personal Details"/>
            <div className='flex flex-wrap lg:gap-y-6 lg: gap-y-3 lg:gap-x-10 gap-x-5'>
                <Input value={firstName} onChange={changeFirstName} type="text" text="First Name" placeholder="First Name ">
                {
                    firstNameerr && 
                    <FormError error={firstNameerr}/>            
                }
                </Input>
                <Input value={lastName} onChange={changeLastName} type="text" text="Last Name" placeholder="Last Name ">
                {
                    lastNameerr && 
                    <FormError error={lastNameerr}/>            
                }
                </Input>                              
                <Input value={email} onChange={changeEmail} type="email" text="Email Address" placeholder="company@domain.com">
                {
                    emailerr && 
                    <FormError error={emailerr}/>            
                }
                </Input>                              
                <Input value={tel} onChange={changeTel} type="number" text="Telephone" placeholder="Your number here">
                {
                    telerr && 
                    <FormError error={telerr}/>            
                }
                </Input>                              
            </div>
            <Title className="text-[#262626] lg:text-[39px] text-base fon font-bold lg:mt-[57px] mt-10 lg:mb-[42px] mb-6" text="New Customer"/>
            <div className='flex flex-wrap lg:gap-y-6 lg: gap-y-3 lg:gap-x-10 gap-x-5'>                          
                <Input value={address1} onChange={changeAddress1} type="text" text="Address 1" placeholder="4279 Zboncak Port Suite 6212">
                {
                    address1err && 
                    <FormError error={address1err}/>            
                }
                </Input>             
                <Input value={address2} onChange={changeAddress2} type="text" text="Address 2" placeholder="_">
                {
                    address2err && 
                    <FormError error={address2err}/>            
                }
                </Input>
                <Input value={city} onChange={changeCity} type="text" text="City" placeholder="Your city">
                {
                    cityerr && 
                    <FormError error={cityerr}/>            
                }
                </Input>           
                <Input value={code} onChange={changeCode} type="number" text="Post Code" placeholder="05228">
                {
                    codeerr && 
                    <FormError error={codeerr}/>            
                }
                </Input>                              
                <Input value={division} onChange={changeDivision} type="select" text="Division" placeholder="Please select">
                {
                    divisionerr && 
                    <FormError error={divisionerr}/>            
                }
                </Input> 
                <Input value={district} onChange={changeDistrict} type="select" text="District" placeholder="Please select">
                {
                    districterr && 
                    <FormError error={districterr}/>            
                }
                </Input>
            </div> 
            <div className='border-b border-[#F0F0F0]'> 
                <Title className="text-[#262626] lg:text-[39px] text-base fon font-bold lg:mt-[57px] mt-10 lg:mb-[42px] mb-6" text="Your Password"/>
            <div className='flex lg:gap-x-10 gap-x-5 lg:pb-16 pb-8'>
                <Input type="password" text="Your Password" placeholder="Password">
                {
                    passworderr && 
                    <FormError error={passworderr}/>            
                }
                </Input>                                           
                <Input type="password" text="Repeat Password" placeholder="Repeat Password">
                {
                    repeatPasswordErr && 
                    <FormError error={repeatPasswordErr}/>            
                }
                </Input>                                           
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
                <Button onClick={submit} className="lg:py-4 py-2 lg:pl-[77px] pl-[37px] lg:pr-[83px] pr-[41px] w-[200px]" text="Login"/>   
            </div>
        </Container>
    </div>
    )
}

export default Signup
