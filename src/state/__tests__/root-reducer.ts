import rootReducer, {reducers, initialState} from '../root-reducer'

describe('rootReducer', () => {
  it('exists', () => {
    expect(rootReducer).toBeDefined()
  })

  describe('reducers and initialState', () => {
    it('exist', () => {
      expect(reducers).toBeDefined()
      expect(initialState).toBeDefined()
      expect(Object.keys(reducers).length).toBeGreaterThan(0)
      expect(Object.keys(initialState).length).toBeGreaterThan(0)
    })

    it('has counter', () => {
      expect(reducers.counter).toBeDefined()
      expect(initialState.counter).toBeDefined()
    })
  })
})
