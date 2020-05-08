import React from "react"
import '../css/topBanner.css'


import TopBannerImage from '../images/pbPic.jpg'

const TopBanner = () => {
  return (

      <div class="topBanner">
          <img src={TopBannerImage} />


          <div class="topBannerQuote">
            <div class="topBannerQuoteContent">

              <div class="topBannerQuoteContentTop">
                <h1>REAL GYM.</h1> <h1>REAL RESULTS.</h1>
              </div>

              <div class="topBannerQuoteContentBottom">
                <a href="tel:+16362818120"><button>Contact Us</button></a>
              </div>

            </div>
          </div>

      </div>





  )
}

export default TopBanner
