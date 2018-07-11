import { Router } from 'express'
import { getPosts, createPost } from './controllers'

const routes = new Router()
routes.get('/posts', getPosts)
routes.post('/post', createPost)

export default routes
