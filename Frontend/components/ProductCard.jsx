import React from 'react'
import Image from "next/image";
import Link from "next/link";
import product from '../public/assets/product-1.webp'

function ProductCard() {
  return (
    <Link href={`/product/1`} className='transform overflow-hidden
    duration-200 hover:scale-110 cursor-pointer'>
      <img src={product} className='rounded-[2rem]' alt='none'/>
      <div className='p-4 text-purple-500 font-bold'>
        <h2 className=' text-[1.2rem]'>Product Name</h2>
        <div className='flex justify-between'>
            <p>$12</p>
            <p className="ml-auto text-base font-medium text-green-500">
            10%off</p>
            <p className="text-base  font-medium line-through">$20</p> 
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
