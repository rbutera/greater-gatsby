/** a boilerplate/example reducer for countering redux */
import {Reducer, Action} from 'redux'

export const INCREMENT = 'counter/INCREMENT'

export interface IncrementAction extends Action {
  type: 'counter/INCREMENT'
  payload: number
}

/** action creator */
export function incrementCount(input: number): IncrementAction {
  if (!input) {
    throw new Error('missing input')
  }

  return {type: INCREMENT, payload: input}
}

export type CounterState = {
  count: number
}

export const initialState: CounterState = {
  count: 0,
}

const reducer: Reducer<CounterState, IncrementAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + action.payload,
      }
    default:
      return state
  }
}

export default reducer
