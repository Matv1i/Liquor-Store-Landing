import React from "react"

import { star } from "../assets/icons"

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className=" flex flex-1 flex-col w-full max-sm:w-full transition-all 0.3s border-2  border-black-tint ease-out  hover:border-gold rounded-xl bg-black-tint p-7 cursor-pointer ">
      <img
        src={imgURL}
        alt={name}
        className="w-[280px] bg-black-bit rounded-xl  object-contain  h-[280px]"
      />
      <div className="mt-8  pt-2 border-t-2 border-gold justify-start flex gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal ">(4.5)</p>
      </div>
      <h3 className="mt-2  font-semibold font-montserrat text-white-bit text-2xl leading-normal">
        {name}
      </h3>
      <p className="mt-2  font-semibold font-montserrat text-coral-red text-xl leading-normal text-gold">
        {price}
      </p>
    </div>
  )
}

export default PopularProductCard
