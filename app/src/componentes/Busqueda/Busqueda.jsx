import React, { useEffect, useState } from "react";
import "./Busqueda.css";
import { Pelicula } from "../Pelicula/Pelicula";

const Busqueda = () => {
  const urlPath = "https://image.tmdb.org/t/p/original";

  const [busqueda, setBusqueda] = useState('');
  const [peliculas, setPeliculas] = useState([]);
  

  const fetchPeliculas = () => {

    fetch(`https://api.themoviedb.org/3/search/movie?query=${busqueda}&api_key=4fcdaa247f25fc494a1f07e200832cb7`)
      .then((response) => response.json())
      .then((data) => {
        setPeliculas(data.results);
        console.log(data.results);
      });
  }

  const cambiarValor = (event) => {
    setBusqueda(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    fetchPeliculas()
  }

  useEffect(() => {
    fetchPeliculas()
  }, []);

 

  return (
    <>
        <div>¿Qué pelicula deseas buscar?</div>
      <div>
        <form onSubmit={handleSubmit} >
          <input type="text" placeholder="Ingrese la Pelicula" value={busqueda} onChange={cambiarValor}/>
          <button type="submit">Buscar</button>
        </form>
      </div>
      <div>
        
        {peliculas.map((pelicula) => (

          <Pelicula key={pelicula.id} pelicula={pelicula} />
                  

        ))}
      </div>
          
     
      </>
  );
};

export { Busqueda };
