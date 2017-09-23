import React, { Component } from 'react'
import Month from './Month'
import Graph from './Graph'

class Year extends Component {

  render () {
    const yearName = this.props.year
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return (
      <div className='Year'>
        <div className='year-title'>{yearName}</div>
        <div className='months-wrapper'>
          {months.map((monthName) => <Month name={monthName} />)}
        </div>

        <div className='graph-wrapper'>
          {months.map((monthName) => <Graph year={yearName} month={monthName} />)}
        </div>
      </div>
    )
  }
}

export default Year
