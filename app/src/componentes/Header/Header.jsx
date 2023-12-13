import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import './Header.css'
import logo from '../assets/logo.png'



const Header = () => {
  return (
    <>
       
       <header className='header'>
        <nav className='navBar'>
            <div className='img'>
            <NavLink to='/' ><img src={logo} width="60"alt="" className='icon'/></NavLink>
             </div>
           <div className='btn'>
             <NavLink to='busqueda' target='_blank' className='busqueda'><i className="bi bi-search"></i> </NavLink>
             <NavLink to='favoritos' target='_blank' className='favoritos'>Favoritos</NavLink>
            </div> 
        </nav>
       </header>

      
    </>
  )
}

export { Header }
