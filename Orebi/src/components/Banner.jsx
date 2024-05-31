import React, { useState } from 'react'
import Slider from "react-slick";
import Images from './layer/Images'
import { Link } from 'react-router-dom'

const Banner = () => {

  let [active, setActive] = useState(0)

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (prev, next)=>{
      setActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          left: "10%",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i == active
          ? {
            color: "#262626",
            borderRight: "2px #262626 solid",
            padding: "9px 10px 9px 0",
          }
          : {
            color: "transparent",
            borderRight: "2px white solid",
            padding: "9px 10px 9px 0",
          }
         }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
        }
      },
      {
        breakpoint: 600,
        settings: {
        }
      },
      {
        breakpoint: 480,
        settings: {
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                left: "50%",
                bottom: "20px",
                transform: "translate(-50%)",
              }}
            >
            <ul 

            style={{
                 margin: "0px", 
                 display: "flex",
            }}
            
            > {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
                className="text-xs"
              style={
                i == active
                ? {
                  color: "#262626",
                  borderBottom: "2px #262626 solid",
                  padding: "0px 5px 4px 5px",
                }
                : {
                  color: "transparent",
                  borderBottom: "2px white solid",
                  padding: "0px 5px 4px 5px",
                }
               }
            >
              0{i + 1}
            </div>
          ),
        }
      }
    ]
  };

  return (
    <>
      <Slider {...settings}>
      <div className="bg-slate-400 text-center">
        <Link>
          <Images className="!w-full" href="/" src="./src/assets/Banner.jpg" alt="Ads.jpg"/>
        </Link>
      </div>
      <div className="bg-slate-400 text-center">
        <Link>
          <Images className="!w-full" href="/" src="./src/assets/Banner.jpg" alt="Ads.jpg"/>
        </Link>
      </div>
      <div className="bg-slate-400 text-center">
        <Link>
          <Images className="!w-full" href="/" src="./src/assets/Banner.jpg" alt="Ads.jpg"/>
        </Link>
      </div>
    </Slider>
    </>
  )
}

export default Banner
