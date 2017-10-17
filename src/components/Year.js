import React, { Component } from 'react'
import Month from './Month'
import Cell from './Cell'

class Year extends Component {

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
    const markedCells = atom.get().newEra.markedCells
    return months.map((month, index) => {
      return (
        <Cell
          year={year}
          month={month}
          markedCells={markedCells}
          key={index}
        />
      )
    })
  }

  renderSavedCells (months) {
    const { atom, year } = this.props
    const savedEras = atom.get().savedEras
    const colours = ['c-turq', 'c-mint', 'c-orange', 'c-purple', 'c-blue', 'c-yellow', 'c-pink']
    return savedEras.map(function (savedEra, index, arr) {
      const markedCells = savedEra.markedCells
      const cellColour = colours[index % 7]
      const graphClass = `saved-graph ${cellColour}`

      return (
        <div className={graphClass}>
          <div className='era-label'>{savedEra.name}</div>
          {
            months.map((month, index) => {
              return (
                <Cell
                  year={year}
                  month={month}
                  markedCells={markedCells}
                  key={index}
                />
              )
            })
          }
        </div>
      )
    })
  }

  render () {
    const { year } = this.props
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
        <div className='graph saved-graphs'>
          {
            this.renderSavedCells(months)
          }
        </div>
      </div>
    )
  }
}

export default Year
