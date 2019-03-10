import { TYPE_DECREMENT, TYPE_INCREMENT } from './actions'

const initialState = {
    count: 0
}
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPE_INCREMENT:
            return { ...state, count: state.count + action.value }
        case TYPE_DECREMENT:
            return { ...state, count: state.count - action.value }
        default:
            return state
    }
}

export default counterReducer