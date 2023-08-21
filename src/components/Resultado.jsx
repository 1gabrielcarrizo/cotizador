import React, {useCallback, useMemo, useRef} from 'react'
import useCotizador from '../hooks/useCotizador'
import { marcas, planes } from '../constants'

const Resultado = () => {
    const { resultado, datos } = useCotizador()
    const {marca, year, plan} = datos
    const yearRef = useRef(year)

    // const [nombreMarca] = marcas.filter(m => m.id === Number(marca)) // sin useCallback
    // const [nombrePlan] = planes.filter(p => p.id === Number(plan)) // sin useCallback
    // const [nombreMarca] = useMemo(() => marcas.filter(m => m.id === Number(marca)), [resultado]) // con useMemo
    // const [nombrePlan] = useCallback(() => planes.filter(p => p.id === Number(plan)), [resultado]) // con useMemo
    const [nombreMarca] = useCallback(marcas.filter(m => m.id === Number(marca)), [resultado]) // con useCallback
    const [nombrePlan] = useCallback(planes.filter(p => p.id === Number(plan)), [resultado]) // con useCallback


    if (resultado === 0) return null

    return (
        <div className='bg-gray-100 text-center mt-5 p-5 shadow'>
            <h2 className='text-gray-600 font-black text-3xl'>
                Resumen
            </h2>

            <p className='my-2'>
                <span className='font-bold'>Marca:</span>
                {nombreMarca.nombre}
            </p>

            <p className='my-2'>
                <span className='font-bold'>Plan:</span>
                {nombrePlan.nombre}
            </p>

            <p className='my-2'>
                <span className='font-bold'>Año del auto:</span>
                {yearRef.current}
            </p>

            <p className='my-2 text-2xl'>
                <span className='font-bold'>Totla de cotizacion:</span>
                {resultado}
            </p>
        </div>
    )
}

export default Resultado