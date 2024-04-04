import React from 'react';
import './features.css';
import  {Feature} from '../../components';

const featuresData=[
  {
    title: "Enhanced Personalization",
    text: "With the advancements in GPT-3 technology, the future holds the promise of enhanced personalization in various applications",
  },
  {
    title: "Seamless Integration",
    text: "As GPT-3 continues to evolve, the future will likely see seamless integration of this technology into various platforms and systems",
  },
  {
    title: " Ethical Considerations",
    text: "With the increasing use of AI technologies like GPT-3, the future raises important ethical considerations that need to be addressed",
  },
  {
    title: "Innovation and Creativity",
    text: "One of the exciting possibilities for the future of GPT-3 is its potential to inspire innovation and creativity in various fields",
  }
]
const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
       <div className="gpt3__features-heading">
         <h1 className="gradient__text">The Future is Now and You Just Need To Realize it. Step into Future Today& Make it Happen.</h1>
         <p>Request Early Access to Get Started.</p>
       </div>
       <div className="gpt3__features-container">
          {featuresData.map((item, index)  => (
            <Feature title={item.title} text={item.text} key={item.title+index}/>
          ))}
         
       </div>
    </div>
  )
}

export default Features
