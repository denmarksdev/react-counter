import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import counterReducer from './reducer'
import logger from 'redux-logger'

import DisplayCounter from './DisplayCounter'
import Counter from './Counter'
import Ola from './Ola'


let store = createStore(
  counterReducer,
  applyMiddleware(logger)
)

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Container>
          <DisplayCounter />
          <Counter />
          <Ola />
        </Container>
      </Provider>
    );
  }
}

export default App;
