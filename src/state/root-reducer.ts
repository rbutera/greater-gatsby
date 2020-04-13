/** combines all the reducers into a single root reducer for the redux store */

import {combineReducers, Reducer} from 'redux'
import counterReducer, {
  initialState as counterInitialState,
  CounterState,
} from './counter'

export type RootReducer = {
  [n: string]: Reducer
}

export const reducers: RootReducer = {
  counter: counterReducer,
}

export type ApplicationState = {
  counter: CounterState
}

export const initialState: ApplicationState = {
  counter: counterInitialState,
}

const reducer = combineReducers(reducers)

export default reducer
