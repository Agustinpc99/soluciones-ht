import React from 'react'
import { useState } from 'react'
import { Link as Anchor } from 'react-router-dom'

export const Header = () => {
    const [mostrar,setMostrar] = useState("hidden")
    function showHidde(){
        mostrar == "hidden" ? setMostrar("") : setMostrar("hidden")

    }
  return (
    <div className='bg-black'>
        <div className='flex items-center p-2'>
            <h1 className='text-white flex gap-1 text-2xl flex-grow'>Soluciones<p className='text-red-600 font-bold'>HT</p></h1>
            <button onClick={showHidde}><img src="/menu.png" alt="" className='h-8' /></button>
        </div>
        <nav className={mostrar+" flex flex-col items-center py-3 gap-2"} >
                <Anchor to="/" className='border p-1 bg-white text-black rounded lg:p-2 lg:font-semibold w-40 text-center text-xl hover:bg-black hover:text-white hover:border-white'>Inicio</Anchor>
                <Anchor to="/nosotros" className='border p-1 bg-white text-black rounded lg:p-2 lg:font-semibold w-40 text-center text-xl hover:bg-black hover:text-white hover:border-white'>Nosotros</Anchor>
                <Anchor to="/contacto" className='border p-1 bg-white text-black rounded lg:p-2 lg:font-semibold w-40 text-center text-xl hover:bg-black hover:text-white hover:border-white'>Contacto</Anchor>
            </nav>
        </div>
  )
}
