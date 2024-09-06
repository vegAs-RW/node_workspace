const { greet, bye } = require('../service/greetings')

describe('Testing our Greetings Service', () => {
  test('Should return a welcome message with the name', () => {
    expect(greet('Jonh')).toBe('Hello, Jonh!')
  })

  it('Should return a goodbye message with the name', () => {
    expect(bye('Jonh')).toBe('Goodbye, Jonh!')
  })
})
