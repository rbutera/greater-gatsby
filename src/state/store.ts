import {createStore, applyMiddleware, Store} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer, {initialState} from './root-reducer'
import middleware from './middleware'

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
})

const store: Store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(...middleware)
    // Other store enhancers if any
  )
)

export default store
