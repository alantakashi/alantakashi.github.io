import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import morgan from 'morgan'
// import { middlewaresConfig } from './config'
import { PostsRoutes } from './components'
const app = express()

// middlewaresConfig()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'))

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Cache-Control, Key, Access-Control-Allow-Origin')
  next()
})
app.use('/v2', [PostsRoutes])
const port = process.env.PORT || 8089

http.createServer(app).listen(port, function (err) {
  if (err) return console.log(err)
  console.log(`API server running on port: ${port}`)
})
