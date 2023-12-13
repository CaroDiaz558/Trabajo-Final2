import React from 'react'
import './Principal.css'
import { useState, useEffect } from "react";

const Principal = () => {

    const urlPath = "https://image.tmdb.org/t/p/original";

    const [peliculas, setPeliculas] = useState([]);
   
  
  
    useEffect(()=> {
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=4fcdaa247f25fc494a1f07e200832cb7&language=es-ES`)
      .then(response => response.json())
      .then(data => {
        setPeliculas(data.results)
        console.log(data.results)
      })
    },[])


  return (
    <>
       <div>Gestion Peliculas</div>
      <div>
        {peliculas.map((pelicula) => (
          <div key={pelicula.id} className="item">
            <img src={`${urlPath + pelicula.poster_path}`} width= "500" alt="" />
            <h3>{pelicula.original_title}</h3>
          </div>
        ))}
      </div>
      
    </>
  )

}

export { Principal } 
