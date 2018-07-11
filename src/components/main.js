import React, { Component } from 'react'

class Main extends Component {
  render () {
    return (
      <div id='root'>
        <div className='container'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Main
