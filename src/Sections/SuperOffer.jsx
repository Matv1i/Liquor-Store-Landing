import React from "react"

import { offer } from "../assets/images"

import Button from "../Components/Button"

export const SuperOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container ">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin capitalize text-4xl font-bold lg:max-w-lg ">
          Special <span className="text-coral-red">Offer</span>
        </h2>
        <p className="my-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A minima
          possimus reiciendis voluptatibus sit ab hic, rem consequuntur,
          deleniti quam quos aspernatur.
        </p>
        <p className="mt-6 lg:max-w-lg info-text ">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
          repudiandae labore deserunt sed similique dolores corporis
          necessitatibus quasi ea. Mollitia, voluptate! Dolores repellat quis
          numquam.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" />
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  )
}

export default SuperOffer
