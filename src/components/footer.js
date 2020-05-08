import React from "react"
import '../css/footer.css'
import FbIcon from '../images/fbIcon.svg'
import InstaIcon from '../images/instaIcon.svg'
import PhoneIcon from '../images/phoneIcon.svg'


const Footer = () => {
  return (

      <div class="footer-div">

          <div className="footer-left">
              <h3>Connect With Us!</h3>
              <div className="footer-icons">
                <img src={FbIcon} />
                <img src={InstaIcon} />
              </div>
          </div>

          <div className="footer-center">
            <h3>Call Us Today!</h3>
            <div className="footer-phoneIcon">
              <img src={PhoneIcon} />
              <h3>636-281-8120</h3>
            </div>
          </div>

          <div className="footer-right">
            <h3>Address:</h3>
            <h3>403 Sonderen St, O'Fallon, MO 63366</h3>
          </div>

      </div>

  )
}

export default Footer
