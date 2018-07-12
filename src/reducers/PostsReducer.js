import { GET_POSTS_SUCCESS, ADD_POST_SUCCESS, UPVOTE_POST_SUCCESS, DOWNVOTE_POST_SUCCESS } from '../types'

const INITIAL_STATE = {
  posts: []
}

export default (state = INITIAL_STATE, action) => {
  console.log('action', action)
  switch (action.type) {
    case GET_POSTS_SUCCESS:
      return {...state, posts: [...action.payload]}

    case ADD_POST_SUCCESS:
      return {...state, posts: [...state.posts, ...action.payload]}

    case UPVOTE_POST_SUCCESS:
      return {...state, posts: [...action.payload]}

    case DOWNVOTE_POST_SUCCESS:
      return {...state, posts: [...action.payload]}

    default:
      return state
  }
}
