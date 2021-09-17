import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { FcStatistics, FcAbout, FcCustomerSupport } from "react-icons/fc"
import Bounce from "react-reveal/Bounce"
import Zoom from "react-reveal/Zoom"
import { Trans, useI18next, useTranslation, Link } from "gatsby-plugin-react-i18next"
import IT from "../assets/images/it.png"
import EN from "../assets/images/en.png"
const Header = () => {
  const { languages, changeLanguage, originalPath } = useI18next()
  const { t } = useTranslation()
  return (
    <header className="font-body">
      <div className="mb-16">
        <div className="bg-gradient-to-r from-bgLight to-bgdark">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <Bounce top cascade>
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-gray-800 sm:text-5xl md:mx-auto">
                  YASSER MAHMOUD
                </h2>
                <div>
                  <p className="text-base text-gray-700 md:text-3xl ">
                    <Trans>{t("Front")}</Trans>
                  </p>
                </div>
              </div>
            </Bounce>
            <Zoom duration={3000} left cascade>
              <div className="flex items-center sm:justify-center">
                <a
                  href="https://www.facebook.com/profile.php?id=100060888905321"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook className="social hover:text-facebook" />
                </a>
                <a
                  href="https://www.linkedin.com/in/yasser-mahmoud-439b61189"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin className="social hover:text-linkedin " />
                </a>
                <a
                  href="https://twitter.com/YasserM43067634?s=09"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter className="social hover:text-twitter" />
                </a>
                <a
                  href="https://github.com/yaser55v"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub className="social hover:text-github" />
                </a>
              </div>
            </Zoom>
            <div className="flex justify-center">
              {languages.map(lang => (
                <button
                  className="mr-4 mt-8"
                  key={lang}
                  onClick={e => {
                    e.preventDefault()
                    changeLanguage(lang)
                  }}
                >
                  <Link to={originalPath} language={lang}>
                  <img
                    src={lang === "it" ? IT : EN}
                    alt={lang}
                    className="w-6 h-6 sm:w-8 sm:h-8 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-150"
                  />
                  </Link>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="relative px-4 sm:px-0">
          <div className="absolute inset-0 bg-gradient-to-r from-bgLight to-bgdark h-1/2" />
          <Bounce top cascade duration={3000}>
            <div className="relative grid mx-auto overflow-hidden bg-transparent divide-y rounded  sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
              <div className="inline-block p-4 sm:p-8 text-center bg-gray-700 text-bgLight">
                <AnchorLink to="/#projects">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-0 sm:mb-4 rounded-full ">
                    <FcStatistics className="social " />
                  </div>
                  <p className="tracking-wide text-bgLight">
                    <Trans>{t("Projects")}</Trans>
                  </p>
                </AnchorLink>
              </div>
              <div className="inline-block p-4 sm:p-8 text-center bg-gray-700 ">
                <AnchorLink to="/#about">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-0 sm:mb-4 rounded-full">
                    <FcAbout className="social " />
                  </div>
                  <p className="tracking-wide text-bgLight">
                    <Trans>{t("About Me")}</Trans>
                  </p>
                </AnchorLink>
              </div>

              <div className="inline-block p-4 sm:p-8 text-center bg-gray-700 text-bgLight">
                <AnchorLink to="/#contact">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-0 sm:mb-4 rounded-full ">
                    <FcCustomerSupport className="social " />
                  </div>
                  <p className="tracking-wide text-bgLight">
                    <Trans>{t("Contact")}</Trans>
                  </p>
                </AnchorLink>
              </div>
            </div>
          </Bounce>
        </div>
      </div>
    </header>
  )
}

export default Header
