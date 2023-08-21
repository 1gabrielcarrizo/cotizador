import React, { createContext, useState } from 'react'

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

    const handleChangeDatos = (e) => {
        setDatos({
            ...datos, // cuando se trabaje con objetos, hay que usar el spread operator
            [e.target.name] : e.target.value
        })
    }

    return (
        <CotizadorContext.Provider
        value={{
            datos,
            handleChangeDatos,
            error,
            setError
        }}>
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}

export default CotizadorContext