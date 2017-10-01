import React, { Component } from 'react'

class Month extends Component {

  render () {
    const { atom, month, year } = this.props
    const { split } = this.props.atom
    const monthId = `m-${month}-${year}`
    const markedCells = atom.get().markedCells
    let cellIsMarked = markedCells.find(cell => {
      return (cell.year === year && cell.month === month)
    })
    const toggleCell = cellIsMarked ? 'unmarkCell' : 'markCell'

    return (
      <div className='Month'
        id={monthId}
        onClick={() => split(toggleCell, { year, month })}
      >
        {this.props.month}
      </div>
    )
  }
}

export default Month
