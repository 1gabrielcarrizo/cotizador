import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='bg-gray-700 py-3 text-center uppercase font-bold text-white mt-auto'>
      Copyright &copy; {year}. All rights reserved. <a className='hover:text-black' href="https://www.linkedin.com/in/1gabrielcarrizo/" target='_blank'>Gabriel</a>
    </footer>
  )
}

export default Footer