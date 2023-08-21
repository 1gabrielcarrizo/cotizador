export const marcas = [
    { id: 1, nombre: 'Argentina' },
    { id: 2, nombre: 'Chile' },
    { id: 3, nombre: 'Corea del Sur' }
]

const yearMax = new Date().getFullYear()

// creamos una array con los ultimos 20 años
export const years = Array.from(new Array(20), (valor, index) => yearMax - index)

export const planes = [
    { id: 1, nombre: 'Basico' },
    { id: 2, nombre: 'Completo' }
]