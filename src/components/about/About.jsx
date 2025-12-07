import React from 'react'
import './About.css'
import theme_logo from '../../assets/logo.svg'
import profile_img from '../../assets/me.jpeg'


const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_logo} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a Fullstack Developer with over a year of professional expertise in the field. Throughout my career and learning journey, I have had the privilege of working with Freelance.</p>
                    <p>My passion for fullstack development is not only reflected in my experience but also in the enthusiasm and dedication I bring to each project.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "60%"}} /></div>
                    <div className="about-skill"><p>Javascript</p><hr style={{width: "60%"}} /></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width: "70%"}} /></div>
                    <div className="about-skill"><p>Next JS</p><hr style={{width: "50%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>1+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>30+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>5+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About