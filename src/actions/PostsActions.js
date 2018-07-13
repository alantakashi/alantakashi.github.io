import axios from 'axios'
import { GET_POSTS_SUCCESS, GET_POSTS_REJECTED, ADD_POST_SUCCESS, ADD_POST_REJECTED, UPVOTE_POST_SUCCESS, UPVOTE_POST_REJECTED, DOWNVOTE_POST_SUCCESS, DOWNVOTE_POST_REJECTED } from '../types'
import history from '../utils/history'
import { host } from '../config'

// Proceed to /src/config/config.js to modify host
// get, create, upvote and downvote method for post actions, use es6 destructuring method to get host configuration
const getPosts = () => {
  return function (dispatch) {
    axios.get(`${host}posts`).then((response) => {
      dispatch({type: GET_POSTS_SUCCESS, payload: response.data})
    }).catch(err => {
      dispatch({type: GET_POSTS_REJECTED, msg: err})
    })
  }
}

const createPost = (post) => {
  return function (dispatch) {
    axios.post(`${host}post`, post).then(function (response) {
      dispatch({type: ADD_POST_SUCCESS, payload: response.data})
      history.push('/')
    }).catch(function (err) {
      dispatch({type: ADD_POST_REJECTED, payload: err})
    })
  }
}

const upVote = (key) => {
  return function (dispatch) {
    axios.post(`${host}post/upvote/${key}`).then(function (response) {
      dispatch({type: UPVOTE_POST_SUCCESS, payload: response.data})
    }).catch(function (err) {
      dispatch({type: UPVOTE_POST_REJECTED, payload: err})
    })
  }
}

const downVote = (key) => {
  return function (dispatch) {
    axios.post(`${host}post/downvote/${key}`).then(function (response) {
      dispatch({type: DOWNVOTE_POST_SUCCESS, payload: response.data})
    }).catch(function (err) {
      dispatch({type: DOWNVOTE_POST_REJECTED, payload: err})
    })
  }
}

export { getPosts, createPost, upVote, downVote }
