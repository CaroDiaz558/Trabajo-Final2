import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Favoritos } from "../Favoritos/Favoritos";


const Pelicula = ({ pelicula }) => {
  const urlPath = "https://image.tmdb.org/t/p/original";
  
 
  return (
    <>
      <div className="item-pelicula">

        <Link to={`/pelicula/${pelicula.id}`}>
          <div>
            <img src={`${urlPath + pelicula.poster_path}`} width="300" alt="" />
          </div>
        </Link>
        <div className="info-pelicula">
          <h3>{pelicula.title}</h3>
          {/* <div className="icon-favorito">
            {favorito ? (
              <i className="bi bi-dash-circle icon-fav" onClick={agregarFavorito}></i>
            ) : (
              <i className="bi bi-plus-circle-fill icon-fav" onClick={agregarFavorito} ></i>
            )}
          </div> */}
        </div>
      </div>
      {/* <Favoritos key={favoritos.id} favoritos={favoritos}/> */}
    </>
  );
};

export { Pelicula };
