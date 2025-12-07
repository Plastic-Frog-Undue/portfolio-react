import React from 'react'
import './Contact.css'
import theme_logo from '../../assets/logo.svg'
import mail_icon from '../../assets/email.svg'
import phone_icon from '../../assets/phone.svg'
import location_icon from '../../assets/location.svg'


const Contact = () => {
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in Touch</h1>
            <img src={theme_logo} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /> <p>abdujabbarovsamandar0100gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={phone_icon} alt="" /> <p>+82 10-9805-2504</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" /> <p>Seoul, South Korea</p>
                    </div>
                </div>
            </div>
            <div className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="text" placeholder='Enter your email' name='email' />
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                <button type='submit' className="contact-submit">Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Contact