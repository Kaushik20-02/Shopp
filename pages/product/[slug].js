import React, { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import ProductDetails from "../../components/ProductDetails";
import RelatedProduct from "../../components/RelatedProduct";

function ProductDetail() {
  return (
    <div className="w-full h-full md:py-20">
      <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
        <div className=" md:my-[-2.5rem] lg:my-[-4.5rem] w-full md:w-auto flex-[1] max-w-[500px] lg:max-w-full mx-auto lg:mx-0 ">
          <ProductDetails />
        </div>
        <div className="flex-[1] py-3">
          <div className="text-[34px] font-semibold mb-2 leading-tight">
            Showwww
          </div>
          <div className="text-lg font-semibold mb-5">
            dasqfasfsaf
          </div>

          {/* PRODUCT PRICE */}
          <div className="flex items-center">
            <p className="mr-2 text-lg font-semibold">
              MRP : &#837
            </p>
          </div>
          <div className="text-md font-medium text-black/[0.5]">
            incl. of taxes
          </div>
          <div className="text-md font-medium text-black/[0.5] mb-20">
            {`(Also includes all applicable duties)`}
          </div>

          {/* PRODUCT SIZE RANGE START */}
          <div className="mb-10">
            {/* HEADING START */}
            <div className="flex justify-between mb-2">
              <div className="text-md font-semibold">
                Select Size
              </div>
              <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                Select Guide
              </div>
            </div>

            {/* SIZE START */}
            <div id="sizesGrid" className="grid grid-cols-3 gap-3 mt-5">
              <div className="border bg-slate-200 rounded-xl text-center py-3 px-2 
            font-medium hover:border-purple-500 cursor-pointer">uk</div>
              <div className="border bg-slate-200 rounded-xl text-center py-3 px-2 
            font-medium hover:border-purple-500 cursor-pointer">uk</div>
              <div className="border bg-slate-200 rounded-xl text-center py-3 px-2 
            font-medium hover:border-purple-500 cursor-pointer">uk</div>
              <div className="border rounded-xl text-center py-3 px-2 
            font-medium cursor-not-allowed">uk</div>
              <div className="border rounded-xl text-center py-3 px-2 
            font-medium cursor-not-allowed">uk</div>
            </div>

            <div className="text-red-600 mt-1">
              Size selection is required
            </div>
          </div>

          <button
            className="w-full py-4 rounded-full bg-violet-600 text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
          >Add </button>
          {/* WHISHLIST BUTTON START */}
          <button className="w-full py-4 rounded-full border border-purple-500 text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
            Whishlist
            <IoMdHeartEmpty size={20} />
          </button>

          <div>
            <div className="text-lg font-bold mb-5">
              Product Details
            </div>
            <div className="text-md mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sed dolor nihil.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sed dolor nihil.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sed dolor nihil.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sed dolor nihil.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sed dolor nihil.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sed dolor nihil.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sed dolor nihil.
            </div>
            <div className="text-md mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sed dolor nihil.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sed dolor nihil.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sed dolor nihil.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sed dolor nihil.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sed dolor nihil.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sed dolor nihil.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sed dolor nihil.
            </div>
          </div>
        </div>
      </div>
      <RelatedProduct/>
    </div>
  )
}

export default ProductDetail

