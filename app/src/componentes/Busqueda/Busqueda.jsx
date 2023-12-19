import React, { useEffect, useState } from "react";
import "./Busqueda.css";
import { Pelicula } from "../Pelicula/Pelicula";

const Busqueda = () => {

  const [busqueda, setBusqueda] = useState("");
  const [peliculas, setPeliculas] = useState([]);

  const fetchPeliculas = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${busqueda}&api_key=4fcdaa247f25fc494a1f07e200832cb7&language=es-ES`
    )
      .then((response) => response.json())
      .then((data) => {
        setPeliculas(data.results);
        console.log(data.results);
      });
  };

  const cambiarValor = (event) => {
    setBusqueda(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchPeliculas();
  };

  return (
    <>
    <div className="container">
      <div className="form">
        <form onSubmit={handleSubmit}>
          
          <input
          className="input-busqueda"
            type="text"
            placeholder="¿Qué pelicula estás buscando?"
            value={busqueda}
            onChange={cambiarValor}
          />
    
        <button type="submit" className="btn-busqueda"><i className="bi bi-search"></i></button>
      
        </form>
      </div>
      <div className="item-pelicula-busqueda">
        {peliculas.map((pelicula) => (
          <Pelicula key={pelicula.id} pelicula={pelicula} />
        ))}
      </div>
      </div>
    </>
  );
};

export { Busqueda };
