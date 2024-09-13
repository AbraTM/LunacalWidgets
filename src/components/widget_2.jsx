import React from 'react'
import './styling/widget_2.css'
import QuestionMark from '../assets/question.png'
import Boxes from '../assets/boxes.png'
import LeftArrow from '../assets/left-arrow.png'
import RightArrow from '../assets/right-arrow.png'
import BtmImage from '../assets/w2-img.png'

export default function Widget_2() {
  return (
    <div className="w2-cn">
      <img src={QuestionMark} className="question-mark" />
      <img src={Boxes} className="boxes" />
      <div className="w2">
        <nav>
          <div className="nav-left">Gallery</div>
          <div className="nav-right">
            <div className="add-image"><span>+</span> ADD IMAGE</div>
            <div className="nav-btns">
              <div className="nav-btn-cn"><img src={LeftArrow}/></div>
              <div className="nav-btn-cn"><img src={RightArrow}/></div>
            </div>
          </div>
        </nav>
        <div className='w2-btm'>
          <img src={BtmImage}/>
          <img src={BtmImage}/>
          <img src={BtmImage}/>
        </div>
      </div>
    </div>
  )
}
