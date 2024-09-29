import React, { useState } from 'react'
import Container from '../layer/Container'
import Title from '../layer/Title'
import Button from '../layer/Button'
import Input from '../layer/Input'
import Breadcrumb from '../layer/Breadcrumb'
import Inputforpassword from '../layer/Inputforpassword'
import FormError from '../layer/FormError'
import { Blocks, ColorRing } from 'react-loader-spinner'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from 'react-router-dom'

const Login = () => {


  let [email, setEmail] = useState('')
  let [emailerr, setEmailerr] = useState('')
  let changeEmail = (e)=>{
      setEmail(e.target.value);
      setEmailerr("")
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

    let submit = ()=>{

    if (!email) {
        setEmailerr("Email is required")
    }else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)){
        setEmailerr("You have input an invalid email address!")
    }

    if (!password) {
        setPassworderr("Password is required")
    }else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(password)) {
        setPassworderr("Password is incorrect")
    }

    if (email && password  && /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/ && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/ ) {
      signInWithEmailAndPassword(auth, email , password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        if (user) {
          toast.success('Login Successful!')
          setSpinner(false)
          setTimeout(() => {
            navigate("/")
          }, 2000);
          setEmail("")
          setPassword("")
      }
        // ...
      })
      .catch((error) => {
          if (error.code.includes("auth/email-already-in-use")) {
              setEmailerr("Email Already In Use")
            }
            toast.error('Something Went Wrong!')
       })}

  }

  return (
    <div className='font-DM px-3 lg:px-0'>
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
            <Breadcrumb className="lg:mt-[124px] lg:mb-[127px] mt-[60px] mb-[60px]" text="Login"/>
            <div className='border-b border-[#F0F0F0]'> 
              <p className='lg:w-[644px] text-[#767676] lg:text-base text-sm font-normal lg:leading-7 lg:pb-16 pb-8'>
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.
              </p>
            </div>
            <Title className="text-[#262626] lg:text-[39px] text-base fon font-bold lg:mt-[57px] mt-10 lg:mb-[42px] mb-6" text="Returning Customer"/>
          <div className='flex flex-wrap lg:gap-x-10 gap-x-5'>

          <Input value={email} onChange={changeEmail} type="email" text="Email Address" placeholder="company@domain.com">
                    {
                        emailerr &&
                        <FormError className="lg:mt-[10px]" error={emailerr}/>   
                    }         
                </Input>            
           
           <div className="input lg:w-[508px] w-[250px] h-[68px]">
                  <h3 className="lg:text-base text-sm font-bold leading-6 ">Password</h3>
                  
                  <Inputforpassword classNameforplaceholder="placeholder:font-bold placeholder:text-[30px] placeholder:text-[#767676]" value={password} onchange={changePassword} placeholder=". . . . . . .">
                    {
                        passworderr &&
                        <FormError className="lg:mt-[10px]" error={passworderr}/>   
                    } 
                  </Inputforpassword>
                </div>
          </div>
              <div className="flex gap-x-3 mt-[50px]">
                 <h2 className="font-DM text-[20px] font-bold text-[#262626] transition-all duration-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-slate-400 relative after:w-full after:transition-all after:duration-300">Note:</h2>
                 <p className="text-[#767676] mt-[5px] font-semibold">
                   Please Put The Correct Password And Wait A Few Seconds If You Put The Wrong Password!
                 </p>
              </div>
                <div className='lg:mt-14 mt-3 border-b border-[#F0F0F0] lg:pb-[0px] pb-10'></div>       
          <div className='lg:mt-14 mt-3 border-b border-[#F0F0F0] lg:pb-[70px] pb-10'>
           {
             spinner ?            
             <Button onClick={submit} className="lg:py-4 py-2 lg:pl-[77px] pl-[37px] lg:pr-[83px] pr-[41px]" text="Log in"/>
            :<ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={['#262626']}
            />
           }
          </div>
      <div className='lg:pt-[58px]'>
            <Title className="text-[#262626] lg:text-[39px] text-base fon font-bold lg:mt-[57px] mt-10 lg:mb-[42px] mb-6" text="New Customer"/>
            <p className='lg:w-[644px] text-[#767676] lg:text-base text-sm font-normal lg:leading-7  pb-8 lg:pb-[51px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
            <Button to="/signup" className="lg:py-4 py-2 lg:pl-[77px] pl-[37px] lg:pr-[83px] pr-[41px]" text="Continue"/>
          </div>
        </Container>
    </div>
  )
}

export default Login