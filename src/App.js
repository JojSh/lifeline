import React, { Component } from 'react'
import './App.css'
import Year from './components/Year'
import sampleData from './sampleData'

class App extends Component {
  handleSave () {
    //
  }

  render () {
    const { atom } = this.props
    const birthYear = sampleData.birthDate.getFullYear()
    const thisYear = new Date().getFullYear()
    const yearsSinceBirth = []
    for (var i = birthYear; i <= thisYear; i++) yearsSinceBirth.push(i)
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>App</h2>
          <h4>Where have you been all your life?</h4>
        </div>
        <input type='text' placeholder='era name' id='era-input'></input>
        <input type='submit'
          className='name-and-save'
          value='Save'
          onClick={this.handleSave.bind(this)}>
        </input>
        <div className='timeline'>
          {yearsSinceBirth.map((year) => <Year year={year} atom={atom} />)}
        </div>
      </div>
    )
  }
}

export default App
