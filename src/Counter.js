import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './Counter.css'
import { connect } from 'react-redux'

import { increment, decrement } from './actions'

export const Counter = ({ count, increment, decrement }) => {

    return (
        <Card className='card-container' >
            <Card.Body>
                <Card.Title className='titulo'>Contador: {count}</Card.Title>
                <Button className='increment' onClick={ ()=> increment(10) } >+</Button>
                <Button className='decrement' onClick={ ()=>  decrement(20) } >-</Button>
            </Card.Body>
        </Card>
    )
}

const mapStateToProps = state => {
    return {
        count: state.count
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increment: (value) => dispatch(increment(value)),
        decrement: (value) => dispatch(decrement(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)