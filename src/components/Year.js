import React, { Component } from 'react'
import Month from './Month'
import Cell from './Cell'
import SavedCell from './SavedCell'

class Year extends Component {
  constructor () {
    super()
    this.state = {
      savedGraphRows: 0
    }
  }

  onSave () {
    const currentRows = this.state.savedGraphRows
    this.setState({
      savedGraphRows: currentRows + 1
    })
  }

  renderMonths (months) {
    const { atom, year } = this.props
    return months.map((month, index) => {
      return (
        <Month
          year={year}
          month={month}
          atom={atom}
          key={index}
        />
      )
    })
  }

  renderCells (months) {
    const { atom, year } = this.props
    return months.map(function (month, index) {
      // debugger
      // this.renderCell(month, index)
      return (
        <Cell
          year={year}
          month={month}
          atom={atom}
          key={index}
        />
      )
    }) // .bind(this))
  }

  // renderCell (month, index) {
  //   const { atom, year } = this.props
  //   return (
  //     <Cell
  //       year={year}
  //       month={month}
  //       atom={atom}
  //       key={index}
  //     />
  //   )
  // }

  renderSavedCells (months) {
    const { atom, year } = this.props
    const savedEras = atom.get().savedEras
    const lastSavedEra = savedEras.pop()
  }

  render () {
    const { atom, year } = this.props
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return (
      <div className='Year'>
        <div className='year-title'>{year}</div>
        <div className='months-btn-wrapper'>
          <div className='months-wrapper'>
            {
              this.renderMonths(months)
            }
          </div>
        </div>
        <div className='graph'>
          {
            this.renderCells(months)
          }
        </div>
        <div className='saved-graphs'>
          {
            this.renderSavedCells(months)
          }
        </div>
      </div>
    )
  }
}

export default Year
