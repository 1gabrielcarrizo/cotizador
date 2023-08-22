import React from 'react'
import Formulario from './Formulario'
import useCotizador from '../hooks/useCotizador'
import Spinner from './Spinner'
import Resultado from './Resultado'
import Footer from './Footer'

const AppSeguro = () => {

  const { cargando } = useCotizador()

  return (
    <div className='flex flex-col min-h-screen'>
      <header className='my-10'>
        <h1 className="text-white text-center text-4xl font-black">
          Cotizador de Seguros de Autos
        </h1>
      </header>

      <main className='bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10 mb-10'>
        <Formulario />
        {cargando ? <Spinner /> : <Resultado />}
      </main>
      <Footer/>
    </div>
  )
}

export default AppSeguro