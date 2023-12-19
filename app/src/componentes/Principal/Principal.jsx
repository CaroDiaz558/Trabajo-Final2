import React from "react";
import "./Principal.css";
import { useState, useEffect } from "react";
import { Pelicula } from "../Pelicula/Pelicula";

const Principal = () => {
  const urlPath = "https://image.tmdb.org/t/p/original";

  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=4fcdaa247f25fc494a1f07e200832cb7&language=es-ES`
    )
      .then((response) => response.json())
      .then((data) => {
        setPeliculas(data.results);
      });
  }, []);

  return (
    <>
    <section className="principal" >
   
      <div className="title-principal">Estrenos de la Semana</div>

      <div className="item-pelicula-principal">
        {peliculas.map((pelicula) => ( 
          <Pelicula key={pelicula.id} pelicula={pelicula} />
        ))}
      </div>
      </section>
    </>
  );
};

export { Principal };
