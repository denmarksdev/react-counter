export const TYPE_INCREMENT = 'INCREMENT';
export const increment = (value) => {
    return {
        type: TYPE_INCREMENT,
        value
    }
}

export const TYPE_DECREMENT = 'DECREMENT';
export const decrement = value => {
    return {
        type: TYPE_DECREMENT,
        value
    }
}
