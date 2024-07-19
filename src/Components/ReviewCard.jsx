import React from "react"

import { star } from "../assets/icons"

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col shadow-xl p-5 rounded-3xl bg-white">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full w-[120px] h-[120px]"
      />
      <p className="mt-6 max-w-sm text-center info-text"> {feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-0.5">
        <img src={star} width={24} height={24} className="object-contain" />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3
        className="mt-1 font-palanquin text-3xl text-center
       font-bold"
      >
        {customerName}
      </h3>
    </div>
  )
}

export default ReviewCard
