import React from "react"
import '../css/contact.css'


const Contact = () => {
  return (

      <div class="contactDiv">

        <div class="contactCard">
          <div class="contactTitle"><h2>Contact us</h2></div>

          <form class="contactForm">

            <div class="contactFormTop">

                <input type="text" placeholder="John Doe" />

                <input type="text" placeholder="JohnDoe@Mail.com" />

            </div>

            <div class="contactFormMiddle">
              <input type="text" placeholder="Subject" />
            </div>

            <div class="contactFormBottom">
              <input type="text" placeholder="Message" />
            </div>

          </form>
        </div>

      </div>

  )
}

export default Contact
