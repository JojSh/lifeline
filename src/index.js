import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// import registerServiceWorker from './registerServiceWorker'
import createAtom from 'tiny-atom'
import actions from './actions'

const initialState = {
  newEra: {
    name: '',
    markedCells: []
  },
  savedEras: []
}

const atom = createAtom(initialState, evolve, render)
render()

function render () {
  // console.log(`state on atom render = ${atom.get()}`)
  ReactDOM.render(<App atom={atom} />, document.getElementById('root'))
  // registerServiceWorker()
}

function evolve (get, split, action) {
  actions[action.type](get, split, action.payload)
}
