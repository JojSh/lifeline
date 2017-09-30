import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import createAtom from 'tiny-atom'

const atom = createAtom({ markedCells: [] }, evolve, render)
render()

function render () {
  console.log(atom.get())
  ReactDOM.render(<App atom={atom} />, document.getElementById('root'))
  registerServiceWorker()
}

function evolve (get, split, action) {
  const state = get()
  const { type, payload } = action

  if (type === 'markCell') {
    split({ markedCells: [
      ...state.markedCells,
      payload
    ]})
  } else if (type === 'unmarkCell') {
    const indexToDelete = state.markedCells.findIndex((markedCell) => {
      return (markedCell.year === payload.year && markedCell.month === payload.month)
    })
    const newMarkedCells = state.markedCells
    newMarkedCells.splice(indexToDelete, 1)
    split({ markedCells: newMarkedCells })
  }
}
