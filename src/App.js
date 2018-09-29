import React, { Component } from 'react'
import './App.css'
import Year from './components/Year'
import sampleData from './sampleData'

class App extends Component {

  saveEraName (e) {
    this.props.atom.split('updateNewEraName', e.currentTarget.value)
  }

  handleSaveEra () {
    const atom = this.props.atom
    const { newEra } = atom.get()
    atom.split('saveNewEra', newEra)
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
          <h2>Lifeline</h2>
          <h4>Where have you been all your life?</h4>
        </div>
        <input
          type='text'
          placeholder='era name'
          id='era-input'
          onKeyUp={(e) => this.saveEraName(e)}
        ></input>
        <input type='submit'
          className='name-and-save'
          value='Save'
          onClick={() => { this.handleSaveEra() }}>
        </input>
        <div className='timeline'>
          {yearsSinceBirth.map((year, index) =>
            <Year year={year}
              atom={atom}
              key={index}
          />)}
        </div>
      </div>
    )
  }
}

export default App
