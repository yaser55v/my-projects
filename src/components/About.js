import React from "react"
import AboutImg from "../assets/images/Illustration.svg"
import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoGithub,
} from "react-icons/io"
import { FaBootstrap, FaReact, FaSass, FaRegLightbulb, FaWordpress } from "react-icons/fa"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"
import { GrGatsbyjs } from "react-icons/gr"
import { SiTailwindcss } from "react-icons/si"
const About = () => {
  const { t } = useTranslation()
  return (
    <div id="about" className="font-body px-4 py-4 my-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  bg-gray-800">
      <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-bgLight underline sm:text-4xl sm:leading-none">
              <span className="relative px-1">
              <span className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-indigo-600 animate-pulse"></span>
                <span className="relative inline-block text-bgdark uppercase">
                <Trans>{t("About Me")}</Trans>
                </span>
              </span>
            </h2>
            <p className="text-base text-bgLight md:text-lg">
              <Trans>{t("paragraph")}</Trans>
            </p>
          </div>
          <p className="mb-6 text-sm font-bold tracking-widest uppercase text-bgdark">
            <Trans>{t("FAMILIARITY WITH")}:</Trans>
          </p>
          <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0 text-bgdark">
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="mr-4 flex">
                  <IoLogoHtml5 />
                  <IoLogoCss3 />
                </span>
                HTML & CSS
              </li>
              <li className="flex items-center">
                <span className="mr-4">
                  <FaSass />
                </span>
                SASS
              </li>
              <li className="flex items-center">
                <span className="mr-4">
                  <FaBootstrap />
                </span>
                BOOTSTRAP
              </li>
              <li className="flex items-center">
                <span className="mr-4">
                  <SiTailwindcss />
                </span>
                TAILWIND
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="mr-4">
                  <IoLogoJavascript />
                </span>
                JAVASCRIPT
              </li>
              <li className="flex items-center">
                <span className="mr-4">
                  <FaReact />
                </span>
                REACT
              </li>
              <li className="flex items-center">
                <span className="mr-4">
                  <GrGatsbyjs />
                </span>
                GATSBY.JS
              </li>
              <li className="flex items-center">
                <span className="mr-4">
                  <FaWordpress />
                </span>
                WORDPRESS
              </li>
            </ul>
          </div>
          <p className="mt-6 text-sm  tracking-widest uppercase text-bgdark flex">
          <FaRegLightbulb className="text-xl mr-4"/>  figma - adobe xd - graphql - jquery - +{t("more")}...
          </p>
        </div>
        <div>
          <img
            className="object-contain w-full h-80 rounded sm:h-exh animate-pulse hidden lg:block"
            src={AboutImg}
            alt="code bg"
          />
        </div>
      </div>
    </div>
  )
}

export default About
