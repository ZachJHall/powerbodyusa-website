import React from "react"
import '../css/footer.css'
import { Link } from 'gatsby'

import InstaIcon from '../images/iconInsta.svg'
import PhoneIcon from '../images/iconPhone.svg'
import FbIcon from '../images/iconFb.svg'
import MapIcon from '../images/iconMapPin.svg'


const Footer = () => {
  return (

      <div class="footer-div">

          <div className="footerTextDiv">
            <h1>Real Gym.</h1> <h1>Real Results.</h1>
          </div>

          <div className="footerIconDiv">
            <a target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/strengthmattersGiTsum/'><img src={FbIcon} /></a>
            <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/powerbodyusaofficial/?hl=en'><img src={InstaIcon} /></a>
            <a target="_blank" rel="noopener noreferrer" href="tel:+16362818120"><img src={PhoneIcon} /></a>
            <a target="_blank" rel="noopener noreferrer" href="http://maps.google.com/?q=1200 403 Sonderen St, O'Fallon, MO 63366"><img src={MapIcon} /></a>
          </div>

      </div>

  )
}

export default Footer
