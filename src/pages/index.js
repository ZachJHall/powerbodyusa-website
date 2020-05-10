import React from "react"
import '../css/index.css'
import Layout from '../components/layout'

import TopBanner from '../components/topBanner'
import About from '../components/about'
import Contact from '../components/contact'
import Footer from '../components/footer'

const IndexPage = () => {
  return (
    <Layout>
      <TopBanner />
      <About />
      <Contact />
      <Footer />

    </Layout>
  )
}

export default IndexPage
