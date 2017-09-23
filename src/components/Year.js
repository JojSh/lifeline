import React, { Component } from 'react'
import Month from './Month'

class Year extends Component {

  render () {
    const thisYear = this.props.year
    return (
      <div className='Year'>
        <div>{thisYear}</div>
        <div className='monthsWrapper'>
          <Month name={'Jan'} />
          <Month name={'Feb'} />
          <Month name={'Mar'} />
          <Month name={'Apr'} />
          <Month name={'May'} />
          <Month name={'Jun'} />
          <Month name={'Jul'} />
          <Month name={'Aug'} />
          <Month name={'Sep'} />
          <Month name={'Oct'} />
          <Month name={'Nov'} />
          <Month name={'Dec'} />
        </div>
      </div>
    )
  }
}

export default Year
