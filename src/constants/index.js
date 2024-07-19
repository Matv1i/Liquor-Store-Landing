import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons"
import {
  customer1,
  customer2,
  moet1,
  moet2,
  moet3,
  bottle1,
  bottle2,
  bottle3,
  bottle4,
} from "../assets/images"

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
]

export const bottles = [
  {
    thumbnail: moet1,
    bigShoe: moet1,
  },
  {
    thumbnail: moet2,
    bigShoe: moet2,
  },
  {
    thumbnail: moet3,
    bigShoe: moet3,
  },
]

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
]

export const products = [
  {
    imgURL: bottle1,
    name: "Red Label",
    price: "$30.20",
  },
  {
    imgURL: bottle2,
    name: "Chivas Regal 18",
    price: "$70.20",
  },
  {
    imgURL: bottle3,
    name: "London Dry Gin",
    price: "$46.20",
  },
  {
    imgURL: bottle4,
    name: "Jack Daniels ",
    price: "$80.20",
  },
]

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
]

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
]

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Jack Daniels", link: "/" },
      { name: "Johny Walker", link: "/" },
      { name: "Smirnoff", link: "/" },
      { name: "Beluga", link: "/" },
      { name: "MOЁТ", link: "/" },
      { name: "Guiness", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@booze.com", link: "mailto:customer@booze.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
]

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
]
