import React from 'react'
import './styling/widget_1.css'
import QuestionMark from '../assets/question.png'
import Boxes from '../assets/boxes.png'

export default function Widget_1() {
  return (
    <div className='w1-cn'>
      <img src={QuestionMark} className='question-mark'/>
      <img src={Boxes} className='boxes'/>
      <div className="rectangle"></div>
      <div className="w1">
        <nav className='w1-nav'>
          <div className='w1-nav-option'>About Me</div>
          <div className='w1-nav-option'>Experiences</div>
          <div className='w1-nav-option'>Recommended</div>
        </nav>
        <div className='w1-text'>
          <p style={{marginBottom: "25px"}}>
            Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
          </p>
          <p>
            I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
          </p>
        </div>
      </div>
    </div>
  )
}
