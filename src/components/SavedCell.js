import React, { Component } from 'react'

class SavedCell extends Component {

  render () {
    const { year, month, markedCells } = this.props

    let cellIsMarked = markedCells.find(cell => {
      return (cell.year === year && cell.month === month)
    })

    const cellMarker = cellIsMarked ? <div className='cell-marker' /> : null
    return (
      <div className='SavedCell'>
        {cellMarker}
      </div>
    )
  }
}

export default SavedCell
