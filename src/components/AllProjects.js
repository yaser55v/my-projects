import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

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
      <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-3  animate-lazy">
        {allProjects.map(project => {
          const {
            id,
            title,
            image,
            link,
            content: { tags },
          } = project
          return (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noreferrer"
              className="block rounded-lg transition duration-300 transform p-4 shadow-lg lg:hover:scale-105 hover:shadow-2xl bg-xLight bg-opacity-50"
            >
              <GatsbyImage
                className="h-56 w-full rounded-md"
                image={image.gatsbyImageData}
                alt={title}
                objectFit="fill"
              />

              <div>
                <dl>
                  <div>
                    <dt className="sr-only">Project Name</dt>
                    <dd className="font-bold text-base text-gray-900 text-center mt-4">
                      {title}
                    </dd>
                  </div>
                </dl>

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
              </div>
            </a>
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
