import React, { Component } from 'react'
import Month from './Month'

class Year extends Component {

  render () {
    const thisYear = this.props.year
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return (
      <div className='Year'>
        <div className='year-title'>{thisYear}</div>
        <div className='months-wrapper'>
          {months.map((monthName) => <Month name={monthName} />)}
        </div>
      </div>
    )
  }
}

export default Year
