import React, { Component } from 'react'

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

  }

  render () {
    const { title } = this.state
    return (
      <div>
        <form>
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

export { AddPost }
