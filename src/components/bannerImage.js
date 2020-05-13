import React from "react"
import "../css/bannerImage.css"
import Img from "gatsby-image"
import { useStaticQuery, graphql} from "gatsby"

const BannerImage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: {eq: "pbPic.jpg"}) {
        childImageSharp {
          fluid {
            aspectRatio
            base64
            sizes
            src
            srcSet
          }
        }
      }
    }
  `)
  return (
    <div class="bannerImage">
      <Img fluid = {data.file.childImageSharp.fluid} alt='barbell with weight at Powerbody USA'/>
    </div>
  )
}

export default BannerImage
