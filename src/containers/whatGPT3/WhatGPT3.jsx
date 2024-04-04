import React from 'react'
import './whatGPT3.css'
import { Feature } from '../../components'
const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="what is Eco AI" text=" a state-of-the-art language processing model developed by OpenAI. It is a powerful artificial intelligence system that uses deep learning techniques to generate human-like text based on the input provided to it." />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination.</h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container"> 
          <Feature title="Chatbots" text="more natural and contextually relevant conversations with users, providing personalized responses based on the input recived." />
          <Feature title="Knownledgebase" text="accurate and up-to-date information on various subjects, helping you find answers to questions quickly and efficiently."/>
          <Feature title="Education" text=" generate educational content such as study guides, quizzes, and explanations to help students better understand complex concepts." />
      </div>
    </div>
  )
}

export default WhatGPT3
