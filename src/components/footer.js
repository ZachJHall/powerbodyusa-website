import React from "react"
import '../css/footer.css'
import FbIcon from '../images/fbIcon.svg'
import InstaIcon from '../images/instaIcon.svg'


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

          </div>

          <div className="footer-right">
            
          </div>

      </div>

  )
}

export default Footer
