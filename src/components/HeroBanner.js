import React from 'react';
import './HeroBanner.css'


import HeroBannerImage from '../assets/images/banner.png'

function HeroBanner() {
  return (
    <section className='Banner_Container'>

    <p className='Banner_Container--P1'>Fitness Club</p>

    <p className='Banner_Container--P2'>
      Sweat, Smile <br />
      And Repeat
    </p>

    <p className='Banner_Container--P3'>
      Check out the most effective exercises personalized to you
    </p>

    <div className='Banner_div'>
      <a href="#exercises" >Explore Exercises</a>
    </div>

    <p className='Banner_Container--P4'>
      Exercise
    </p>

    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </section>
  )
}

export default HeroBanner;




