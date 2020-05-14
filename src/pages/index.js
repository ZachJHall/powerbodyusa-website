import React from "react"
import '../css/index.css'
import Layout from '../components/layout'

import HelmetComponent from '../components/helmetcomponent'
import TopBanner from '../components/topBanner'
import About from '../components/about'
import Footer from '../components/footer'



const IndexPage = () => {
  return (
    <html lang='en'>
      <HelmetComponent />
      <Layout>
        <TopBanner />
        <About />
        <Footer />

      </Layout>
    </html>
  )
}

export default IndexPage
