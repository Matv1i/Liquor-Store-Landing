import React, { useState } from "react"
import Button from "../Components/Button"
import { arrowRight } from "../assets/icons"
import { bottles, statistics } from "../constants/index"
import { moet1 } from "../assets/images"
import BottleCard from "../Components/BottleCard"

export const Hero = () => {
  const [bigBottleImg, setBigBottleImg] = useState(moet1)
  return (
    <section
      id="hero"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container  relative"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28  ">
        <p className="text-xl font-montserrat text-gold ">
          Our Summer Collection{" "}
        </p>
        <h1 className="mt-10 text-white-bit font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold ">
          <span className="xl: xl:whitespace-nowrap   relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-gold inline-block mt-3">MOЁТ</span>
          Champagne
        </h1>
        <p className="font-montserrat text-white-bit text-2xl leading-8 mt-6 mb-14 sm:max-w-sm z-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, nam.
        </p>
        <Button label="Shop Now" iconUrl={arrowRight} className="z-8" />
        <div className="flex justify-start items-start flex-wrap  text-white-bit w-full mt-20 gap-16 z-10">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat ">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1  flex justify-center items-center xl:min-h-screen max-xl:py-40  bg-hero  bg-cover bg-center">
        <img
          src={bigBottleImg}
          alt="bottle"
          width={450}
          height={400}
          className="object-contain "
        />
        <div className=" flex  sm:gap-6 gap-4 absolute bottom-[5%] sm:left-[10%] max-sm:px-6">
          {bottles.map((shoe, index) => (
            <div key={index}>
              <BottleCard
                imgUrl={shoe}
                changeBigShoeImage={(shoe) => {
                  setBigBottleImg(shoe)
                }}
                bigShoeImg={bigBottleImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
