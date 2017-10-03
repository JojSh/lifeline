import React, { Component } from 'react'
import Month from './Month'
import Cell from './Cell'

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
    console.log('rows = ', this.state.savedGraphRows)
    debugger
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
              months.map((month, index) => {
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
          </div>
        </div>
        <div className='graph'>
          {
            months.map((month, index) => {
              return (
                <Cell
                  year={year}
                  month={month}
                  atom={atom}
                  key={index}
                />
              )
            })
          }
        </div>
        <div className='saved-graphs'>

        </div>
      </div>
    )
  }
}

export default Year
