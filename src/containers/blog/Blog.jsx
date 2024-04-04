import React from 'react'
import  {Article} from '../../components'
import './blog.css'
import {blog01, blog02, blog03, blog04, blog05} from './imports'
const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happening. We are blogging about it.</h1>
      </div>
      <div className="gpt3__blog-container">
       <div className="gpt3__blog-container_groupA" >
          <Article imgUrl={blog01} date="sep 27, 2024" title="Eco AI: Revolutionizing Sustainability Through Technology" />
       </div>
        <div className="gpt3__blog-container_groupB" >
        <Article imgUrl={blog02} date="April 13, 2023" title="Meet Eco AI: Your Sustainable Chatbot Companion" />
        <Article imgUrl={blog03} date="June 27, 2022" title="Sustainable Chats: Eco AI's Chatbot Innovations" />
        <Article imgUrl={blog04} date="july 10, 2024" title="Eco AI Unleashed: Navigating a Greener Future"/>
        <Article imgUrl={blog05} date="sep 23, 2024" title="Eco AI Chatbots: Redefining Sustainability Conversations"/>
           
        </div>
      </div>
    </div>
  )
}

export default Blog
