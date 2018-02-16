import { createStore, applyMiddleware, compose } from 'redux'
import reducer, { intitialState } from './reducers/index'

export default (state = intitialState) => {
  const middlewares = []
  const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose
  // eslint-disable-next-line
  return createStore(
    reducer,
    state,
    composeEnhancers(applyMiddleware(...middlewares))
  )
}
