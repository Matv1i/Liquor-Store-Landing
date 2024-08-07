import React, { useState } from "react"

// NavOpen Component
const NavOpen = ({ isOpen }) => {
  return (
    <div
      className={`  transition-all    mt-6 duration-300 ease-in-out transform ${
        isOpen
          ? "max-lg:block   translate-y-0 opacity-100"
          : "translate-y-[-100%] opacity-0 pointer-events-none"
      }`}
    >
      <ul className="bg-black-bit border-2 border-gold text-white-bit  flex flex-col items-center gap-4  p-4 shadow-lg rounded-lg">
        <li>
          <a
            href="#home"
            className="font-montserrat leading-normal text-lg  hover:text-gold transition-all duration-300"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="font-montserrat leading-normal text-lg  hover:text-gold  transition-all duration-300"
          >
            About us
          </a>
        </li>
        <li>
          <a
            href="#products"
            className="font-montserrat leading-normal text-lg  hover:text-gold  transition-all duration-300"
          >
            Products
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="font-montserrat leading-normal text-lg  hover:text-gold  transition-all duration-300"
          >
            Contact us
          </a>
        </li>
      </ul>
    </div>
  )
}

// Nav Component
export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  function handleClick(e) {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  return (
    <header
      className={` px-8 py-8  z-10 w-full duration-300 ease-in-out transform   ${
        isOpen ? "relative" : "absolute"
      }`}
    >
      <nav className="flex justify-between z-10 items-center max-container ">
        <a href="/">
          <img
            src="src/assets/images/header-logo.png"
            alt="logo"
            width={150}
            height={40}
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          <li>
            <a
              href="#home"
              className=" text-white-bit font-montserrat leading-normal text-2xl hover:text-gold  transition-all duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className=" text-white-bit font-montserrat leading-normal text-2xl hover:text-gold transition-all duration-300"
            >
              About us
            </a>
          </li>
          <li>
            <a
              href="#products"
              className="font-montserrat leading-normal text-white-bit text-2xl hover:text-gold transition-all duration-300"
            >
              Products
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="font-montserrat leading-normal text-2xl text-white-bit hover:text-gold transition-all duration-300"
            >
              Contact us
            </a>
          </li>
        </ul>
        <div
          className={`hidden cursor-pointer max-lg:block transition-transform duration-300 ${
            isOpen ? "rotate-90" : ""
          }`}
          onClick={handleClick}
        >
          <img
            src="src/assets/icons/hamburger.png"
            alt="hamburger"
            width={25}
            height={25}
          />
        </div>
      </nav>
      <NavOpen isOpen={isOpen} />
    </header>
  )
}

export default Nav
