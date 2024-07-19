import React from "react"
import { headerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"
import { copyrightSign } from "../assets/icons"

export const Footer = () => {
  return (
    <footer className="max-container text-white-bit">
      <div className="flex  justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex-col items-start">
          <a href="/">
            <img src={headerLogo} width={150} height={46} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est,
            commodi! Voluptatem deserunt ipsum, eaque natus assumenda nostrum
            necessitatibus porro inventore optio corrupti nam quibusdam vitae
            autem quod eos!
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="text-white font-montserrat text-2xl leading-normal mb-6 font-medium">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    key="link"
                    className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-graycursor-pointer"
                  >
                    <a>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-start gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copy right sign"
            width={20}
            height={20}
          />
          <p>Copyright. All rigths reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer"> Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer
