import React from 'react'
import possibilityImage from '../../assets/possibility.png'
import './possibility.css'
const Possibility = () => {
  return (
    <div className="gpt3__possibility section_padding" id="possibility">
      <div className="gpt3__possibility-image">
         <img src={possibilityImage} alt="possibility"/>
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">The possibilities are beyond our Imagination.</h1>
        <p>OpenAI's groundbreaking work with GPT-3 has truly opened up a realm of possibilities that extend far beyond our current imagination</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility
