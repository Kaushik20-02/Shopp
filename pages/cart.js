import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartItems from "../components/CartItems";
import Empty from '../public/assets/empty-cart.jpg'

function cart() {
    return (
        <div className='w-full md:py-20 md:-mt-9'>
            <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                    Shopping Cart
                </div>
            </div>

            <div className="lg:w-[70%] mx-auto flex flex-col lg:flex-row gap-2 py-10">
                {/* CART ITEMS Left */}
                <div className="flex-[2] ml-5">
                    <div className="text-lg font-bold"> Cart Items </div>
                    <CartItems />
                    <CartItems />

                </div>
                {/* CART ITEMS Right */}
                <div className="flex-[1]">
                    <div className="text-lg font-bold">Summary</div>

                    <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                        <div className="flex justify-between">
                            <div className="uppercase text-md md:text-lg font-medium text-black">
                                Subtotal
                            </div>
                            <div className="text-md md:text-lg font-medium text-black">
                                &#8377;
                            </div>
                        </div>
                        <div className="text-sm md:text-md py-5 border-t mt-5">
                            The subtotal reflects the total price of
                            your order, including duties and taxes,
                            before any applicable discounts. It does
                            not include delivery costs and
                            international transaction fees.
                        </div>
                    </div>
                </div>
            </div>
                {/* EmptyCART */}
            <div className="flex-[2] hidden flex flex-col items-center pb-[50px] md:-mt-14">
                <Image src={Empty}
                    className="w-[300px] md:w-[400px]" alt='none'/>
                <span className="text-xl font-bold">
                    Your cart is empty
                </span>
                <span className="text-center mt-4">
                    Looks like you have not added anything in your cart.
                    <br />
                    Go ahead and explore top categories.
                </span>
                <Link href="/"
                    className="py-4 px-8 rounded-full bg-purple-400 text-white text-lg font-medium transition-transform
                     active:scale-95 mb-3 hover:opacity-75 mt-8">
                    Continue Shopping
                </Link>
            </div>
        </div>
    )
}

export default cart
