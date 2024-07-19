import React from "react"
import { services } from "../constants"

import ServiceCard from "../Components/ServiceCard"
export const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service) => (
        <ServiceCard key={service.imgURL} {...service} />
      ))}
    </section>
  )
}

export default Services
