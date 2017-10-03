import React, { Component } from 'react'

class Cell extends Component {

  render () {
    const { atom, year, month } = this.props
    const { markedCells } = atom.get().newEra
    let cellIsMarked = markedCells.find(cell => {
      return (cell.year === year && cell.month === month)
    })

    const cellMarker = cellIsMarked ? <div className='cell-marker' /> : null
    return (
      <div className='Cell'>
        {cellMarker}
      </div>
    )
  }
}

export default Cell
