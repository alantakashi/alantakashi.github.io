import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import Main from './components/main'
import Home from './components/home/'
import { AddPost } from './components/posts/'
import reducers from './reducers'

const middleware = applyMiddleware(thunk, logger)
const store = createStore(reducers, middleware)

const Routes = (

  <Provider store={store}>
    <BrowserRouter>
      <Main>
        <Route exact path='/' component={Home} />
        <Route path='/addPost' component={AddPost} />
      </Main>
    </BrowserRouter>
  </Provider>
)

render(Routes, document.getElementById('app'))
