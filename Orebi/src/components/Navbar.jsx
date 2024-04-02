import React, { useEffect, useState } from 'react'
import { FaBars } from "react-icons/fa";
import Container from './layer/Container';
import Images from './layer/Images';
import List from './layer/List';

const Navbar = () => {

    let [show, setShow] = useState(false);

    useEffect(() =>{
        function size(){
            if (window.innerWidth < 1024 ) {
                setShow(false);
            }else{
                setShow(true);
            }
        }

        size();

        window.addEventListener("resize", size);
    },[])


    let fdr = ()=>{
        setShow(!show);
    };

  return (
    <nav className=" bg-white py-7">
      <Container className="flex items-center justify-between relative">
      <div className="logo">
            <Images href="" src="./src/assets/Logo.png" alt="OREBI.png" />
           </div>
           
           
                <div className={`menu transition-all duration-700 py-7 z-10 lg:py-0 px-4 lg:px-0 absolute left-0 top-full lg:static bg-slate-100 lg:bg-transparent w-full flex justify-center ${ show ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                <ul className="flex items-center justify-center flex-col lg:flex-row gap-y-2 gap-x-10">
                    <List className="after:!w-full" href="" text="Home" />
                    <List href="" text="Shop" />
                    <List href="" text="About" />
                    <List href="" text="Contact" />
                    <List href="" text="Journal" />
                </ul>
               </div>
            

                <FaBars onClick={fdr} className="cursor-pointer lg:hidden" />
      </Container>
    </nav>
  )
}

export default Navbar
