import { GET_POSTS } from '../types'

const INITIAL_STATE = {
  posts: []
}

export default (state = INITIAL_STATE, action) => {
  console.log('action', action)
  switch (action.type) {
    case GET_POSTS:
      return {...state, posts: [...action.payload]}

    default:
      return state
  }
}
