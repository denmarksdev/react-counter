import { increment, decrement, TYPE_INCREMENT, TYPE_DECREMENT } from './actions'

describe('Actions tests', () => {

    test('Action: increment', () => {
        let incre = increment(10)
        expect(incre).toEqual({
            type: TYPE_INCREMENT,
            value: 10
        })
    })

    test('Action: decrement', () => {
        let decre = decrement(10)
        expect(decre).toEqual({
            type: TYPE_DECREMENT,
            value: 10
        })
    })
})

