import React from "react"
import '../css/about.css'


import InfoCard from './infoCard.js'


const About = () => {
  return (

      <div class="aboutDiv">

        <h1>Why PowerBody USA Fitness?</h1>

        <div class="aboutCardContainer">
          <InfoCard items = {["Chuck",2,3]} />
        </div>


      </div>

  )
}

export default About
