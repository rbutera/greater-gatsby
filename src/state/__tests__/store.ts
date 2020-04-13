import store from '../store'

describe('state/store', () => {
  it('exists', () => {
    expect(store).toBeDefined()
  })

  it('has dispatch and getState methods', () => {
    expect(store.dispatch).toBeDefined()
    expect(typeof store.dispatch).toBe('function')
    expect(store.getState).toBeDefined()
    expect(typeof store.getState).toBe('function')
    expect(() => {
      store.dispatch({type: 'TEST'})
    }).not.toThrow()
    expect(() => {
      store.getState()
    }).not.toThrow()
  })
})
