import React from "react"

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px]sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 border-gold border-2 bg-black-tint py-16">
      <div className="w-11 h-11 flex  justify-center items-center bg-gold rounded-full">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal text-gold font-bold ">
        {label}
      </h3>
      <p className="mt-3 break-words font-montserrat text-lg text-white-bit">
        {subtext}
      </p>
    </div>
  )
}

export default ServiceCard
