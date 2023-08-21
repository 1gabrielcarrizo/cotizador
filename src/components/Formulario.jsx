import React, { Fragment } from 'react'
import { marcas, planes, years } from '../constants'

const Formulario = () => {
    return (
        <>
            <form>
                <div className="my-5">
                    <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">
                        Marca
                    </label>
                    <select name="marca" id="" className='w-full p-3 bg-white border border-gray-200'>
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
                    <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">
                        Año
                    </label>
                    <select name="marca" id="" className='w-full p-3 bg-white border border-gray-200'>
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
                    <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">
                        Planes
                    </label>
                    <div className='flex gap-3 items-center'>
                        {planes.map((plan) => (
                            <Fragment key={plan.id}>
                            <label htmlFor="">{plan.nombre}</label>
                            <input type="radio" name="plan" id={plan.id} />
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