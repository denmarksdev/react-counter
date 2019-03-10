import React from 'react';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';

export const DisplayCounter = ({ count }) => {

    return (
        <Alert variant='primary'>
            O contador está em {count}
        </Alert>
    )
}

const mapStateToProps = state => {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps)(DisplayCounter)
