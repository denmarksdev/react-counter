import React from 'react'
import PropTypes from 'prop-types'

const Ola = ({ nome }) => {
    return (
        <span>Olá {nome}</span>
    )
}

Ola.propTypes = {
    nome: PropTypes.string
}

Ola.defaultProps = {
    nome: 'Novo homem'
}

export default Ola
