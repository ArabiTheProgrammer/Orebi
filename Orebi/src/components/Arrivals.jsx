import React from 'react'
import Slider from "react-slick";
import Container from './layer/Container'
import ProductItems1 from './layer/products/ProductItem'
import ProductItems2 from './layer/products/ProductItems2'
import ProductItems3 from './layer/products/ProductItems3'
import ProductItems4 from './layer/products/ProductItems4'
import ProductItems5 from './layer/products/ProductItems5';
import ProductItem6 from './layer/products/ProductsItems6';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import ProductItem9 from './layer/products/ProductItems9';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="lg:w-[64px] w-[40px] lg:h-[64px] h-[40px] lg:left-9 left-[10px] rounded-full cursor-pointer !flex justify-center items-center absolute top-1/2 translate-y-[-100%] z-10 text-white"
      style={{ ...style, display: "block", background: "#c7c7c7" }}
      onClick={onClick}><FaLongArrowAltLeft /></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="lg:w-[64px] w-[40px] lg:h-[64px] h-[40px] lg:right-[3px] right-[10px] cursor-pointer rounded-full !flex justify-center items-center absolute top-1/2 translate-y-[-100%] text-white z-10"
      style={{ ...style, display: "block", background: "#c7c7c7" }}
      onClick={onClick}><FaLongArrowAltRight /></div>
  );
}

const Arrivals = () => {

  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <SampleNextArrow />,
    nextArrow: <SamplePrevArrow />,


    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (

    <div className="lg:pt-[128px] pt-[50px] lg:pb-[0px] pb-[50px]">
      <Container>
        <h2 className="font-bold font-DM text-[#262626] lg:text-[39px] text-[20px] ml-[25px] lg:ml-[20px] pb-[48px]">
            New Arrivals
        </h2>    
      </Container>

      <Container className="max-w-[1640px]">
         <Slider {...settings}>
          <div>
            <ProductItems2 className="lg:!ml-9" offer="10%"/>
          </div>
          <div>
            <ProductItems5 className="lg:!ml-9" offer="New"/>
          </div>
          <div>
            <ProductItems3 className="lg:!ml-9" offer="New"/>
          </div>
          <div>
            <ProductItems4 className="lg:!ml-9" offer="New"/>
          </div>
          <div>
            <ProductItems1 className="lg:!ml-9" offer="New"/>
          </div>
          <div>
            <ProductItem6 className="lg:!ml-9" offer="New"/>
          </div>
          <div>
            <ProductItem9 className="lg:!ml-9" offer="New"/>
          </div>
        </Slider>
      </Container>

    </div>
  )
}

export default Arrivals
