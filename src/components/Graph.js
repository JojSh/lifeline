import React, { Component } from 'react'

class Graph extends Component {

  render () {
    const sectionId = `${this.props.thisMonth}-${this.props.thisYear}`
    return (
      <div className='Graph' id={sectionId}></div>
    )
  }
}

export default Graph
