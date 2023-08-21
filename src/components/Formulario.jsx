import React, { Fragment } from 'react'
import { marcas, planes, years } from '../constants'
import useCotizador from '../hooks/useCotizador'
import Error from './Error'

const Formulario = () => {

    // const {modal, setModal, cambiarSetModal} = useCotizador() // recibe las funciones que se encuentran en el value
    const {datos, handleChangeDatos, error, setError} = useCotizador()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(Object.values(datos).includes('')){ // si alguno de los valores es un string vacio...
            setError('Todos los campos son obligatorios')
            return
        }
        setError('') // en caso de que se completen los campos, eliminar el mensaje de error
    }

    return (
        <>
        {error && <Error/>}
            <form onSubmit={handleSubmit}>
                <div className="my-5">
                    <label htmlFor="marca" className="block mb-3 font-bold text-gray-400 uppercase">
                        Marca
                    </label>
                    <select onChange={(e) => handleChangeDatos(e)} name="marca" id="marca" className='w-full p-3 bg-white border border-gray-200' value={datos.marca}>
                        <option value="">Seleccione una marca</option>
                        {marcas.map((marca) => (
                            <option
                                key={marca.id}
                                value={marca.id} //se almacena en el state
                            >{marca.nombre}</option>
                        ))}
                    </select>
                </div>

                <div className="my-5">
                    <label htmlFor="year" className="block mb-3 font-bold text-gray-400 uppercase">
                        Año
                    </label>
                    <select onChange={(e) => handleChangeDatos(e)} name="year" id="year" className='w-full p-3 bg-white border border-gray-200' value={datos.year}>
                        <option value="">Seleccione un año</option>
                        {years.map((year) => (
                            <option
                                key={year}
                                value={year} //se almacena en el state
                            >{year}</option>
                        ))}
                    </select>
                </div>

                <div className="my-5">
                    <label className="block mb-3 font-bold text-gray-400 uppercase">
                        Planes
                    </label>
                    <div className='flex gap-3 items-center'>
                        {planes.map((plan) => (
                            <Fragment key={plan.id}>
                            <label>{plan.nombre}</label>
                            <input type="radio" name="plan" value={plan.id} onChange={(e) => handleChangeDatos(e)} />
                            </Fragment>
                        ))}
                    </div>
                </div>
                <input type="submit" value="Cotizar" className='w-full bg-blue-500 hover:bg-blue-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold' />
            </form>
        </>
    )
}

export default Formulario