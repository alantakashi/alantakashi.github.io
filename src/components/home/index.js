import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getPosts, upVote, downVote } from '../../actions'
import { NavLink } from 'react-router-dom'

class Home extends Component {
  componentDidMount () {
    this.props.getPosts()
  }

  handleUpVote (key) {
    this.props.upVote(key)
  }

  handleDownVote (key) {
    this.props.downVote(key)
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
              {
                this.props.posts.map((post, i) => {
                  return (
                    <li key={i} className='list-group-item'>
                      <div className='post-container'>
                        <div className='post-vote'>
                          <span onClick={this.handleUpVote.bind(this, i)}><i className='material-icons'>thumb_up</i> {post.upvote}</span>
                          <span onClick={this.handleDownVote.bind(this, i)}><i className='material-icons'>thumb_down</i> {post.downvote}</span>
                        </div>
                        {post.title}
                      </div>
                    </li>
                  )
                })
              }
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
    getPosts,
    upVote,
    downVote
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
