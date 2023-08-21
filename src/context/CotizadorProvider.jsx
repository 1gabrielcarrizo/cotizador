import React, { createContext } from 'react'

const CotizadorContext = createContext()

const CotizadorProvider = ({ children }) => { // el provider es de donde salen los datos
    return (
        <CotizadorContext.Provider
        value={{
            
        }}>
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}

export default CotizadorContext