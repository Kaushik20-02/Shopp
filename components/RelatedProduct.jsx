import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from './ProductCard'

function RelatedProduct() {
    {/*copy from multi-carousel*/} 
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1023, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 767, min: 0 },
            items: 1,
        },
    }
  return (
    <div className="mt-[50px] md:mt-[100px] mb-[100px] md:mb-0">
    <div className="text-2xl font-bold mx-10 mb-5">Similar Products</div>
       {/*copy from multi-carousel thn pass the above
       'responsive' from const*/} 
    <Carousel responsive={responsive}
    containerClass="mx-[10px]"
    itemClass="px-[10px]">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
    </Carousel>
    </div>
  )
}

export default RelatedProduct
