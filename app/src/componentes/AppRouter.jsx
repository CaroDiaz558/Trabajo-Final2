import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Busqueda, Principal, Pelicula, Header, Footer, DetallePelicula, Favoritos } from '../componentes/index'


const AppRouter = () => {

  // const[producto, favoritos, agregarFavoritos, eliminarFavoritos]= Busqueda
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
     <Route index element={<Principal/>}/>
        <Route path='busqueda' element={<Busqueda />}/>
        <Route path= 'busqueda'element={<Pelicula/>}/>
        <Route path='/pelicula/:id' element={<DetallePelicula/>}/>
        <Route path='favoritos' element ={<Favoritos/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export { AppRouter }
