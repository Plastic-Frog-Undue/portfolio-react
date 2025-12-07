import React from 'react'
import './Footer.css'
import footer_logo from "../../assets/sa-logo.png"
import footer_icon from "../../assets/footer.svg"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p>I am a fullstack developer from Namangan, Uzbekistan with a year of experience in working in Freelance.</p>
            </div>
            <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={footer_icon} alt="" />
                <input type='email' placeholder='Enter your email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2025 Samandar Abdujabbarov. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with Me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer