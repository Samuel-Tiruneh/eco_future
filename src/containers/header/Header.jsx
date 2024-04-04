import React from 'react'
import './header.css'
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">

        <h1 className="gradient__text">Let's Build Something amazing with ECO OpenAI</h1>
    
        <p>Please provide your email address to unlock the full capabilities of Eco. Complete the setup process to access advanced features. Share your email to explore the complete range of Eco functionalities.</p>
        
        <div className="gpt3__header-content__input">
           <input type="email" placeholder="You Email Adress" />
           <button type="button">Get Started</button>
        
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people"/>
          <p>Some of the registered users.</p>
        </div>
       </div>
        <div className="gpt3__header-image">
            <img src={ai}  alt="ai"/>
        </div>
    </div>
  )
}

export default Header
