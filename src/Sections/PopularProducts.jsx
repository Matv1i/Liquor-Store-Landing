import React from "react"

import { products } from "../constants"

import PopularProductCard from "../Components/PopularProductCard"

export const PopularProducts = () => {
  return (
    <section
      id="products"
      className=" text-white-bit max-container max-sm:mt-12"
    >
      <h2 className="text-4xl  font-palanquin font-bold ">
        Our <span className="text-gold">Popular</span> Products{" "}
      </h2>
      <p className="lg:max-w-lg mt-2 font-montserrat">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
        aspernatur ea esse earum doloribus. Distinctio, iste facilis!
      </p>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  )
}

export default PopularProducts
