import React from 'react'
import './DetallePelicula.css'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Favoritos } from '../Favoritos/Favoritos';



const DetallePelicula = (favoritos) => {
 
   const [pelicula, setPelicula] = useState({})
   
   const [favorito, setFavorito] = useState(false);
  
  
   
   const{id}= useParams()

   const fetchPelicula = (id) => {

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4fcdaa247f25fc494a1f07e200832cb7`)
      .then((response) => response.json())
      .then((data) => {
        setPelicula(data);
      });
  }


  useEffect(() => {
    fetchPelicula(id);
  }, [id]);


  
 


  function agregarFavorito(){

    if(favorito){
      // eliminarFavoritos(pelicula)
      setFavorito(false)
    }else{
      // agregarFavoritos(pelicula)
      setFavorito(true)
    }
     
  }



  const urlPath = "https://image.tmdb.org/t/p/original";

  return (
    <>
      <div className='detalle-pelicula'>
      <div>
  
      <img src={`${urlPath + pelicula.poster_path}`} width="300" alt="" />
      </div>
      <div className='info-pelicula'>
        <h3>{pelicula.title}</h3>
        <h4>{pelicula.release_date}</h4>
      {/* <div>

      {
          pelicula.genres.map( genre => (
            <span key={genre.genre.id}>
              {genre.name}
            </span> 
          ))
        }
      </div> */}
      <p>{pelicula.overview}</p>

      
      </div>
       <div className="icon-favorito">
            {favorito ? (
              <i className="bi bi-dash-circle icon-fav" onClick={agregarFavorito}> <Favoritos key={favoritos.id} favorito={favorito} /></i>
            ) : (
              <i className="bi bi-plus-circle-fill icon-fav" onClick={agregarFavorito} > <Favoritos key={favoritos.id} favorito={favorito} /></i>
            )}
          </div>
    
      </div>

      <Favoritos key={favoritos.id} favoritos={favoritos}/>
    </>
  )
}

export { DetallePelicula } 
