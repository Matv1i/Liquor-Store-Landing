import React from "react"

import Button from "../Components/Button"
import { winePromo } from "../assets/images"

export const SuperOffer = () => {
  return (
    <section className="flex justify-wrap items-center font-montserrat text-white-bit max-xl:flex-col-reverse gap-20 max-container ">
      <div className="flex-1 border-2 border-gold rounded-sm">
        <img
          src={winePromo}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin capitalize text-4xl font-bold lg:max-w-lg ">
          Black Friday <span className="text-gold"> Coming</span>
        </h2>
        <p className="my-4  text-xl lg:max-w-lg ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A minima
          possimus reiciendis voluptatibus sit ab hic, rem consequuntur,
          deleniti quam quos aspernatur.
        </p>
        <p className="mt-6  text-xl lg:max-w-lg  ">
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
