import React, { Component } from 'react'
import './App.css'
import Year from './components/Year'
import sampleData from './sampleData'

class App extends Component {

  render () {
    const birthYear = sampleData.birthDate.getFullYear()
    const thisYear = new Date().getFullYear()
    const yearsSinceBirth = []
    for (var i = birthYear; i < thisYear; i++) yearsSinceBirth.push(i)
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>App</h2>
          <h4>Where have you been all your life?</h4>
        </div>
        <div className='timeline'>
          {yearsSinceBirth.map((year) => < Year year={year} />)}
        </div>
      </div>
    )
  }
}

export default App
