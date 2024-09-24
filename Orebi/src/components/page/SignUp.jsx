import React, { useState } from 'react'
import Container from '../layer/Container'
import Breadcrumb from '../layer/Breadcrumb'
import Title from '../layer/Title'
import Input from '../layer/Input'
import Button from '../layer/Button'
import FormError from '../layer/FormError'
import Inputforpassword from '../layer/Inputforpassword'
import { Blocks } from 'react-loader-spinner'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from 'react-router-dom'

const Signup = () => {

    let [checkbox, setcheckbox] = useState(false)
    let [checkbox2, setcheckbox2] = useState(false)
    
    let [firstName, setFirstName] = useState('')
    let [firstNameerr,setFirstNameerr] = useState('')
    let changefirstName = (e)=>{
        setFirstName(e.target.value);
        setFirstNameerr("")
    }

    let [lastName,setLastName] = useState('')
    let [lastNameerr,setLastNameerr] = useState('')
    let changelastName = (e)=>{
        setLastName(e.target.value);
        setLastNameerr("")
    }

    let [email, setEmail] = useState('')
    let [emailerr, setEmailerr] = useState('')
    let changeEmail = (e)=>{
        setEmail(e.target.value);
        setEmailerr("")
    }

    let [tel,setTel] = useState('')
    let [telerr,setTelerr] = useState('')
    let changeTel = (e)=>{
        setTel(e.target.value);
        setTelerr("")
    }

    let [address,setAddress] = useState('')
    let [addresserr,setAddresserr] = useState('')
    let changeAddress = (e)=>{
        setAddress(e.target.value);
        setAddresserr("")
    }

    let [city,setCity] = useState('')
    let [cityerr,setCityerr] = useState('')
    let changeCity = (e)=>{
        setCity(e.target.value);
        setCityerr("")
    }

    let [postcode,setPostcode] = useState('')
    let [postcodeerr,setPostcodeerr] = useState('')
    let changePostcode = (e)=>{
        setPostcode(e.target.value);
        setPostcodeerr("")
    } 
    
    let [district,setDistrict] = useState('')
    let [districterr,setDistricterr] = useState('')
    let changeDistrict = (e)=>{
        setDistrict(e.target.value);
        setDistricterr("")
    }   
    
    let [division,setDivision] = useState('')
    let [divisionerr,setDivisionerr] = useState('')
    let changeDivision = (e)=>{
        setDivision(e.target.value);
        setDivisionerr("")
    }

    let [password,setPassword] = useState('')
    let [passworderr,setPassworderr] = useState('')
    let changePassword = (e)=>{
        setPassword(e.target.value);
        setPassworderr("")
    }

    let [spinner , setSpinner] = useState(true)
    
    let navigate = useNavigate()

    const auth = getAuth();
     
    let [repeatpassword,setRepeatpassword] = useState('')
    let [repeatpassworderr,setRepeatpassworderr] = useState('')
    let changeRepeatpassword = (e)=>{
        setRepeatpassword(e.target.value);
        setRepeatpassworderr("")
    }

    let submit = ()=>{
        
        if (!firstName) {
            setFirstNameerr("First Name is required")
        }

        if (!lastName) {
            setLastNameerr("Last Name is required")
        }

        if (!email) {
            setEmailerr("Email is required")
        }else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)){
            setEmailerr("You have input an invalid email address!")
        }

        if (!tel) {
            setTelerr("Telephone Number is required")
        }

        if (!address) {
            setAddresserr("Address is required")
        }

        if (!city) {
            setCityerr("City Name is required")
        }

        if (!postcode) {
            setPostcodeerr("Post code is required")
        }

        if (!division) {
            setDivisionerr("Division Name is required")
        }

        if (!district) {
            setDistricterr("District Name is required")
        }

        if (!password) {
            setPassworderr("Password is required")
        }else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(password)) {
            setPassworderr("1 uppercase, 1 number, 1 special character and more than 8 characters is required")
        }

        if (!repeatpassword) {
            setRepeatpassworderr("Input the password again")
        }

        
        // ===================================================================================================      


        if (firstName && email && password && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email))
       
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            setFirstName("")
            setSpinner(false)
            toast.success('Registration Successful');
            setTimeout(()=>{
                navigate("/login")
            }, 3000)

            console.log(user);
            
            // ...
        })
        .catch((error) => {
            if (error.code.includes("auth/email-already-in-use"))   
                setEmailerr("Email already in use")   
        });

    }


    return (
        <div>

            <ToastContainer  

            className="!text-white w-48 md:w-auto"

            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition= "Bounce"/>
            {/* Same as */}
            <ToastContainer />

        <Container>
            <Breadcrumb className="lg:mt-[124px] lg:mb-[127px] mt-[60px] mb-[60px]" text="Sign up"/>
                <div className='border-b border-[#F0F0F0]'> 
                    <p className='lg:w-[644px] text-[#767676] lg:text-base text-sm font-normal lg:leading-7 lg:pb-16 pb-8'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.
                    </p>
                </div>
            <Title className="text-[#262626] lg:text-[39px] text-base fon font-bold lg:mt-[57px] mt-10 lg:mb-[42px] mb-6" text="Your Personal Details"/>
            <div className='flex flex-wrap lg:gap-y-6 lg: gap-y-3 lg:gap-x-10 gap-x-5'>
                <Input value={firstName} onChange={changefirstName} type="text" text="First Name" placeholder="First Name ">
                    {
                        firstNameerr &&
                        <FormError error={firstNameerr}/>   
                    }         
                </Input>
                <Input value={lastName} onChange={changelastName} type="text" text="Last Name" placeholder="Last Name ">
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
                <Input value={tel} onChange={changeTel} type="tel" text="Telephone" placeholder="Your number here">                
                    {
                        telerr &&
                        <FormError error={telerr}/>  
                    }          
                </Input>                              
            </div>
            <Title className="text-[#262626] lg:text-[39px] text-base fon font-bold lg:mt-[57px] mt-10 lg:mb-[42px] mb-6" text="New Customer"/>
            <div className='flex flex-wrap lg:gap-y-6 lg: gap-y-3 lg:gap-x-10 gap-x-5'>                          
                <Input value={address} onChange={changeAddress} type={"text"} text="Address 1" placeholder="4279 Zboncak Port Suite 6212">
                {
                    addresserr &&
                    <FormError error={addresserr}/>            
                }
                </Input>             
                <Input type="text" text="Address 2" placeholder="( Optional )">
                </Input>
                <Input value={city} onChange={changeCity} type="text" text="City" placeholder="Your city">
                    {
                        cityerr &&
                        <FormError error={cityerr}/> 
                    }           
                </Input>           
                <Input value={postcode} onChange={changePostcode} type="number" text="Post Code" placeholder="05228">
                    {
                        postcodeerr &&
                        <FormError error={postcodeerr}/>  
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
                  <Inputforpassword value={password} onchange={changePassword} label="Password" id="Password" placeholder="Password">
                      {
                        passworderr &&  
                        <FormError error={passworderr}/>   
                      }         
                    </Inputforpassword>
                    <Inputforpassword value={repeatpassword} onchange={changeRepeatpassword} label="Repeat Password" id="Repeat Password" placeholder="Repeat Password">
                      {
                          repeatpassworderr &&
                          <FormError error={repeatpassworderr}/>   
                      }         
                    </Inputforpassword>                                          
             </div>
            </div>
            <div className="px-3 lg:px-0">
            <div className='flex gap-x-[15px] lg:mt-[65px] mt-[35px]' >
            <div onClick={()=>{setcheckbox2(!checkbox2)}} className=' cursor-pointer relative w-4 h-4 border-2 border-[#767676]'>
                <div className={`w-2 h-2 bg-[#767676] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] ${checkbox2 ? "absolute":"hidden"}`}></div>
                </div>
                <p className='lg:text-sm sm:text-xs text-[10px] font-normal font-DM text-[#767676]'>I have read and agree to the Privacy Policy</p>
            </div>
            <div className='flex gap-x-[15px] lg:mb-[27px] md:mb-5 sm:mb-4 mb-3 lg:mt-[23px] mt-[10px]'>
                <p className='lg:text-sm sm:text-xs text-[10px] font-normal font-DM text-[#767676]'>Subscribe Newsletter</p>
                <div onClick={()=>{setcheckbox(!checkbox)}} className=' cursor-pointer relative w-4 h-4 border-2 border-[#767676]'>
                <div className={`w-2 h-2 bg-[#767676] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] ${checkbox ? "hidden":"absolute"}`}></div>
                </div>
                <label className='lg:text-sm sm:text-xs text-[10px] font-normal font-DM text-[#767676]' htmlFor="yes">Yes</label>
                <div onClick={()=>{setcheckbox(!checkbox)}} className=' cursor-pointer relative w-4 h-4 border-2 border-[#767676]'>
                <div className={`w-2 h-2 bg-[#767676] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] ${checkbox ? "absolute":"hidden"}`}></div>
                </div>
                <label className='lg:text-sm sm:text-xs text-[10px] font-normal font-DM text-[#767676]' htmlFor="no">No</label>
           </div>

           {
            spinner ?
            <Button onClick={submit}  text="Log in" className="w-[200px] py-3 lg:mb-[140px] md:mb-32 sm:mb-24 mb-20"/>         
            :<Blocks
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            visible={true}
            />
           }
           
                    
           </div>
         </Container>
    </div>
    )
}

export default Signup
