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
                <div>REAL GYM.</div>
                <div>REAL RESULTS.</div>
              </div>

              <div class="topBannerQuoteContentBottom"> <button>Contact Us</button></div>
            </div>
          </div>
      </div>





  )
}

export default TopBanner
