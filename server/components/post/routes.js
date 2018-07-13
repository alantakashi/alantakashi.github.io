import { Router } from 'express'
import { getPosts, createPost, postUpVote, postDownVote } from './controllers'

const routes = new Router()
routes.get('/posts', getPosts)
routes.post('/post', createPost)
routes.post('/post/upvote/:guid', postUpVote)
routes.post('/post/downvote/:guid', postDownVote)

export default routes
