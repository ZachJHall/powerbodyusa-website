import React from "react"
import '../css/index.css'
import Layout from '../components/layout'
import BannerImage from '../images/powerbodyusa_meet_image.jpg'

const IndexPage = () => {
  return (
    <Layout>

      <img src={ BannerImage } alt="Competition Team" id= "banner-image"/>

      <div class="index-content">

        <h1 id="index-header-title">About PowerBody USA Fitness</h1>

        <p>*POWERBODY USA is family-owned and operated by husband and wife team Strength Coach Chuck and Former National and World Champion Powerlifter, Carla Trosper.
        Since opening in 1996, we treat every member like they are a part of our family.
        Our primary goal is to share our 50 plus years of fitness knowledge with our community.
        Other companies may offer similar services, but our services come with a personal touch with affordable
         training sessions and reasonable yearly and short term memberships.
        Regardless of your fitness level, we can generate a plan that works for you...and age is never an excuse!</p>

      </div>

    </Layout>
  )
}

export default IndexPage
