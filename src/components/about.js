import React from "react"
import '../css/about.css'


import InfoCard from './infoCard.js'


const About = () => {
  return (

      <div class="aboutDiv">

        <h1>Why PowerBody USA Fitness?</h1>

        <div class="aboutCardContainer">
          <InfoCard title = "Something" items = {["Something","Something","Something"]} />
          <InfoCard title = "Something" items = {["Something","Something","Something"]} />
          <InfoCard title = "Something" items = {["Something","Something","Something"]} />
          
        </div>


      </div>

  )
}

export default About
