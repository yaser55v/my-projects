import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"
import SwiperCore, {
  Navigation,
  Pagination,
  EffectFade,
  Parallax,
  Autoplay,
} from "swiper/core"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"

SwiperCore.use([Navigation, Pagination, EffectFade, Parallax, Autoplay])
const Projects = ({ toggles, isOpen }) => {
  const { t } = useTranslation()
  const data = useStaticQuery(query)
  const projects = data.allContentfulProject.nodes
  return (
    <>
      <div id="projects" className="font-body">
        <div className="bg-bgProject px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
            <h2 className="max-w-lg mb-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-snug  md:mb-6 group capitalize">
              <span className="relative px-1">
                <span className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-indigo-600 animate-pulse"></span>
                <span className="relative inline-block uppercase">
                <Trans>{t("My Projects")}</Trans>
                </span>
              </span>
              <br className="" />
              <Trans>{t("Simplicity is enough.")}</Trans>
              <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
            </h2>
            <p className="text-gray-800 text-xl lg:max-w-md italic ">
            <Trans>{t("quote")}</Trans>
              <span className="font-bold"> – Bill Gates</span>
            </p>
          </div>
          <div>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              navigation={false}
              speed={1200}
              parallax={true}
              effect={"fade"}
              className="mySwiper"
              style={{ height: "30rem" }}
            >
              {projects.map(project => {
                const {
                  id,
                  title,
                  image,
                  link,
                  content: { tags },
                  description: { description },
                } = project

                return (
                  <SwiperSlide key={id}>
                    <div className="w-full h-full">
                      <GatsbyImage
                        image={image.gatsbyImageData}
                        alt={title}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    <div
                      key={id}
                      className="absolute inset-0 transition-opacity duration-200 bg-black bg-opacity-80  opacity-100 justify-evenly items-center"
                    >
                      <div className="px-4 sm:px-12 py-12 mx-auto max-w-full">
                        <div className="flex justify-between items-center">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div className="">
                              <h2
                                className="mb-4 title text-lg lg:text-4xl text-center lg:text-left font-bold text-bgLight shadow-2xl"
                                data-swiper-parallax="700"
                              >
                                {title}
                              </h2>
                              <p
                                className="mb-6 text-bgLight hidden lg:block"
                                data-swiper-parallax="-400"
                              >
                                {description}
                              </p>
                              <hr className="mb-0 lg:mb-4 border-bgProject" />
                              <ul className="hidden lg:block">
                                {tags.map((tag, index) => {
                                  return (
                                    <li
                                      key={index}
                                      className="title text-bgLight my-1 capitalize"
                                      data-swiper-parallax="-700"
                                    >
                                      {tag}
                                    </li>
                                  )
                                })}
                              </ul>
                              <a
                                href={link}
                                target="_blank"
                                rel="noreferrer"
                                className="title inline-flex items-center justify-center h-10 px-6 mt-8 font-medium tracking-wide text-gray-900 transition duration-200 rounded shadow-md bg-bgdark hover:bg-gray-700 hover:text-bgLight focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50"
                                data-swiper-parallax="-700"
                              >
                                See demo
                              </a>
                            </div>
                            <div className="">
                              <a
                                href={link}
                                target="_blank"
                                rel="noreferrer"
                                className="x"
                              >
                                <GatsbyImage
                                  image={image.gatsbyImageData}
                                  alt={title}
                                  objectFit="contain"
                                  
                                  className="object-contain  w-full"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
          <div className="flex justify-center">
            <button
              onClick={toggles}
              className="items-center mt-12 justify-center py-3 px-8 font-medium tracking-wide text-bgdark transition duration-200 rounded shadow-md bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50"
            >
              {!isOpen ? (
                <span className="flex items-center">
                  <Trans>{t("See more")}</Trans>
                  <FaChevronDown className="ml-2" />
                </span>
              ) : (
                <span className="flex items-center">
                  <Trans>{t("See less")}</Trans>
                  <FaChevronUp className="ml-2" />
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects

const query = graphql`
  {
    allContentfulProject(limit: 4, sort: { fields: idx, order: DESC }) {
      nodes {
        id
        title
        link
        description {
          description
        }
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`
