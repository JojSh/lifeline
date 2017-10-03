import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import createAtom from 'tiny-atom'

const initialState = {
  newEra: {
    name: '',
    markedCells: []
  },
  eras: []
}

const atom = createAtom(initialState, evolve, render)
render()

function render () {
  console.log(atom.get())
  ReactDOM.render(<App atom={atom} />, document.getElementById('root'))
  registerServiceWorker()
}

function evolve (get, split, action) {
  const state = get()
  const { type, payload } = action
  let newMarkedCells = []

  if (type === 'markCell') {
    newMarkedCells = [...state.newEra.markedCells, payload]
    split({
      newEra: Object.assign(state.newEra, {
        markedCells: newMarkedCells
      })
    })
  } else if (type === 'unmarkCell') {
    const indexToDelete = state.newEra.markedCells.findIndex((markedCell) => {
      return (markedCell.year === payload.year && markedCell.month === payload.month)
    })
    newMarkedCells = [
      ...state.newEra.markedCells.slice(0, indexToDelete),
      ...state.newEra.markedCells.slice(indexToDelete + 1)
    ]
    split({
      newEra: Object.assign(state.newEra, {
        markedCells: newMarkedCells
      })
    })
  } else if (type === 'updateNewEraName') {
    split({
      newEra: Object.assign(state.newEra, {
        name: payload
      })
    })
  }

}
