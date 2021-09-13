import React from "react"
import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Layout from "../components/Layout"


import Seo from "../components/seo"

const HomePage = () => {
  return (
    <Layout>
      <Seo title="Yasser" />
      <Projects />
      <About />
      <Contact />
    </Layout>
  )
}

export default HomePage
