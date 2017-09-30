import React, { Component } from 'react'

class Graph extends Component {

  render () {
    const { atom, year, month } = this.props
    const markedCells = atom.get().markedCells
    let cellIsMarked = markedCells.find(cell => {
      return (cell.year === year && cell.month === month)
    })

    const cellMarker = cellIsMarked ? <div className='cell-marker' /> : null
    return (
      <div className='Graph'>
        {cellMarker}
      </div>
    )
  }
}

export default Graph
