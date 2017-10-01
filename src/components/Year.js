import React, { Component } from 'react'
import Month from './Month'
import Cell from './Cell'

class Year extends Component {
  render () {
    const { atom, year } = this.props

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return (
      <div className='Year'>
        <div className='year-title'>{year}</div>
        <div className='months-btn-wrapper'>
          <div className='months-wrapper'>
            {
              months.map((month) => {
                return (
                  <Month
                    year={year}
                    month={month}
                    atom={atom}
                  />
                )
              })
            }
          </div>
        </div>
        <div className='graph-wrapper'>
          {
            months.map((month) => {
              return (
                <Cell
                  year={year}
                  month={month}
                  atom={atom}
                />
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Year
