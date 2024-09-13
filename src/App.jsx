import React from 'react'
import './App.css'
import Widget_1 from './components/widget_1'
import Widget_2 from './components/widget_2'

export default function App() {
  return (
    <div className='app'>
      <div className='right'>
        <Widget_1 />
        <div className="line"></div>
        <Widget_2 />
        <div className="line"></div>
      </div>
    </div>
  )
}
