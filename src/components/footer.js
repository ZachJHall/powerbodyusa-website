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
            <a target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/strengthmattersGiTsum/'><img src={FbIcon} alt='Facebook icon to Powerbody USA facebook account'/></a>
            <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/powerbodyusaofficial/?hl=en'><img src={InstaIcon} alt='Instagram icon to Powerbody USA Instagram account'/></a>
            <a target="_blank" rel="noopener noreferrer" href="tel:+16362818120"><img src={PhoneIcon} alt='Phone icon to call Powerbody USA'/></a>
            <a target="_blank" rel="noopener noreferrer" href='https://maps.google.com/?q=1200 403 Sonderen St, OFallon, MO 63366'><a target="_blank" rel="noopener noreferrer" href='https://maps.apple.com/maps?q=1200 403 Sonderen St, OFallon, MO 63366'><img src={MapIcon} alt='map icon for directions to Powerbody USA'/></a></a>
          </div>


      </div>

  )
}

export default Footer
