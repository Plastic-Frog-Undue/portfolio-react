import React from 'react'
import './Hero.css'
import profile_img from '../../assets/me.jpeg'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I am Samandar Abdujabbarov</span>, fullstack developer based in Seoul, South Korea.</h1>
        <p>I am a fullstack developer from Namangan, Uzbekistan with a year of experience in working in Freelance. </p>
        <div className="hero-action">
            <div className="hero-connect">Connect with Me</div>
            <div className="hero-resume">My Resume</div>
        </div>

    </div>
  )
}

export default Hero