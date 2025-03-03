import React from 'react'
import { Link as Anchor } from 'react-router-dom'

export const Footer = () => {
  return (
    <>
    <footer className="flex flex-col bg-black text-white py-3 px-1 items-center justify-evenly">
        <div className='flex gap-20 items-center py-2'>
        <div>
          <nav className='flex flex-col gap-3 items-center'>
            <h3 className='border-b-2'>Nuestras Redes</h3>
            <a href=""><img className='h-6 md:h-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/480px-Facebook_logo_%28square%29.png" alt="" /></a>
            <a href=""><img className='h-6 md:h-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="" /></a>
            <a href=""><img className='h-6 md:h-10' src="https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png" alt="" /></a>
          </nav>
        </div>
        <div>
          <nav className='flex flex-col gap-3 md:text-2xl items-center'>
            <Anchor className=' text-center' to="/">Inicio</Anchor>
            <Anchor className=' text-center' to="/nosotros">Nosotros</Anchor>
            <Anchor className=' text-center' to="/contacto">Contacto</Anchor>
          </nav>
        </div>
        </div>
        <p className='text-white'>contacto@solucionesht.com</p>
    </footer>
    </>
  )
}
