import React from 'react'

export const Hero = () => {
  return (
    <div className='relative'>
        <img src="/oficinas.jpg" alt="Banner" className='w-screen h-96 md:h-auto object-cover' />
        <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold text-center bg-black bg-opacity-65">Nosotros tenemos tus soluciones.</h2>
    </div>
  )
}
