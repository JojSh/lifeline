import React, { Component } from 'react'

class Cell extends Component {

  render () {
    const { year, month, markedCells } = this.props
    let cellIsMarked = markedCells.find(cell => {
      return (cell.year === year && cell.month === month)
    })

    const cellMarker = cellIsMarked
      ? <div className='cell-marker c-selecting' />
      : null
    return (
      <div className='Cell'>
        {cellMarker}
      </div>
    )
  }
}

export default Cell
