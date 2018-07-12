import { Router } from 'express'
import { getPosts, createPost, postUpVote, postDownVote } from './controllers'

const routes = new Router()
routes.get('/posts', getPosts)
routes.post('/post', createPost)
routes.post('/post/upvote/:key', postUpVote)
routes.post('/post/downvote/:key', postDownVote)

export default routes
