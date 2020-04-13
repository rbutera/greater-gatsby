/** this file serves as a boilerplate/ example test for a redux reducer */

import reducer, {
  incrementCount,
  INCREMENT,
  initialState,
  CounterState,
} from '../counter'

describe('state/counter', () => {
  describe('INCREMENT', () => {
    it('exists', () => {
      expect(INCREMENT).toBeDefined()
      expect(typeof INCREMENT).toBe('string')
    })
  })

  describe('initialState', () => {
    it('exists', () => {
      expect(initialState).toBeDefined()
    })

    it('has a count property', () => {
      expect(initialState.count).toBeDefined()
    })
  })

  describe('action creator: incrementCount', () => {
    it('exists', () => {
      expect(incrementCount).toBeDefined()
    })

    it('throws if no input', () => {
      expect(() => {
        // @ts-ignore-line
        incrementCount()
      }).toThrow()
    })

    it('creates an action with type INCREMENT and with given payload', () => {
      expect(incrementCount(1)).toStrictEqual({type: INCREMENT, payload: 1})
      expect(incrementCount(33)).toStrictEqual({type: INCREMENT, payload: 33})
      expect(incrementCount(7)).toStrictEqual({type: INCREMENT, payload: 7})
    })
  })

  describe('testReducer', () => {
    it('exists', () => {
      expect(reducer).toBeDefined()
      expect(typeof reducer).toBe('function')
    })

    it('increments state.count by payload', () => {
      const initial: CounterState = {count: 0}
      const result = reducer(initial, incrementCount(1336))
      expect(result).toBeDefined()
      expect(result.count).toBe(1336)
      const secondResult = reducer(result, incrementCount(1))
      expect(secondResult.count).toBe(1337)
    })
  })
})
