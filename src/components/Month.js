import React, { Component } from 'react'

class Month extends Component {

  render () {
    return (
      <div className='Month'>
        {this.props.name}
      </div>
    )
  }
}

export default Month
