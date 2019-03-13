import { createStore } from 'redux'
import rootReducer from '../reducers/index'

export default function configureStore(init) {
  const store = createStore(
    rootReducer,
    init,
    window.devToolsExtension ? window.devToolsExtension() : undefined
  )

  return store
}