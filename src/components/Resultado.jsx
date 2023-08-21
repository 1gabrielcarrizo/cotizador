import React from 'react'
import useCotizador from '../hooks/useCotizador'

const Resultado = () => {
    const { resultado, datos } = useCotizador()
    const {marca, year, plan} = datos

    if (resultado === 0) return null

    return (
        <div>{resultado}</div>
    )
}

export default Resultado