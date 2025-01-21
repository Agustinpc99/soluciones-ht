import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

export const LayoutMain = (props) => {
  return (
    <div className='flex flex-col h-screen'>
        <Header></Header>
        {props.children}
        <Footer></Footer>
    </div>
  )
}
