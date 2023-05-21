import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const ProductDetailsCarousel = ({ images }) => {
    return (
        <div className="text-white text-[20px] w-full 
        max-w-[95%] lg:max-w-[80%] mx-auto sticky top-[50px]">
            <Carousel
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                thumbWidth={80}
                className="productCarousel">
                
                <img src="https://images.pexels.com/photos/6568942/pexels-photo-6568942.jpeg?auto=compress&cs=tinysrgb&w=600" alt='none' />
                <img src="https://images.pexels.com/photos/7310213/pexels-photo-7310213.jpeg?auto=compress&cs=tinysrgb&w=600" alt='none'/>
                <img src="https://images.pexels.com/photos/7309472/pexels-photo-7309472.jpeg?auto=compress&cs=tinysrgb&w=600" alt='none'/>
                <img src="https://images.pexels.com/photos/8473523/pexels-photo-8473523.jpeg?auto=compress&cs=tinysrgb&w=600" alt='none'/>
                <img src="https://images.pexels.com/photos/6568944/pexels-photo-6568944.jpeg?auto=compress&cs=tinysrgb&w=600" alt='none'/>
                <img src="https://images.pexels.com/photos/4772940/pexels-photo-4772940.jpeg?auto=compress&cs=tinysrgb&w=600" alt='none'/> 
            </Carousel>
        </div>
    );
};

export default ProductDetailsCarousel;