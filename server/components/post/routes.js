import { Router } from 'express'
import { getPosts, createPost, postUpVote } from './controllers'

const routes = new Router()
routes.get('/posts', getPosts)
routes.post('/post', createPost)
routes.post('/post/:key', postUpVote)

export default routes
