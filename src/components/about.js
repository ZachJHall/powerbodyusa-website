import React from "react"
import '../css/about.css'


import InfoCard from './infoCard.js'

import varietyPic from '../images/variety.jpg'
import flexiblePic from '../images/flexibleOptions.jpg'
import communityPic from '../images/community.jpg'


const About = () => {
  return (

      <div class="aboutDiv">
        <div class="aboutDivHeader">
        <h1>Why PowerBody USA</h1> <h1> Fitness?</h1>
        </div>
        <div class="aboutCardContainer">
          <InfoCard  src = {varietyPic} title = "Variety" items = {["Free Weights", "Cable Machines", "Steam Room","Suana", "Mini Track"]} />
          <InfoCard  src = {flexiblePic}title = "Flexible Options" items = {["24/7 Access", "Personal Training","Group Classes","Nutrition Assistance", "Flexible Payment Plans"]} />
          <InfoCard src = {communityPic}title = "Community" items = {["High Level Athletes","Friendly Supportive Environment","Competition Hosting"]} />

        </div>


      </div>

  )
}

export default About
