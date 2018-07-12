import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createPost } from '../../actions'

class AddPost extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange (e) {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit (e) {
    e.preventDefault()
    this.props.createPost(this.state)
  }

  handleSubmit () {
    this.props.createPost(this.state)
  }

  render () {
    const { title } = this.state
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label htmlFor='title'>Post Title</label>
            <input id='title' className='form-control' name='title' placeholder='Please enter post title' value={title} onChange={this.onChange} />
          </div>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    createPost
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(AddPost)
