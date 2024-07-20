import React from "react"
import Button from "../Components/Button"

export const Subscribe = () => {
  return (
    <section
      className="max-container flex justify-between items-center max-lg:flex-col gap-10 font-montserrat text-white-bit "
      id="contact"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        {" "}
        Sign Up For
        <span className="text-gold"> Updates </span> & Newsletter
      </h3>
      <div className="lg:max-w-[40% ] w-full flex items-cente bg-white-bit max-sm:flex-col gap-5 p-2.5 sm:border sm:border-gold rounded-full">
        <input
          type="text"
          placeholder="subscribe@booze.com"
          className="input"
        />
        <div className="flex  max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up"></Button>
        </div>
      </div>
    </section>
  )
}

export default Subscribe
