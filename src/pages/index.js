import React from "react"
import '../css/index.css'
import Layout from '../components/layout'

import TopBanner from '../components/topBanner'
import About from '../components/about'
import ImageQuad from '../components/imageQuad'
import Footer from '../components/footer'

const IndexPage = () => {
  return (
    <Layout>
      <TopBanner />
      <About />
      <ImageQuad />
      <Footer />

    </Layout>
  )
}

export default IndexPage
