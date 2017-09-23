import React, { Component } from 'react'
import './Lifeline.css'
import Year from './components/Year'
import sampleData from './sampleData'

class Lifeline extends Component {
  render () {
    return (
      <div className='Lifeline' birthDate={sampleData.birthDate}>
        <div className='Lifeline-header'>
          <h2>Lifeline</h2>
          <h4>Where have you been all your life?</h4>
        </div>
        <Year year={new Date().getFullYear()} />
      </div>
    )
  }
}

export default Lifeline
