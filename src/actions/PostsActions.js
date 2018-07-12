import axios from 'axios'
import { GET_POSTS_SUCCESS, GET_POSTS_REJECTED, ADD_POST_SUCCESS, ADD_POST_REJECTED } from '../types'

const getPosts = () => {
  return function (dispatch) {
    axios.get('http://localhost:8089/v2/posts').then((response) => {
      dispatch({type: GET_POSTS_SUCCESS, payload: response.data})
    }).catch(err => {
      dispatch({type: GET_POSTS_REJECTED, msg: err})
    })
  }
}

const createPost = (post) => {
  return function (dispatch) {
    axios.post('http://localhost:8089/v2/post', post).then(function (response) {
      dispatch({type: ADD_POST_SUCCESS, payload: response.data})
    }).catch(function (err) {
      dispatch({type: ADD_POST_REJECTED, payload: err})
    })
  }
}

export { getPosts, createPost }
