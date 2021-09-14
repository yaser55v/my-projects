import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"
const AllProjects = ({ isOpen }) => {
  const data = useStaticQuery(query)
  const allProjects = data.allContentfulProject.nodes
  return (
    <div
      className={
        isOpen
          ? "font-body bg-bgProject px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 pb-8"
          : "hidden"
      }
    >
      <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-3">
        {allProjects.map(project => {
          const {
            id,
            title,
            image,
            link,
            github,
            content: { tags },
          } = project
          return (
            <div
              key={id}
              className="transition duration-300 transform rounded shadow-lg lg:hover:scale-105 hover:shadow-2xl bg-xLight bg-opacity-50 pb-4"
            >
              <div className="relative mb-4">
                <a href={link} target="_blank" rel="noreferrer">
                  <GatsbyImage
                    className="absolute object-cover w-full h-full rounded-t"
                    image={image.gatsbyImageData}
                    alt={title}
                  />
                </a>
              </div>
              <div className="flex flex-col sm:text-center capitalize">
                <p className="text-lg font-bold">{title}</p>
                <div className="flex flex-wrap items-center justify-center space-x-3 py-4">
                  {tags.map((tag, index) => {
                    return (
                      <span
                        key={index}
                        className="border rounded border-xLight text-sm px-1 bg-xLight"
                      >
                        {tag}
                      </span>
                    )
                  })}
                </div>
                <div className="flex items-center space-x-6 sm:justify-center">
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-900 transition-colors duration-100 hover:text-gray-500"
                  >
                    <FaExternalLinkAlt className="h-6 w-6" />
                  </a>
                  <a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-900 transition-colors duration-100 hover:text-gray-500"
                  >
                    <FaGithub className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AllProjects
const query = graphql`
  {
    allContentfulProject(sort: { fields: idx, order: DESC }) {
      nodes {
        id
        title
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
        link
        github
        content {
          tags
        }
      }
    }
  }
`
