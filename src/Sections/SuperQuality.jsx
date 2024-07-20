import React, { useState } from "react"
import Button from "../Components/Button"
import { alotbottles } from "../assets/images"

export const SuperQuality = () => {
  return (
    <section
      id="about"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex  text-white-bit flex-1 flex-col">
        <h2 className="mt-10 font-palanquin capitalize text-4xl font-bold lg:max-w-lg ">
          We Provide You <span className="text-gold">Super</span>
          <span className="text-gold"> Quality </span>
          Drinks
        </h2>
        <p className="my-4 lg:max-w-lg text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A minima
          possimus reiciendis voluptatibus sit ab hic, rem consequuntur,
          deleniti quam quos aspernatur.
        </p>
        <p className="mt-6  text-2xl lg:max-w-lg  ">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos optio
          tempore architecto accusantium sequi.
        </p>
        <div className="mt-11">
          <Button label="View details" className="z-8" />
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <img
          src={alotbottles}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  )
}

export default SuperQuality
