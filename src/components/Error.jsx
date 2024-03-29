import React from 'react'
import useCotizador from '../hooks/useCotizador'

const Error = () => {
    const { error } = useCotizador() // lo leemos del estado global
    return (
        <div className='border text-center border-red-400 bg-red-100 text-red-700 py-3'>
            <p>{error}</p>
        </div>
    )
}

export default Error