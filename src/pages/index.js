import React, { useState } from "react"
import About from "../components/About"
import Projects from "../components/Projects"
import AllProjects from "../components/AllProjects"
import Contact from "../components/Contact"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggles = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Layout>
      <Seo title="Yasser" />
      <Projects toggles={toggles} isOpen={isOpen} />
      <AllProjects isOpen={isOpen} toggles={toggles} />
      <About />
      <Contact />
    </Layout>
  )
}

export default HomePage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
