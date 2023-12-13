import React,  {useState}from 'react'
import { Pelicula } from '../Pelicula/Pelicula';


const Favoritos = (favorito) => {


    
  const urlPath = "https://image.tmdb.org/t/p/original";

  const [favoritos, setFavoritos] = useState([]);

  
  function agregarFavoritos(pelicula){
    const nuevoFavoritos= [...favoritos]
    nuevoFavoritos.push(pelicula)
    setFavoritos(nuevoFavoritos)
    console.log(nuevoFavoritos)
  }

  function eliminarFavoritos(pelicula){
    const nuevoFavoritos = favoritos.filter(e => e.id !== pelicula.id )
    setFavoritos(nuevoFavoritos)
    console.log(nuevoFavoritos)
  }

  
  function agregarFavorito(){

    if(favorito){
      eliminarFavoritos(pelicula)
    
    }else{
      agregarFavoritos(pelicula)
      
    }
     
  }


  return (
    <>
      <div>Lista de tus Favoritos</div>

      {
        favoritos.map((favorito)=>{
          <Pelicula key={favorito.id} pelicula={favorito} />
        })
      }
     
      <div>
        </div>
      


    </>
  )
}

export {Favoritos} 
