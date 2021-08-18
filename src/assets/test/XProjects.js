import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, {  Navigation, Pagination, Autoplay } from "swiper/core"

SwiperCore.use([ Navigation, Pagination, Autoplay])

const XProjects = () => {
  const data = useStaticQuery(query)
  const projects = data.allContentfulProject.nodes
 

  return (
    <div id="projects" className="font-body"> 
        <div className="bg-bgProject px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
            <h2 className="max-w-lg mb-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
              <span className="relative px-1">
                <span className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-indigo-600 animate-pulse"></span>
                <span className="relative inline-block">My Projects</span>
              </span>
              <br className="" />
              Simplicity is enough .
              <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
            </h2>
            <p className="text-gray-700 text-xl lg:max-w-md italic ">
              “ Measuring programming progress by lines of code is like
              measuring aircraft building progress by weight. ” – Bill Gates
            </p>
          </div>
          <div>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              slidesPerGroup={1}
              loop={true}
              
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }} 
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              breakpoints={{
                "640": {
                  "slidesPerView": 1,
                  "spaceBetween": 20
                },
                "768": {
                  "slidesPerView": 2,
                  "spaceBetween": 40
                },
                "1024": {
                  "slidesPerView": 3,
                  "spaceBetween": 50
                }
              }}
              className="mySwiper pb-16"
              
            >

              {projects.map(project => {
                const { id, title, image } = project
                
                return (
                  <SwiperSlide key={id}>
                    <Link to="/">
                      <div className="mb-0"></div>
                      <GatsbyImage
                        image={image.gatsbyImageData}
                        alt=""
                        className="rounded"
                      />
                      <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100 ">
                        <p className="mb-4 text-2xl font-bold text-bgLight">
                          {title}
                        </p>
                        <p className="text-xl tracking-wide text-bgLight">
                          {title}
                        </p>
                      </div>
                    </Link>
                    
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>
      </div>
  )
}

export default XProjects

const query = graphql`
  {
    allContentfulProject {
      nodes {
        id
        title
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`
