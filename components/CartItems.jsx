import Image from "next/image";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

function CartItems() {
  return (
    <div className="flex py-5 gap-3 mx-8 md:gap-5 border-b">
      <div className="shrink-0 aspect-square w-[50px] md:w-[80px]">
        <Image src="https://images.pexels.com/photos/6568942/pexels-photo-6568942.jpeg?auto=compress&cs=tinysrgb&w=600" alt='none'/>
      </div>

      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          {/* PRODUCT TITLE */}
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            Product
          </div>

          {/* PRODUCT SUBTITLE */}
          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            sub
          </div>

          {/* PRODUCT PRICE */}
          <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
            MRP : &#8377;
          </div>
        </div>
        {/* PRODUCT SUBTITLE */}
        <div className="text-sm md:text-md font-medium text-black/[0.5] block">
          sub
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            <div className="flex items-center gap-1">
              <div className="font-semibold">Size:</div>
              <select className="hover:text-black">
                <option value="1">ad</option>
                <option value="2">adasd</option>
              </select>
            </div>

            <div className="flex items-center gap-1">
              <div className="font-semibold">Quantity:</div>
              <select
                className="hover:text-black">
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
          </div>
          <RiDeleteBin6Line className="cursor-pointer text-black/[0.5] hover:text-black
           text-[16px] md:text-[20px]"/>
        </div>
      </div>
    </div>
  )
}

export default CartItems
