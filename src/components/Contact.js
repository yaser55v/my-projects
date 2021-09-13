import React from "react"
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

import Img from "../assets/images/contact.jpg"

const Contact = () => {
  return (
    <section id="contact" className="font-body">
      <div className="relative">
        <img
          src={Img}
          alt="contact"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="relative bg-opacity-90 bg-gray-900">
          <svg
            className="absolute inset-x-0 bottom-0 text-bgdark"
            viewBox="0 0 1160 163"
          >
            <path
              fill="currentColor"
              d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
            />
          </svg>
          <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="mb-6 text-3xl font-bold tracking-tight text-bgLight underline sm:text-4xl sm:leading-none">
                  <span className="relative px-1">
                    <span className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-indigo-600 animate-pulse"></span>
                    <span className="relative inline-block text-bgdark">
                      CONTACT ME
                    </span>
                  </span>
                </h2>
                <div className="my-8  text-xl text-bgdark  lg:text-center flex flex-col lg:flex-row lg:justify-between">
                  <a
                    href="mailto:topyaser30@gmail.com"
                    className="hover:underline"
                  >
                    topyaser30@gmail.com
                  </a>
                  <a href="tel:+393803646294" className="hover:underline">
                    +39 380 364 6294
                  </a>
                </div>
                <div className="border-b-2 border-bgLight mb-12"></div>
                <div className="flex items-center sm:justify-center">
                  <a
                    href="https://www.facebook.com/profile.php?id=100060888905321"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebook className="social text-bgdark hover:text-facebook" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/yasser-mahmoud-439b61189"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin className="social text-bgdark hover:text-linkedin " />
                  </a>
                  <a
                    href="https://twitter.com/YasserM43067634?s=09"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaTwitter className="social text-bgdark hover:text-twitter" />
                  </a>
                  <a
                  href="https://github.com/yaser55v"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub className="social text-bgdark hover:text-github" />
                </a>
                 
                </div>
              </div>
              <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                <div className="bg-bgLight rounded shadow-2xl p-7 sm:p-10">
                  <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                    Send me a message
                  </h3>
                  <form action="https://formspree.io/f/mrgraeol" method="POST">
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="firstName"
                        className="inline-block mb-1 font-medium"
                      >
                        Please name
                      </label>
                      <input
                        placeholder="Name"
                        required
                        type="text"
                        className="flex-grow w-full h-10 px-4 mb-2 transition duration-200 bg-white  border-gray-100 rounded shadow-sm appearance-none focus:border-bgProject  focus:outline-none border-2 focus:shadow-outline"
                        id="Name"
                        name="Name"
                      />
                    </div>

                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="email"
                        className="inline-block mb-1 font-medium"
                      >
                        Your email if you have
                      </label>
                      <input
                        placeholder="john.doe@example.org"
                        required
                        type="email"
                        className="flex-grow w-full h-10 px-4 mb-2 transition duration-200 bg-white border-gray-100 rounded shadow-sm appearance-none focus:border-bgProject focus:outline-none border-2 focus:shadow-outline"
                        id="email"
                        name="_replyto"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="lastName"
                        className="inline-block mb-1 font-medium"
                      >
                        Tell me everything
                      </label>
                      <textarea
                        required
                        type="text"
                        className="flex-grow w-full h-20 px-4 mb-2 transition duration-200 bg-white  border-gray-100 rounded shadow-sm appearance-none focus:border-bgProject  focus:outline-none border-2 focus:shadow-outline"
                        name="message"
                      ></textarea>
                    </div>
                    <div className="mt-4 mb-2 sm:mb-4">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full h-10 px-6 font-medium tracking-wide text-bgdark transition duration-200 rounded shadow-md bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50"
                      >
                        Come on go
                      </button>
                    </div>
                  </form>
                </div>
                <div className="pt-8 text-center text-bgdark xl:text-gray-900">
                  Made by YASSER MAHMOUD © {new Date().getFullYear()}{" "}
                  <br className="sm:hidden" />
                  P.IVA: 01753900198
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
