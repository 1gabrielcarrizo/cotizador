import React, { createContext, useState } from 'react'
import { calcularMarca, calcularPlan, formatearDinero, obtenerDiferenciaYear } from '../helpers'

const CotizadorContext = createContext()

const CotizadorProvider = ({ children }) => { // el provider es de donde salen los datos

    // aqui se crean las funciones, etc y se las llama en el "value"
    // const [modal, setModal] = useState(false) // forma 1
    // forma 2
    // const cambiarSetModal = () => {
    //     setModal(!modal)
    // }

    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    })
    const [error, setError] = useState('')
    const [resultado, setResultado] = useState(0)
    const [cargando, setCargando] = useState(false)

    const handleChangeDatos = (e) => {
        setDatos({
            ...datos, // cuando se trabaje con objetos, hay que usar el spread operator
            [e.target.name]: e.target.value
        })
    }

    const cotizarSeguro = () => {
        // base
        let resultado = 2000
        // obtener diferencia de años
        const diferencia = obtenerDiferenciaYear(datos.year)
        // restar el 3% por cada año
        resultado -= ((diferencia * 3) * resultado) / 100
        // Europeo recibe un incremento del 30%
        // Americano recibe un incremento del 15%
        // Asiatico recibe un incremento del 5%
        resultado *= calcularMarca(datos.marca)
        // basico recibe un 20%
        // completo recibe un 50%
        resultado *= calcularPlan(datos.plan)
        // formatear dinero
        resultado = formatearDinero(resultado)
        setCargando(true)
        setTimeout(() => {
            setResultado(resultado)
            setCargando(false)
        }, 1000);
    }

    return (
        <CotizadorContext.Provider
            value={{
                datos,
                handleChangeDatos,
                error,
                setError,
                cotizarSeguro,
                resultado,
                cargando
            }}>
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}

export default CotizadorContext