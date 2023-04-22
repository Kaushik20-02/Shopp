import React from 'react'
import ProductCard from '../../components/ProductCard'

function Category() {
  return (
    /*Slug:we can open page like "category/Sneakers"}*/
    <div className="w-full md:py-20 relative">
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
            <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                Shoes
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2
         lg:grid-cols-3 gap-5 my-14 px-5">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    </div>
  )
}

export default Category
