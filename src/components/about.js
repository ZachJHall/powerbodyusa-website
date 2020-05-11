import React from "react"
import '../css/about.css'


import InfoCard from './infoCard.js'


const About = () => {
  return (

      <div class="aboutDiv">

        <h1>Why PowerBody USA Fitness?</h1>

        <div class="aboutCardContainer">
          <InfoCard title = "Variety" items = {["Weight Equipment","Steam Room","Suana", "Mini Track"]} />
          <InfoCard title = "Flexible Options" items = {["24/7 Access", "Personal Training","Group Classes","Nutrition Assistance", "Flexible Payment Plans"]} />
          <InfoCard title = "Community" items = {["High Level Athletes","Friendly Supportive Environment","Competition Hosting"]} />

        </div>


      </div>

  )
}

export default About
