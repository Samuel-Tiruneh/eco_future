import React from 'react'
import './footer.css'
import eco from '../../assets/eco.png'
const Footer = () => {
  return (
    <div className="gpt3__footer section_padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text"> Do you want to step in to future before others </h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={eco} alt="logo"/>
          <p>Sustainability Powered by Eco AI.</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overnes</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div> 
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Social Media</p>
          <p> Counters</p> 
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>Samuel Tirune</p>
          <p>+251935749521</p>
          <p> samuelplusweb@gmail.com</p> 
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>2024 Eco AI. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
