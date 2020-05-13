import React from "react"
import '../css/topBanner.css'
import Header from './header'


import TopBannerImage from '../images/pbPic.jpg'

import BannerImage from "../components/bannerImage"


const TopBanner = () => {
  return (

      <div class="topBanner">
          <Header />

          <BannerImage />

          <div class="topBannerQuote">
            <div class="topBannerQuoteContent">

              <div class="topBannerQuoteContentTop">
                <h1>REAL GYM.</h1> <h1>REAL RESULTS.</h1>
              </div>

              <div class="topBannerQuoteContentBottom">
                <a href="tel:+16362818120"><button>Call Us Now</button></a>
                <a target="_blank" rel="noopener noreferrer" href='https://maps.google.com/?q=1200 403 Sonderen St, OFallon, MO 63366'><a target="_blank" rel="noopener noreferrer" href='https://maps.apple.com/maps?q=1200 403 Sonderen St, OFallon, MO 63366'><button>Directions</button></a></a>
              </div>

            </div>
          </div>

      </div>

  )
}

export default TopBanner
