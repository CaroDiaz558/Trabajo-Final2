import React from "react";
import "./DetallePelicula.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const DetallePelicula = ({ agregarFavoritos, eliminarFavoritos}) => {
  
  const { id } = useParams();
  
  const [pelicula, setPelicula] = useState({});

  const [fav, setFav] = useState(false);


  const fetchPelicula = (id) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4fcdaa247f25fc494a1f07e200832cb7&language=es-ES`
    )
      .then((response) => response.json())
      .then((data) => {
       setPelicula(data);
      });
  };

  useEffect(() => {
    fetchPelicula(id);
  }, [id]);



 

  function agregarFavorito() {   
    if (fav) {
      eliminarFavoritos(id);
      setFav(false);
    } else {
     agregarFavoritos(pelicula);
      setFav(true);
    }
  }

  const urlPath = "https://image.tmdb.org/t/p/original";

  return (
    <>
      <div className="detalle-pelicula">
        <div className="detalle-pelicula-img">
          <img src={`${urlPath + pelicula.poster_path}`} width="300" alt="" />
        </div>
        <div className="detalle-info-pelicula">
          <h2>{pelicula.title}</h2>
          <h4>{pelicula.release_date}</h4>

          <ul>
            {pelicula.genres &&
              pelicula.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
          </ul>
          <p>{pelicula.overview}</p>
        
          <div className="icon-favorito">
         
          {fav ? (
            <i className="bi bi-dash-circle icon-fav" onClick={agregarFavorito}>
              {" "}
            </i>
          ) : (
            <i
              className="bi bi-plus-circle-fill icon-fav"
                onClick={agregarFavorito}
            >
              {" "}
            </i>
          )}
        </div>
        </div>
       
      </div>
   
    </>
  );
};

export { DetallePelicula };
