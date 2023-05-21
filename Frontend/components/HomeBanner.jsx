import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from 'next/image';
import slide from '../public/assets/slide-1.png'
import slide2 from '../public/assets/slide-2.png'
import slide3 from '../public/assets/slide-3.png'

function HomeBanner() {
  return (
    <div className="relative text-white text-[20px]
     w-full max-w-[1360px] mx-auto">
    {/*copy all from React-Responsive */}
    <Carousel  autoPlay={true}
            infiniteLoop={true} 
            showStatus={false}>
        <div>
            <img src={slide} className='rounded-[2rem]' alt='none'/>
            <div className=" px-[15px] md:px-[20px] lg:px-[40px]
             py-[10px] md:py-[18px] lg:py-[25px]
              bg-white absolute bottom-[125px] md:bottom-[50px] 
              lg:bottom-[75px] right-9 text-black/[0.9] 
              text-[15px] md:text-[20px] lg:text-[30px] rounded-[1rem]
              font-medium cursor-pointer hover:opacity-80 
            ">Shop Now</div>
        </div>
        <div>
            <img src={slide2} className='rounded-[2rem]' alt='none'/>
            <div className=" px-[15px] md:px-[20px] lg:px-[40px]
             py-[10px] md:py-[18px] lg:py-[25px]
              bg-white absolute bottom-[125px] md:bottom-[50px] 
              lg:bottom-[75px] right-9 text-black/[0.9] 
              text-[15px] md:text-[20px] lg:text-[30px] rounded-[1rem]
              font-medium cursor-pointer hover:opacity-80
            ">Shop Now</div>
        </div>
        <div>
            <img src={slide3} className='rounded-[2rem]' alt='none'/>
            <div className=" px-[15px] md:px-[20px] lg:px-[40px]
             py-[10px] md:py-[18px] lg:py-[25px]
              bg-white absolute bottom-[125px] md:bottom-[50px] 
              lg:bottom-[75px] right-9 text-black/[0.9] 
              text-[15px] md:text-[20px] lg:text-[30px] rounded-[1rem]
              font-medium cursor-pointer hover:opacity-80
            ">Shop Now</div>
        </div>
        </Carousel>   
    </div>
  )
}

export default HomeBanner
