import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getPosts, upVote, downVote } from '../../actions'
import { NavLink } from 'react-router-dom'

class Home extends Component {
  componentDidMount () {
    // get post immediately after component is mounted
    this.props.getPosts()
  }

  handleUpVote (guid) {
    // passing guid to determine which topic to upvote
    this.props.upVote(guid)
  }

  handleDownVote (guid) {
    // passing guid to determine which topic to downvote
    this.props.downVote(guid)
  }

  render () {
    return (
      <div>
        <div className='row'>
          <div className='col-sm'>
            <NavLink to='/addPost' className='btn btn-primary'>Add Topic</NavLink>
          </div>
        </div>

        <div className='row'>
          <div className='col-sm'>
            <ul className='list-group'>
              {this.props.posts.length > 0 ? '' : (<li className='list-group-item'>No topic found</li>)}
              {this.props.posts.sort((a, b) => b.upvote - a.upvote).slice(0, 10).map((post, i) => {
                return (
                  <li key={i} className='list-group-item'>
                    <div className='post-container'>
                      <div className='post-vote'>
                        <span onClick={this.handleUpVote.bind(this, post.guid)}><i className='material-icons'>thumb_up</i> {post.upvote}</span>
                        <span onClick={this.handleDownVote.bind(this, post.guid)}><i className='material-icons'>thumb_down</i> {post.downvote}</span>
                      </div>
                      <p>{post.title}</p>
                    </div>
                  </li>
                )
              })}
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
