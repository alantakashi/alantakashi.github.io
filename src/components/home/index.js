import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getPosts } from '../../actions'
import { NavLink } from 'react-router-dom'

class Home extends Component {
  componentDidMount () {
    this.props.getPosts()
  }

  render () {
    return (
      <div>
        <div className='row'>
          <div className='col-sm'>
            <NavLink to='/addPost' className='btn btn-primary'>ADD POST</NavLink>
          </div>
        </div>

        <div className='row'>
          <div className='col-sm'>
            <ul className='list-group'>
              <li className='list-group-item'>Cras justo odio</li>
              <li className='list-group-item'>Dapibus ac facilisis in</li>
              <li className='list-group-item'>Morbi leo risus</li>
              <li className='list-group-item'>Porta ac consectetur ac</li>
              <li className='list-group-item'>Vestibulum at eros</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.posts
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getPosts
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
